import React, { useContext } from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import HeaderComponent from '../components/headerComponent'

import { ThemeContext } from '../utils/theme'

import { themeStyle, darkThemeStyle } from '../styles/theme'

import darkTheme from '../assets/dark.png'
import lightTheme from '../assets/light.png'

export default function Theme() {

    const { theme, setTheme } = useContext(ThemeContext)

    const navigation = useNavigation()

    return (
        <View style={theme === 'light' ? themeStyle.main : darkThemeStyle.main}>
            <HeaderComponent
                onPress={() => navigation.goBack()}
                theme={theme}
                title={'Theme'}
            />

            <Text style={theme === 'light' ? themeStyle.description : darkThemeStyle.description}>Select a theme</Text>

            <View style={theme === 'light' ? themeStyle.pickerContainer : darkThemeStyle.pickerContainer}>
                <TouchableOpacity activeOpacity={.7} onPress={() => setTheme('dark')} style={theme === 'light' ? themeStyle.theme : darkThemeStyle.themeActive}>
                    <Image source={darkTheme} style={theme === 'light' ? themeStyle.themeImg : darkThemeStyle.themeImg} />
                    <Text style={theme === 'light' ? themeStyle.themeText : darkThemeStyle.themeText}>Dark Theme</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={() => setTheme('light')} style={theme === 'light' ? themeStyle.themeActive : darkThemeStyle.theme}>
                    <Image source={lightTheme} style={theme === 'light' ? themeStyle.themeImg : darkThemeStyle.themeImg} />
                    <Text style={theme === 'light' ? themeStyle.themeText : darkThemeStyle.themeText}>Light Theme</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}