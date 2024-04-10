import React, { useContext, useState } from 'react'
import { ActivityIndicator, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

// styling
import { signin, darkSignin } from '../styles/signin'

// images
import carecard from '../assets/logo.png'

// utils
import { api } from '../utils/api'
import { color } from '../utils/color'
import { moderateScale } from '../utils/metrics'
import { UserContext } from '../utils/user'
import { ThemeContext } from '../utils/theme'
import { warnToast, errorToast } from '../utils/toasts'

export default function SignIn() {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const { setUser } = useContext(UserContext)

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const login = async () => {
        if (!email || !password) {
            warnToast("Fields can't be empty. Please check and try again")
            return
        }
        setIsLoading(true)

        try {
            const loginApi = await fetch(`${api}:3000/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            })

            const response = await loginApi.json()

            if (response.message === 'error executing query') {
                setIsLoading(false)
                errorToast("Can't reach servers. Please try again later")
                return
            }
            if (response.message === 'user does not exist' || response.message === 'incorrect password') {
                setIsLoading(false)
                errorToast('Incorrect email or password')
                return
            }

            setIsLoading(false)
            const userInfo = response.info
            setUser(userInfo)
            return
        }
        catch (error) {
            setIsLoading(false)
            console.log('error logging in', error)
            errorToast('An error occured. Please try again later')
            return
        }
    }

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
                    keyboardType='email-address'
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
                    secureTextEntry={!showPassword}
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

            <TouchableOpacity activeOpacity={0.7} onPress={() => login()} style={theme === 'light' ? signin.buttonContainer : darkSignin.buttonContainer}>
                {isLoading ?
                    <ActivityIndicator color={'white'} size={'small'} style={theme === 'light' ? signin.button : darkSignin.button} /> :
                    <Text style={theme === 'light' ? signin.button : darkSignin.button}>Login</Text>
                }
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('forgotPassword')} style={theme === 'light' ? signin.forgotPassword : darkSignin.forgotPassword}>
                <Text style={theme === 'light' ? signin.forgotPassword : darkSignin.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('signup')} style={theme === 'light' ? signin.register : darkSignin.register}>
                <Text style={theme === 'light' ? signin.registerText : darkSignin.registerText}>Don't have an account?</Text>
                <Text style={theme === 'light' ? signin.registerLink : darkSignin.registerLink}> Register Now</Text>
            </TouchableOpacity>

            <View style={theme === 'light' ? signin.spacer : darkSignin.spacer}></View>

        </ScrollView>
    )
}