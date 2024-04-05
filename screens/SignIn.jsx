import React, { useState } from 'react'
import { ActivityIndicator, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

// styling
import { signin } from '../styles/signin'

// images
import carecard from '../assets/logo.png'

// utils
import { color } from '../utils/color'
import { moderateScale } from '../utils/metrics'

export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <ScrollView style={signin.main}>
            <Image source={carecard} style={signin.logo} />

            <Text style={signin.title}>Login</Text>

            <Text style={signin.sectionHeader}>Email</Text>
            <View style={signin.section}>
                <TextInput
                    placeholder="Enter your email"
                    selectionColor={'#0080006b'}
                    cursorColor={color.main}
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={setEmail}
                    style={signin.textInput}
                />
            </View>

            <Text style={signin.sectionHeader}>Password</Text>
            <View style={signin.section}>
                <TextInput
                    placeholder="Enter your Current Password"
                    selectionColor={'#0080006b'}
                    cursorColor={color.main}
                    textContentType="password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={showPassword}
                    style={signin.textInput}
                />
            </View>

            <View style={signin.showPasswordContainer}>
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ?
                        <Ionicons name='checkbox' color={color.main} size={moderateScale(24)} /> :
                        <MaterialCommunityIcons name='checkbox-blank-outline' color={color.jet} size={moderateScale(24)} />
                    }
                </TouchableOpacity>
                <Text style={signin.showPasswordText}>Show Password</Text>
            </View>

            <TouchableOpacity activeOpacity={0.7} style={signin.buttonContainer}>
                {isLoading ?
                    <ActivityIndicator color={'white'} size={'small'} style={signin.button} /> :
                    <Text style={signin.button}>Login</Text>
                }
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={signin.forgotPassword}>
                <Text style={signin.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={signin.register} onPress={() => navigation.navigate('SignupScreen')}>
                <Text style={signin.registerText}>Don't have an account?</Text>
                <Text style={signin.registerLink}> Register Now</Text>
            </TouchableOpacity>

            <View style={signin.spacer}></View>

        </ScrollView>
    )
}