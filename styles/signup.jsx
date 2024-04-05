import React from "react"
import { StyleSheet } from "react-native"

// utils
import { color } from "../utils/color"
import { horizontalScale, verticalScale, moderateScale } from "../utils/metrics"

export const signup = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.background,
    },
    logo: {
        width: moderateScale(100),
        height: moderateScale(100),
        alignSelf: 'center',
        marginBottom: verticalScale(10),
    },
    title: {
        fontSize: moderateScale(28),
        fontFamily: 'poppins-s',
        paddingHorizontal: horizontalScale(20),
        color: color.jet,
        marginBottom: verticalScale(20),
    },
    sectionHeader: {
        width: '100%',
        fontFamily: 'poppins-s',
        color: color.main,
        paddingHorizontal: horizontalScale(20),
        marginBottom: verticalScale(5),
    },
    section: {
        width: '100%',
        marginBottom: verticalScale(25),
        paddingHorizontal: horizontalScale(20),
    },
    textInput: {
        width: "100%",
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        padding: moderateScale(10),
        backgroundColor: "#0001",
        borderRadius: moderateScale(7),
    },
    dropDownPlaceholders: {
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        padding: moderateScale(12),
        backgroundColor: "#0001",
        borderRadius: moderateScale(7),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(20),
        marginBottom: verticalScale(25),
    },
    showPasswordContainer: {
        width: '100%',
        paddingHorizontal: horizontalScale(20),
        marginBottom: verticalScale(20),
        flexDirection: 'row',
        alignItems: 'center',
    },
    showPasswordText: {
        fontFamily: 'poppins-m',
        fontSize: moderateScale(14),
        color: '#0007',
        marginLeft: horizontalScale(5)
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: horizontalScale(20),
        alignItems: 'center',
    },
    button: {
        width: '100%',
        padding: moderateScale(15),
        backgroundColor: color.main,
        color: 'white',
        textAlign: 'center',
        borderRadius: moderateScale(12),
        fontFamily: 'poppins-m',
        fontSize: moderateScale(14),
    },
    forgotPassword: {
        fontFamily: 'poppins-s',
        color: color.main,
        fontSize: moderateScale(14),
        marginTop: verticalScale(25),
        paddingLeft: horizontalScale(10),
        textAlign: 'center'
    },
    register: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: verticalScale(10)
    },
    registerText: {
        fontFamily: 'poppins',
        color: '#555',
        fontSize: moderateScale(14),
    },
    registerLink: {
        fontFamily: 'poppins-s',
        color: color.main,
        fontSize: moderateScale(14),
    },
    spacer: {
        width: '100%',
        height: verticalScale(30),
        marginBottom: verticalScale(30)
    }

})