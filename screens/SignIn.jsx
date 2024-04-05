import React, { useContext, useState } from 'react'
import { ActivityIndicator, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

// styling
import { signin, darkSignin } from '../styles/signin'

// images
import carecard from '../assets/logo.png'

// utils
import { color } from '../utils/color'
import { moderateScale } from '../utils/metrics'
import { ThemeContext } from '../utils/theme'

export default function SignIn() {

    const { theme } = useContext(ThemeContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <ScrollView style={theme === 'light' ? signin.main : darkSignin.main}>
            <Image source={carecard} style={theme === 'light' ? signin.logo : darkSignin.logo} />

            <Text style={theme === 'light' ? signin.title : darkSignin.title}>Login</Text>

            <Text style={theme === 'light' ? signin.sectionHeader : darkSignin.sectionHeader}>Email</Text>
            <View style={theme === 'light' ? signin.section : darkSignin.section}>
                <TextInput
                    placeholder="Enter your email"
                    selectionColor={'#0080006b'}
                    cursorColor={color.main}
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                    style={theme === 'light' ? signin.textInput : darkSignin.textInput}
                />
            </View>

            <Text style={theme === 'light' ? signin.sectionHeader : darkSignin.sectionHeader}>Password</Text>
            <View style={theme === 'light' ? signin.section : darkSignin.section}>
                <TextInput
                    placeholder="Enter your Current Password"
                    selectionColor={'#0080006b'}
                    cursorColor={color.main}
                    textContentType="password"
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                    secureTextEntry={showPassword}
                    style={theme === 'light' ? signin.textInput : darkSignin.textInput}
                />
            </View>

            <View style={theme === 'light' ? signin.showPasswordContainer : darkSignin.showPasswordContainer}>
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ?
                        <Ionicons name='checkbox' color={color.main} size={moderateScale(24)} /> :
                        <MaterialCommunityIcons name='checkbox-blank-outline' color={color.jet} size={moderateScale(24)} />
                    }
                </TouchableOpacity>
                <Text style={theme === 'light' ? signin.showPasswordText : darkSignin.showPasswordText}>Show Password</Text>
            </View>

            <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? signin.buttonContainer : darkSignin.buttonContainer}>
                {isLoading ?
                    <ActivityIndicator color={'white'} size={'small'} style={theme === 'light' ? signin.button : darkSignin.button} /> :
                    <Text style={theme === 'light' ? signin.button : darkSignin.button}>Login</Text>
                }
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? signin.forgotPassword : darkSignin.forgotPassword}>
                <Text style={theme === 'light' ? signin.forgotPassword : darkSignin.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? signin.register : darkSignin.register} onPress={() => navigation.navigate('SignupScreen')}>
                <Text style={theme === 'light' ? signin.registerText : darkSignin.registerText}>Don't have an account?</Text>
                <Text style={theme === 'light' ? signin.registerLink : darkSignin.registerLink}> Register Now</Text>
            </TouchableOpacity>

            <View style={theme === 'light' ? signin.spacer : darkSignin.spacer}></View>

        </ScrollView>
    )
}