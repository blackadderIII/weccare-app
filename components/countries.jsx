import React, { useState, useEffect } from 'react'
import { View, Text, Modal, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export default function Countries({ theme, isVisible, toggleVisibility, onSelectedOption }) {

    const [isLoading, setIsLoading] = useState(true)
    const [empty, setEmpty] = useState(false)
    const [countryData, setCountryData] = useState([])

    const getCountries = async () => {
        try {
            const fetchCountries = await fetch('https://restcountries.com/v3.1/all')
            const countries = await fetchCountries.json()

            setIsLoading(false)
            setCountryData(countries)

        } catch (error) {
            setIsLoading(false)
            setEmpty(true)
            console.log('error fetching countries', error)
            return
        }
    }

    useEffect(() => {
        getCountries()
    }, [isVisible])

    const selectOption = (option) => {
        onSelectedOption(option)
        toggleVisibility()
    }

    const renderItem = ({ item }) => {

        return (
            <TouchableOpacity activeOpacity={.7} onPress={() => selectOption(item.name.common)}>
                <Text style={theme === 'light' ? style.department : darkStyle.department}>{item.name.common}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Modal visible={isVisible} transparent={true}>
            <TouchableOpacity activeOpacity={1} style={theme === 'light' ? style.container : darkStyle.container} onPress={() => toggleVisibility()}>
                <View style={theme === 'light' ? style.modal : darkStyle.modal}>
                    {isLoading ?
                        <View style={style.loadingContainer}>
                            <ActivityIndicator color={color.main} size={'large'} />
                        </View> :
                        (empty ?
                            <View style={style.loadingContainer}>
                                <Text style={theme === 'light' ? style.empty : darkStyle.empty}>Error loading countries. Try again later.</Text>
                            </View> :
                            <FlatList
                                data={countryData.sort((a, b) => a.name.common.localeCompare(b.name.common))}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        )
                    }
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
        paddingHorizontal: horizontalScale(12),
        paddingVertical: verticalScale(15)
    },
    loadingContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    empty: {
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        color: color.jet,
        opacity: .5
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
        paddingHorizontal: horizontalScale(12),
        paddingVertical: verticalScale(15),
    },
    empty: {
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        color: color.whiteText,
        opacity: .5
    }
})