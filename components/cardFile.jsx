import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Image, Animated, TouchableWithoutFeedback } from 'react-native'

// utils
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics';

export default function CardFile({ onPress, careCardNo, date }) {

    const [pressed, setPressed] = useState(false);
    const scaleValue = useRef(new Animated.Value(1)).current;

    const onPressIn = () => {
        setPressed(true);
        Animated.spring(scaleValue, {
            toValue: 0.97,
            useNativeDriver: true,
            speed: 200,
        }).start();
    };

    const onPressOut = () => {
        setPressed(false);
        Animated.spring(scaleValue, {
            toValue: 1,
            speed: 200,
            useNativeDriver: true,
        }).start();
    };

    return (
        <TouchableWithoutFeedback onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
            <Animated.View style={[styles.fileContainer, { transform: [{ scale: scaleValue }] }]}>
                <Image source={require('../assets/icons/file.png')} style={styles.image} />
                <Text numberOfLines={1} style={styles.ccNo}>{careCardNo}</Text>
                <Text style={styles.date}>{date}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    fileContainer: {
        width: '33.3%',
        height: 'auto',
        objectFit: 'contain',
        alignItems: 'center',
        marginBottom: verticalScale(20),
    },
    ccNo: {
        fontFamily: 'poppins-s',
        color: '#333',
        fontSize: moderateScale(14),
    },
    date: {
        fontFamily: 'poppins',
        fontSize: moderateScale(12),
        color: '#555',
    },
})