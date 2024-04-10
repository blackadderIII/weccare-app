import React from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'

import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics';
import { color } from '../utils/color';

export default function Confirm({ theme, isVisible, question, onCancel, onConfirm }) {
    return (
        <Modal transparent={true} visible={isVisible} animationType='fade'>
            <TouchableOpacity activeOpacity={1} onPress={onCancel} style={theme === 'light' ? styles.background : darkStyles.background}>
                <View style={theme === 'light' ? styles.container : darkStyles.container}>
                    <Text style={theme === 'light' ? styles.text : darkStyles.text}>
                        {question}
                    </Text>
                    <View style={styles.confirmation}>
                        <TouchableOpacity activeOpacity={.8} onPress={onCancel}>
                            <Text style={theme === 'light' ? styles.confirmationText : darkStyles.confirmationText}>No</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={.8} onPress={onConfirm}>
                            <Text style={[theme === 'light' ? styles.confirmationText : darkStyles.confirmationText, { color: color.main }]}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#0003',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: horizontalScale(250),
        marginHorizontal: horizontalScale(20),
        height: verticalScale(150),
        backgroundColor: '#fff',
        borderRadius: moderateScale(10),
        padding: moderateScale(20),
    },
    text: {
        color: color.jet,
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        textAlign: 'center',
        marginTop: verticalScale(20),
    },
    confirmation: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: verticalScale(20),
        alignSelf: 'center',
    },
    confirmationText: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(16),
        color: color.jet
    }
})

const darkStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#0005',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: horizontalScale(250),
        marginHorizontal: horizontalScale(20),
        height: verticalScale(150),
        backgroundColor: color.darkComponent,
        borderRadius: moderateScale(10),
        padding: moderateScale(20),
    },
    text: {
        color: color.white,
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        textAlign: 'center',
        marginTop: verticalScale(20),
    },
    confirmationText: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(16),
        color: color.whiteText
    }
})