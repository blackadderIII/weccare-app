import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native'

// utils
import { color } from '../utils/color'

export default function Loading() {
    return (
        <>
            <StatusBar style='dark' backgroundColor={color.background} />
            <View style={{ flex: 1, backgroundColor: color.background, justifyContent: 'center' }}>
                <ActivityIndicator size={'large'} color={color.main} />
            </View>
        </>
    )
}