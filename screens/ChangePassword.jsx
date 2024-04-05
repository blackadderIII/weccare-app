import React, { useContext, useState } from 'react'
import { Image, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

// components
import HeaderComponent from '../components/headerComponent'

// styling
import { changePass, darkChangePass } from '../styles/changePassword'

// utils
import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme'
import { moderateScale } from '../utils/metrics'

// images
import reset from '../assets/icons/reset.png'

export default function ChangePassword() {

    const { theme } = useContext(ThemeContext)

    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <View style={theme === 'light' ? changePass.main : darkChangePass.main}>
            <HeaderComponent
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

                <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? changePass.buttonContainer : darkChangePass.buttonContainer}>
                    {isLoading ? <ActivityIndicator color={'white'} size={'small'} style={theme === 'light' ? changePass.button : darkChangePass.button} /> : <Text style={theme === 'light' ? changePass.button : darkChangePass.button}>Change</Text>}
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}