import React from 'react'
import { View, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native'

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export default function RecentCard({ onPress, cc, date, status }) {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={onPress}>
            <View style={styles.recentCard}>
                <View style={styles.indicator}></View>
                <View style={styles.infoContainer}>
                    <Text style={styles.cardNumber}>{cc}</Text>
                    <View style={styles.bottomInfo}>
                        <Text style={styles.bottomText}>{date}</Text>
                        <Text style={styles.bottomText}>{status}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    recentCard: {
        height: verticalScale(90),
        backgroundColor: '#fff',
        marginHorizontal: horizontalScale(20),
        borderRadius: moderateScale(15),
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(15),
        elevation: 10,
        shadowColor: '#0003',
        marginBottom: verticalScale(20)
    },
    indicator: {
        height: '100%',
        width: horizontalScale(5),
        backgroundColor: color.main,
        borderRadius: moderateScale(3),
        position: 'absolute',
        left: horizontalScale(15),
    },
    infoContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        paddingLeft: horizontalScale(20),
    },
    cardNumber: {
        fontFamily: 'poppins-b',
        fontSize: moderateScale(20),
        color: color.jet
    },
    bottomInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomText: {
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        opacity: .5,
    },
})