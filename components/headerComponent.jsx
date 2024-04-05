import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// utils
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics';
import { color } from '../utils/color';

export default function HeaderComponent({ onPress, title }) {
    return (
        <View style={styles.header}>
            <TouchableOpacity activeOpacity={.7} onPress={onPress} style={styles.iconContainer}>
                <Ionicons name="arrow-back-outline" size={24} color="black" style={styles.headerIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: verticalScale(90),
        paddingHorizontal: horizontalScale(20),
    },
    iconContainer: {
        width: moderateScale(30),
        height: moderateScale(30),
    },
    headerIcon: {
        fontSize: moderateScale(20),
        color: color.jet,
    },
    headerText: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(32),
        color: color.jet
    },
})