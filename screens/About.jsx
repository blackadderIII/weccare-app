import { Image, View, Text } from 'react-native'
import React from 'react'

// styling
import { about } from '../styles/about'

// component
import HeaderComponent from '../components/headerComponent'

// images
import carecard from '../assets/logo.png'
import wec from '../assets/wec-logo.png'
import ZeroHarm from '../assets/zero-harm.png'

export default function About() {
    return (
        <View style={about.main}>
            <HeaderComponent
                title={'About'}
            />

            <View style={about.container}>

                <View style={about.logos}>
                    <Image source={carecard} style={about.logoOne} />
                </View>

                <View style={about.textContainer}>
                    <Text style={about.text}>
                        The Care Card App is a system designed to empower you report potential hazards,
                        unsafe behaviors and conditions through a systematic observation
                        of the work environment and activities.{`\n`}
                        By utilizing these observations, our goal is to implement corrective actions,
                        ultimately enhancing workplace safety for all.{`\n`}
                        If you see something, say something, and report it!{`\n`}
                        If you see it, own it and fix it!{`\n`}
                        Have a safe working day!
                    </Text>
                </View>

                <View style={about.logos}>
                    <Image source={wec} style={about.logoOne} />
                    <Image source={ZeroHarm} style={about.logoTwo} />
                </View>

            </View>

        </View>
    )
}