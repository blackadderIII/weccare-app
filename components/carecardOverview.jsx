import React from 'react'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export default function CarecardOverview({ onClick, imgSource, color, iconName, amount, tabName }) {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={onClick}>
            <ImageBackground source={imgSource} style={styles.tabContainer} imageStyle={{ borderRadius: moderateScale(20) }}>
                <View style={styles.iconContainer}>
                    <Feather name={iconName} color={color} style={styles.icon} />
                </View>
                <Text style={styles.amount}>{amount}</Text>
                <Text style={styles.tabNames}>{tabName}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        width: horizontalScale(170),
        height: verticalScale(190),
        backgroundColor: color.jet,
        borderRadius: moderateScale(20),
        padding: moderateScale(20),
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(10),
    },
    icon: {
        fontSize: moderateScale(32)
    },
    amount: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'poppins-s',
        fontSize: moderateScale(54),
        color: '#fff',
    },
    tabNames: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        color: '#fff',
    },
})
