import React, { useRef, useState } from 'react'
import { Image, View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'

import HeaderComponent from '../components/headerComponent'

import { verify } from '../styles/verify'

import otp from '../assets/icons/otp.png'

import { color } from '../utils/color'

export default function VerifyCode() {

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


    return (
        <View style={verify.main}>
            <HeaderComponent
                title={'Verify Email'}
            />

            <ScrollView>
                <Image source={otp} style={verify.illustration} />

                <Text style={verify.description}>
                    Check your email for the verification code we've sent and enter it below
                </Text>

                <View style={verify.section}>
                    {inputs.map((item, index) => (
                        <TextInput
                            key={index}
                            style={[verify.textInputBlur, focusedInput === index && verify.textInput]}
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

                <TouchableOpacity activeOpacity={0.7} style={verify.buttonContainer}>
                    {isLoading ? <ActivityIndicator color={'white'} size={'small'} style={verify.button} /> : <Text style={verify.button}>Send</Text>}
                </TouchableOpacity>

                <Text style={verify.descriptionSmall}>
                    Didn't recieve a code?{`\n`}
                    Confirm that your email is correct and try again.
                </Text>

            </ScrollView>
        </View>
    )
}