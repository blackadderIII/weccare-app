import React, { useContext, useState } from 'react'
import { ActivityIndicator, Image, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'

// components
import HeaderComponent from '../components/headerComponent'

import { forgot, darkForgot } from '../styles/forgot'

// utils
import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme'

// images
import forgotImg from '../assets/icons/forgot.png'

export default function Forgot() {

    const { theme } = useContext(ThemeContext)

    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    return (
        <View style={theme === 'light' ? forgot.main : darkForgot.main}>
            <HeaderComponent
                title={'Forgot Password'}
            />

            <ScrollView>
                <Image source={forgotImg} style={theme === 'light' ? forgot.illustration : darkForgot.illustration} />

                <Text style={theme === 'light' ? forgot.description : darkForgot.description}>
                    Enter the email address linked to your account to recieve a verification code.
                </Text>

                <View style={theme === 'light' ? forgot.section : darkForgot.section}>
                    <TextInput
                        placeholder='eg. someone@example.com'
                        cursorColor={color.main}
                        textContentType='emailAddress'
                        selectionColor={color.main}
                        style={theme === 'light' ? forgot.textInput : darkForgot.textInput}
                        value={email}
                        placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                        onChangeText={setEmail}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? forgot.buttonContainer : darkForgot.buttonContainer}>
                    {isLoading ? <ActivityIndicator color={'white'} size={'small'} style={theme === 'light' ? forgot.button : darkForgot.button} /> : <Text style={theme === 'light' ? forgot.button : darkForgot.button}>Send</Text>}
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}