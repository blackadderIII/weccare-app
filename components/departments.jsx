import { View, Text, Modal, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'
import { color } from '../utils/color'

export default function Departments({ theme, isVisible, toggleVisibility, onSelectedOption }) {

    const departmentData = [
        'Business Development',
        'Client Rep',
        'Commercial & Contracts',
        'Design and Engineering',
        'Finance & Accounts',
        'HR & Admin',
        'HSE',
        'HSSEQ',
        'IT',
        'Logistics and Stores',
        'Maintenance',
        'Operations',
        'Planning',
        'Procurement',
        'Projects',
        'QAQC',
        'Security',
        'Workshop'
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
                        {departmentData.map((department, index) => {
                            return (
                                <TouchableOpacity key={index} activeOpacity={.7} onPress={() => selectOption(department)}>
                                    <Text style={theme === 'light' ? style.department : darkStyle.department}>{department}</Text>
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
        height: verticalScale(500),
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
        height: verticalScale(500),
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