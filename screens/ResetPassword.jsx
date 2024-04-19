import React, { useContext, useState } from 'react'
import { ActivityIndicator, Image, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

import HeaderComponent from '../components/headerComponent'

import { changePass, darkChangePass } from '../styles/changePassword'

import { color } from '../utils/color'
import { moderateScale } from '../utils/metrics'
import { ThemeContext } from '../utils/theme'

import reset from '../assets/icons/reset.png'
import { errorToast, successToast, warnToast } from '../utils/toasts'
import { api } from '../utils/api'

export default function ResetPassword() {

    const { theme } = useContext(ThemeContext)

    const navigation = useNavigation()
    const route = useRoute()

    const { email } = route.params

    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const resetPassword = async () => {

        if (!newPassword || !confirmPassword) {
            warnToast("Fields can't be empty. Please check and try again.")
            return
        }

        if (newPassword !== confirmPassword) {
            warnToast("Passwords do not match. Please check and try again.")
            return
        }

        setIsLoading(true)

        try {
            const reset = await fetch(`${api}/resetPassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: newPassword
                })
            })

            const response = await reset.json()

            if (response.message === 'error executing query' || response.message === 'failed') {
                setIsLoading(false)
                errorToast("An error occured. Please try again later")
                return
            }

            setIsLoading(false)
            successToast("Password changed successfully!")
            navigation.navigate('signin')
            return

        } catch (error) {
            setIsLoading(false)
            console.log('error resseting password', error)
            errorToast("Can't reach servers now. Please try again later.")
            return
        }
    }

    return (
        <View style={theme === 'light' ? changePass.main : darkChangePass.main}>
            <HeaderComponent
                onPress={() => navigation.navigate('forgotPassword')}
                theme={theme}
                title={'Reset Password'}
            />

            <ScrollView>

                <Image source={reset} style={theme === 'light' ? changePass.illustration : darkChangePass.illustration} />

                <Text style={theme === 'light' ? changePass.sectionHeader : darkChangePass.sectionHeader}>New Password</Text>
                <View style={theme === 'light' ? changePass.section : darkChangePass.section}>
                    <TextInput
                        placeholder="Enter your New Password"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textContentType="newPassword"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                        secureTextEntry={showPassword}
                        style={theme === 'light' ? changePass.textInput : darkChangePass.textInput}
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
                        placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                        secureTextEntry={showPassword}
                        style={theme === 'light' ? changePass.textInput : darkChangePass.textInput}
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

                <TouchableOpacity activeOpacity={0.7} onPress={() => resetPassword()} style={theme === 'light' ? changePass.buttonContainer : darkChangePass.buttonContainer}>
                    {isLoading ? <ActivityIndicator color={'white'} size={'small'} style={theme === 'light' ? changePass.button : darkChangePass.button} /> : <Text style={theme === 'light' ? changePass.button : darkChangePass.button}>Reset</Text>}
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}