import React, { useContext, useRef, useState } from 'react'
import { ActivityIndicator, Image, View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import HeaderComponent from '../components/headerComponent'

import { verify, darkVerify } from '../styles/verify'

import otp from '../assets/icons/otp.png'

import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme'
import { errorToast } from '../utils/toasts'
import { api } from '../utils/api'

export default function VerifyCode() {

    const { theme } = useContext(ThemeContext)

    const navigation = useNavigation()
    const route = useRoute()

    const { email } = route.params

    const [verificationCode, setVerificationCode] = useState([]);
    const [focusedInput, setFocusedInput] = useState();
    const [isLoading, setIsLoading] = useState(false)

    const inputs = Array(4).fill(0);

    const inputRefs = inputs.map(() => useRef(null));

    const handleChangeText = (text, index) => {
        const newVerificationCode = [...verificationCode];
        newVerificationCode[index] = text;
        setVerificationCode(newVerificationCode);

        // If there is text entered and it's not the last input, focus on the next input
        if (text && index < inputs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleFocus = (index) => {
        setFocusedInput(index);
    };

    const handleBlur = () => {
        setFocusedInput(-1);
    };

    const verifyCode = async () => {
        const vCode = verificationCode.join('')

        if (!verificationCode) {
            errorToast("Enter verification code")
            return
        }

        setIsLoading(true)

        try {
            const verifyCode = await fetch(`${api}/verifyCode/${email}/${vCode}`)
            const response = await verifyCode.json()

            if (response.message === 'error executing query') {
                setIsLoading(false)
                errorToast("An error occured. Please try again later")
                return
            }

            if (response.message === 'incorrect code') {
                setIsLoading(false)
                errorToast("Incorrect code. Please check and try again")
                return
            }

            setIsLoading(false)
            navigation.navigate('resetPassword', { email: email })
            return

        } catch (error) {
            setIsLoading(false)
            console.log('Error verifying code', error)
            errorToast("Can't reach servers. Please try again later.")
            return
        }
    }

    return (
        <View style={theme === 'light' ? verify.main : darkVerify.main}>
            <HeaderComponent
                onPress={() => navigation.goBack()}
                theme={theme}
                title={'Verify Email'}
            />

            <ScrollView>
                <Image source={otp} style={theme === 'light' ? verify.illustration : darkVerify.illustration} />

                <Text style={theme === 'light' ? verify.description : darkVerify.description}>
                    Check your email for the verification code we've sent and enter it below
                </Text>

                <View style={theme === 'light' ? verify.section : darkVerify.section}>
                    {inputs.map((item, index) => (
                        <TextInput
                            key={index}
                            style={(theme === 'light' ? verify.textInputBlur : darkVerify.textInputBlur, focusedInput === index && theme === 'light' ? verify.textInput : darkVerify.textInput)}
                            onFocus={() => handleFocus(index)}
                            onBlur={handleBlur}
                            keyboardType="numeric"
                            cursorColor={color.main}
                            selectionColor={color.main}
                            maxLength={1}
                            onChangeText={(text) => handleChangeText(text, index)}
                            value={verificationCode[index]}
                            ref={inputRefs[index]}
                        />
                    ))}
                </View>

                <TouchableOpacity activeOpacity={0.7} onPress={() => verifyCode()} style={theme === 'light' ? verify.buttonContainer : darkVerify.buttonContainer}>
                    {isLoading ? <ActivityIndicator color={'white'} size={'small'} style={theme === 'light' ? verify.button : darkVerify.button} /> : <Text style={theme === 'light' ? verify.button : darkVerify.button}>Verify</Text>}
                </TouchableOpacity>

                <Text style={theme === 'light' ? verify.descriptionSmall : darkVerify.descriptionSmall}>
                    Didn't recieve a code?{`\n`}
                    Confirm that your email is correct and try again.
                </Text>

            </ScrollView>
        </View>
    )
}