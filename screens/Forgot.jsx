import React, { useState } from 'react'
import { ActivityIndicator, Image, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'

// components
import HeaderComponent from '../components/headerComponent'

import { forgot } from '../styles/forgot'

// utils
import { color } from '../utils/color'

// images
import forgotImg from '../assets/icons/forgot.png'

export default function Forgot() {

    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    return (
        <View style={forgot.main}>
            <HeaderComponent
                title={'Forgot Password'}
            />

            <ScrollView>
                <Image source={forgotImg} style={forgot.illustration} />

                <Text style={forgot.description}>
                    Enter the email address linked to your account to recieve a verification code.
                </Text>

                <View style={forgot.section}>
                    <TextInput
                        placeholder='eg. someone@example.com'
                        cursorColor={color.main}
                        textContentType='emailAddress'
                        selectionColor={color.main}
                        style={forgot.textInput}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.7} style={forgot.buttonContainer}>
                    {isLoading ? <ActivityIndicator color={'white'} size={'small'} style={forgot.button} /> : <Text style={forgot.button}>Send</Text>}
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}