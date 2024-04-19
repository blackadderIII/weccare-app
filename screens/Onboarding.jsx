import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Entypo from '@expo/vector-icons/Entypo'
import Onboarding from 'react-native-onboarding-swiper'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'
import { errorToast } from '../utils/toasts'

import { color } from '../utils/color'
import { obStyles } from '../styles/onboarding'

export default function OnboardingScreen() {

    const navigation = useNavigation()

    const doneButton = ({ ...props }) => {
        return (
            <TouchableOpacity activeOpacity={.7} style={obStyles.button} {...props}>
                <Entypo name='check' color={color.white} size={moderateScale(18)} />
            </TouchableOpacity>
        )
    }

    const nextButton = ({ ...props }) => {
        return (
            <TouchableOpacity activeOpacity={.7} style={obStyles.button} {...props}>
                <Entypo name='chevron-right' color={color.white} size={moderateScale(18)} />
            </TouchableOpacity>
        )
    }

    const skipButton = ({ ...props }) => {
        return (
            <TouchableOpacity activeOpacity={.7} {...props}>
                <Text style={{ fontFamily: 'poppins-s', marginLeft: horizontalScale(20), fontSize: moderateScale(14), color: '#0007' }}>Skip</Text>
            </TouchableOpacity>
        )
    }

    const circle = ({ isLight, selected }) => {
        let backgroundColor;
        if (isLight) {
            backgroundColor = selected ? color.main : color.silver;
        } else {
            backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
        }
        return (
            <>
                {selected ?
                    <View style={{
                        width: horizontalScale(10),
                        height: verticalScale(10),
                        borderRadius: 10,
                        marginHorizontal: 3,
                        backgroundColor,
                    }}
                    /> : <View style={{
                        width: horizontalScale(7),
                        height: verticalScale(7),
                        borderRadius: 10,
                        marginHorizontal: 3,
                        backgroundColor,
                    }} />
                }
            </>
        );
    };

    const navigate = async () => {
        try {
            await AsyncStorage.setItem('firstTime', 'false')
            navigation.replace('signin')
            return
        } catch (error) {
            console.log('Error setting first time: ', error)
            errorToast('An error occured. Please try again later.')
            return
        }
    }

    return (
        <>
            <StatusBar style='dark' backgroundColor={color.background} />
            <View style={obStyles.main}>

                <Onboarding
                    onDone={navigate}
                    onSkip={navigate}
                    SkipButtonComponent={skipButton}
                    NextButtonComponent={nextButton}
                    DoneButtonComponent={doneButton}
                    DotComponent={circle}
                    bottomBarHeight={verticalScale(100)}
                    bottomBarHighlight={false}
                    containerStyles={{ paddingHorizontal: horizontalScale(20), }}
                    pages={[
                        {
                            backgroundColor: color.background,
                            image: <Image source={require('../assets/onboarding/1.png')} style={obStyles.image} />,
                            title: <Text style={obStyles.title}>Welcome</Text>,
                            subtitle: <Text style={obStyles.subtitle}>Say hello to a smarter way of writing care cards.</Text>,
                        },
                        {
                            backgroundColor: color.background,
                            image: <Image source={require('../assets/onboarding/2.png')} style={obStyles.image} />,
                            title: <Text style={obStyles.title}>Write Care Cards</Text>,
                            subtitle: <Text style={obStyles.subtitle}>Write a care card, have it submitted and track its progress, quickly and easily.</Text>,
                        },
                        {
                            backgroundColor: color.background,
                            image: <Image source={require('../assets/onboarding/3.png')} style={obStyles.image} />,
                            title: <Text style={obStyles.title}>Get Started</Text>,
                            subtitle: <Text style={obStyles.subtitle}>Create an account to get started.</Text>,
                        }
                    ]}
                />
            </View>
        </>
    )
}
