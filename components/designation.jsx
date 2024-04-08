import React from 'react'
import { View, Text, Modal, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'
import { color } from '../utils/color'

export default function Designation({ theme, isVisible, toggleVisibility, onSelectedOption }) {

    const designationData = [
        'ExCo Member',
        'Manager',
        'Head of Department',
        'Supervisor',
        'Other'
    ]

    const selectOption = (option) => {
        onSelectedOption(option)
        toggleVisibility()
    }

    return (
        <Modal visible={isVisible} transparent={true}>
            <TouchableOpacity activeOpacity={1} style={theme === 'light' ? style.container : darkStyle.container} onPress={() => toggleVisibility()}>
                <View style={theme === 'light' ? style.modal : darkStyle.modal}>
                    <ScrollView>
                        {designationData.map((designation, index) => {
                            return (
                                <TouchableOpacity key={index} activeOpacity={.7} onPress={() => selectOption(designation)}>
                                    <Text style={theme === 'light' ? style.department : darkStyle.department}>{designation}</Text>
                                </TouchableOpacity>
                            )
                        })}
                        <View style={{ height: verticalScale(12) }}></View>
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0005',
        alignContent: 'center',
        justifyContent: 'center',
    },
    modal: {
        marginHorizontal: horizontalScale(20),
        padding: horizontalScale(20),
        height: verticalScale(300),
        borderRadius: moderateScale(20),
        backgroundColor: color.white,
    },
    department: {
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        color: color.jet,
        padding: moderateScale(12)
    }
})

const darkStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0005',
        alignContent: 'center',
        justifyContent: 'center',
    },
    modal: {
        marginHorizontal: horizontalScale(20),
        padding: horizontalScale(20),
        height: verticalScale(300),
        borderRadius: moderateScale(20),
        backgroundColor: color.darkComponent,
    },
    department: {
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        color: color.whiteText,
        padding: moderateScale(12)
    }
})