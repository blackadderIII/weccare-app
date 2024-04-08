import React from 'react'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export default function CarecardOverview({ theme, onClick, imgSource, color, iconName, amount, tabName }) {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={onClick}>
            <ImageBackground source={imgSource} style={theme === 'light' ? styles.tabContainer : darkStyles.tabContainer} imageStyle={{ borderRadius: moderateScale(20) }}>
                <View style={theme === 'light' ? styles.iconContainer : darkStyles.iconContainer}>
                    <Feather name={iconName} color={color} style={theme === 'light' ? styles.icon : darkStyles.icon} />
                </View>
                <Text style={theme === 'light' ? styles.amount : darkStyles.amount}>{amount}</Text>
                <Text style={theme === 'light' ? styles.tabNames : darkStyles.tabNames}>{tabName}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        width: horizontalScale(170),
        height: verticalScale(190),
        backgroundColor: '#ffffff',
        borderRadius: moderateScale(20),
        padding: moderateScale(20),
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(10),
        elevation: 10,
        shadowColor: '#0003',
    },
    icon: {
        fontSize: moderateScale(32)
    },
    amount: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'poppins-s',
        fontSize: moderateScale(50),
        color: color.jet
    },
    tabNames: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        color: '#222222',
    },
})

const darkStyles = StyleSheet.create({
    tabContainer: {
        width: horizontalScale(170),
        height: verticalScale(190),
        backgroundColor: color.darkComponent,
        borderRadius: moderateScale(20),
        padding: moderateScale(20),
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(10),
        elevation: 10,
        shadowColor: '#0003',
    },
    icon: {
        fontSize: moderateScale(32)
    },
    amount: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'poppins-s',
        fontSize: moderateScale(50),
        color: '#ffffff'
    },
    tabNames: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        color: '#ffffff',
    },
})
