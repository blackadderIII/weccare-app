import React, { useContext, useState } from 'react'
import { ActivityIndicator, Image, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import HeaderComponent from '../components/headerComponent'

import { changePass, darkChangePass } from '../styles/changePassword'

import { api } from '../utils/api'
import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme'
import { UserContext } from '../utils/user'
import { moderateScale } from '../utils/metrics'
import { errorToast, successToast, warnToast } from '../utils/toasts'

import reset from '../assets/icons/reset.png'

export default function ChangePassword() {

    const { theme } = useContext(ThemeContext)
    const { user, setUser } = useContext(UserContext)

    const navigation = useNavigation()

    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const change = async () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            warnToast("Fields can't be empty. Please check and try again.")
            return
        }
        if (newPassword !== confirmPassword) {
            warnToast("Passwords don't match. Please check and try again.")
            return
        }

        setIsLoading(true)

        try {
            const changePass = await fetch(`${api}:3000/changePassword`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user.email,
                    currentPassword: currentPassword,
                    newPassword: newPassword,
                })
            })
            const response = await changePass.json()

            if (response.message === 'error executing query') {
                setIsLoading(false)
                errorToast("Can't reach servers. Please try again later.")
                return
            }
            if (response.message === 'failed') {
                setIsLoading(false)
                errorToast("An error occured. Please try again later.")
                return
            }
            if (response.message === 'incorrect password') {
                setIsLoading(false)
                errorToast("Password incorrect")
                return
            }

            const userInfo = response.info
            setUser(userInfo)

            setIsLoading(false)
            successToast("Password changed successfully")
            navigation.goBack()
            return
        }
        catch (error) {
            setIsLoading(false)
            console.log('error changing password', error)
            errorToast("An error occured. Please try again later.")
            return
        }
    }

    return (
        <View style={theme === 'light' ? changePass.main : darkChangePass.main}>
            <HeaderComponent
                onPress={() => navigation.goBack()}
                theme={theme}
                title={'Change Password'}
            />

            <ScrollView>

                <Image source={reset} style={theme === 'light' ? changePass.illustration2 : darkChangePass.illustration2} />

                <Text style={theme === 'light' ? changePass.description : darkChangePass.description}>
                    Your new password should be different from the previous one you used.
                </Text>

                <Text style={theme === 'light' ? changePass.sectionHeader : darkChangePass.sectionHeader}>Current Password</Text>
                <View style={theme === 'light' ? changePass.section : darkChangePass.section}>
                    <TextInput
                        placeholder="Enter your Current Password"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textContentType="password"
                        value={currentPassword}
                        onChangeText={setCurrentPassword}
                        secureTextEntry={showPassword}
                        style={theme === 'light' ? changePass.textInput : darkChangePass.textInput}
                        placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                    />
                </View>

                <Text style={theme === 'light' ? changePass.sectionHeader : darkChangePass.sectionHeader}>New Password</Text>
                <View style={theme === 'light' ? changePass.section : darkChangePass.section}>
                    <TextInput
                        placeholder="Enter your New Password"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textContentType="newPassword"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry={showPassword}
                        style={theme === 'light' ? changePass.textInput : darkChangePass.textInput}
                        placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                    />
                </View>

                <Text style={theme === 'light' ? changePass.sectionHeader : darkChangePass.sectionHeader}>Confirm Password</Text>
                <View style={theme === 'light' ? changePass.section : darkChangePass.section}>
                    <TextInput
                        placeholder="Confirm your New Password"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textContentType="newPassword"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={showPassword}
                        style={theme === 'light' ? changePass.textInput : darkChangePass.textInput}
                        placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                    />
                </View>

                <View style={theme === 'light' ? changePass.showPasswordContainer : darkChangePass.showPasswordContainer}>
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ?
                            <MaterialCommunityIcons name='checkbox-blank-outline' color={color.jet} size={moderateScale(24)} /> :
                            <Ionicons name='checkbox' color={color.main} size={moderateScale(24)} />
                        }
                    </TouchableOpacity>
                    <Text style={theme === 'light' ? changePass.showPasswordText : darkChangePass.showPasswordText}>Show Password</Text>
                </View>

                <TouchableOpacity activeOpacity={0.7} onPress={() => change()} style={theme === 'light' ? changePass.buttonContainer : darkChangePass.buttonContainer}>
                    {isLoading ? <ActivityIndicator color={'white'} size={'small'} style={theme === 'light' ? changePass.button : darkChangePass.button} /> : <Text style={theme === 'light' ? changePass.button : darkChangePass.button}>Change</Text>}
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}