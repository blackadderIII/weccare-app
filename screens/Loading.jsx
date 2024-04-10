import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, StyleSheet } from 'react-native'

// utils
import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme';

export default function Loading() {

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <StatusBar style={theme === 'light' ? 'dark' : 'light'} backgroundColor={theme === 'light' ? color.background : color.darkBackground} />
            <View style={theme === 'light' ? styles.container : darkStyles.container}>
                <ActivityIndicator size={'large'} color={color.main} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: color.background, justifyContent: 'center'
    }
})

const darkStyles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: color.darkBackground, justifyContent: 'center'
    }
})