import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";

// image
const banner = require('../assets/banner/banner_01.jpg')

// utils
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export default function Banner() {

    const [greeting, setGreeting] = useState('');

    const morningStartTime = new Date();
    morningStartTime.setHours(0, 0, 0);
    const morningEndTime = new Date();
    morningEndTime.setHours(12, 0, 0);

    const afternoonStartTime = new Date();
    afternoonStartTime.setHours(12, 0, 0);
    const afternoonEndTime = new Date();
    afternoonEndTime.setHours(17, 0, 0);

    const eveningStartTime = new Date();
    eveningStartTime.setHours(17, 0, 0);
    const eveningEndTime = new Date();
    eveningEndTime.setHours(0, 0, 0);

    const currentTime = new Date();

    useEffect(() => {
        if (currentTime >= morningStartTime && currentTime < morningEndTime) {
            setGreeting('Good Morning 👋');
        } else if (currentTime >= afternoonStartTime && currentTime < afternoonEndTime) {
            setGreeting('Good Afternoon 👋');
        } else if (currentTime >= eveningStartTime && currentTime > eveningEndTime) {
            setGreeting('Good Evening 👋');
        }
    }, [])

    return (
        <ImageBackground source={banner} style={styles.container} imageStyle={{ borderRadius: 20, }}>
            <Text style={styles.mainText}>{greeting}</Text>
            <Text style={styles.subText}>Think Environment, Think Health, Think Safety, Think Security</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        height: verticalScale(140),
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        padding: moderateScale(20),
        marginHorizontal: horizontalScale(20),
        marginBottom: verticalScale(20),
    },
    mainText: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(26),
        color: '#fff',
    },
    subText: {
        fontFamily: 'poppins-m',
        color: '#fff',
        fontSize: moderateScale(13),
    },
})