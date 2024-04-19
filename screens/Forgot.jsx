import React, { useContext, useState } from 'react'
import { ActivityIndicator, Image, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// components
import HeaderComponent from '../components/headerComponent'

import { forgot, darkForgot } from '../styles/forgot'

// utils
import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme'

// images
import forgotImg from '../assets/icons/forgot.png'
import { errorToast, successToast, warnToast } from '../utils/toasts'
import { api } from '../utils/api'

export default function Forgot() {

    const { theme } = useContext(ThemeContext)

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const sendCode = async () => {

        if (!email || email.trim() === '') {
            warnToast("Enter an email.")
            return
        }

        setIsLoading(true)

        try {
            const sendcode = await fetch(`${api}/forgotPassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                })
            })

            const response = await sendcode.json()

            if (response.message === 'error executing query') {
                setIsLoading(false)
                errorToast("Can't reach servers. Please try again later")
                return
            }

            if (response.message === "user doesn't exist") {
                setIsLoading(false)
                errorToast("User does not exist")
                return
            }

            if (response.message === "Error sending Mail") {
                setIsLoading(false)
                errorToast("An error occured. Please try again later")
                return
            }

            setIsLoading(false)
            successToast('Mail Sent')
            navigation.navigate('verifyCode', { email: email })
            return

        } catch (error) {
            setIsLoading(false)
            console.log('error sending code', error)
            errorToast("An error occured. Please try again later")
            return
        }
    }

    return (
        <View style={theme === 'light' ? forgot.main : darkForgot.main}>
            <HeaderComponent
                theme={theme}
                onPress={() => navigation.navigate('signin')}
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
                        keyboardType='email-address'
                        selectionColor={color.main}
                        style={theme === 'light' ? forgot.textInput : darkForgot.textInput}
                        value={email}
                        placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                        onChangeText={setEmail}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.7} onPress={() => sendCode()} style={theme === 'light' ? forgot.buttonContainer : darkForgot.buttonContainer}>
                    {isLoading ? <ActivityIndicator color={'white'} size={'small'} style={theme === 'light' ? forgot.button : darkForgot.button} /> : <Text style={theme === 'light' ? forgot.button : darkForgot.button}>Send</Text>}
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}