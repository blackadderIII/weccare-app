import { Image, View, Text } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'

// styling
import { about, darkAbout } from '../styles/about'

// component
import HeaderComponent from '../components/headerComponent'

// images
import carecard from '../assets/logo.png'
import wec from '../assets/wec-logo.png'
import wecLight from '../assets/wec-logo_light.png'
import ZeroHarm from '../assets/zero-harm.png'
import ZeroHarmLight from '../assets/zero-harm_light.png'

// utils
import { ThemeContext } from '../utils/theme'

export default function About() {

    const { theme } = useContext(ThemeContext)

    const navigation = useNavigation()

    return (
        <View style={theme === 'light' ? about.main : darkAbout.main}>
            <HeaderComponent
                onPress={() => navigation.goBack()}
                theme={theme}
                title={'About'}
            />

            <View style={theme === 'light' ? about.container : darkAbout.container}>

                <View style={theme === 'light' ? about.logos : darkAbout.logos}>
                    <Image source={carecard} style={theme === 'light' ? about.logoOne : darkAbout.logoOne} />
                </View>

                <View style={theme === 'light' ? about.textContainer : darkAbout.textContainer}>
                    <Text style={theme === 'light' ? about.text : darkAbout.text}>
                        The WEC Care App is a system designed to empower you report potential hazards,
                        unsafe behaviors and conditions through a systematic observation
                        of the work environment and activities.{`\n`}
                        By utilizing these observations, our goal is to implement corrective actions,
                        ultimately enhancing workplace safety for all.{`\n`}
                        If you see something, say something, and report it!{`\n`}
                        If you see it, own it and fix it!{`\n`}
                        Have a safe working day!
                    </Text>
                </View>

                <View style={theme === 'light' ? about.logos : darkAbout.logos}>
                    <Image source={theme === 'light' ? wec : wecLight} style={theme === 'light' ? about.logoOne : darkAbout.logoOne} />
                    <Image source={theme === 'light' ? ZeroHarm : ZeroHarmLight} style={theme === 'light' ? about.logoTwo : darkAbout.logoTwo} />
                </View>

            </View>

        </View>
    )
}