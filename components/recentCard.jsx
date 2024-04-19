import React from 'react'
import { View, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native'

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export default function RecentCard({ theme, onPress, cc, date, status }) {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={onPress}>
            <View style={theme === 'light' ? styles.recentCard : darkStyles.recentCard}>
                <View style={theme === 'light' ? styles.indicator : darkStyles.indicator}></View>
                <View style={theme === 'light' ? styles.infoContainer : darkStyles.infoContainer}>
                    <Text style={theme === 'light' ? styles.cardNumber : darkStyles.cardNumber}>{cc}</Text>
                    <View style={theme === 'light' ? styles.bottomInfo : darkStyles.bottomInfo}>
                        <Text style={theme === 'light' ? styles.bottomText : darkStyles.bottomText}>{date}</Text>
                        <Text style={theme === 'light' ? styles.bottomText : darkStyles.bottomText}>{status}</Text>
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
        fontFamily: 'poppins-s',
        fontSize: moderateScale(18),
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

const darkStyles = StyleSheet.create({
    recentCard: {
        height: verticalScale(90),
        backgroundColor: color.darkComponent,
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
        fontFamily: 'poppins-s',
        fontSize: moderateScale(18),
        color: color.whiteText
    },
    bottomInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomText: {
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        opacity: .5,
        color: '#fff',
    },
})