import { StyleSheet } from "react-native"

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export const write = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.background,
    },
    container: {
        flex: 1,
        paddingHorizontal: horizontalScale(20),
    },
    section: {
        width: '100%',
        marginBottom: verticalScale(20),
    },
    titleText: {
        width: "100%",
        color: color.main,
        fontSize: moderateScale(16),
        fontFamily: 'poppins-s',
        marginBottom: 7,
    },
    textInputContainer: {
        width: "100%",
        marginBottom: verticalScale(10),
    },
    textInputTitle: {
        fontFamily: 'poppins-m',
    },
    miniDescription: {
        fontFamily: 'poppins',
        fontSize: moderateScale(12),
    },
    textInput: {
        fontFamily: 'poppins',
        width: "100%",
        padding: moderateScale(10),
        backgroundColor: "#0001",
        borderRadius: moderateScale(7),
    },
    textInputMultiline: {
        width: "100%",
        fontFamily: 'poppins',
        padding: moderateScale(10),
        backgroundColor: '#0001',
        minHeight: verticalScale(100),
        maxHeight: verticalScale(200),
        borderRadius: moderateScale(7),
    },
    locationHolder: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    radioBtn: {
        width: "100%",
        marginBottom: verticalScale(10),
        alignItems: 'center',
        flexDirection: 'row',
    },
    radioText: {
        marginLeft: horizontalScale(10),
        fontFamily: 'poppins-m'
    },
    descriptiveText: {
        width: '100%',
        marginBottom: verticalScale(7),
        fontFamily: 'poppins'
    },
    submitButton: {
        width: "100%",
        padding: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.main,
        borderRadius: moderateScale(15),
        marginBottom: verticalScale(30),
    },
    submitButtonText: {
        color: "#fff",
        fontFamily: 'poppins-s'
    },
    cardInfo: {
        borderTopColor: '#ccc',
        borderTopWidth: verticalScale(1),
        width: "100%",
        marginTop: verticalScale(10),
        paddingTop: verticalScale(20),
        marginBottom: verticalScale(20),
    },
    infoCont: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    infoContTitle: {
        fontFamily: 'poppins-b',
        color: color.main,
        fontSize: moderateScale(14)
    },
    infoContText: {
        fontSize: moderateScale(14),
        color: '#777',
        fontFamily: 'poppins'
    },
})

export const darkWrite = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.darkBackground,
    },
    container: {
        flex: 1,
        paddingHorizontal: horizontalScale(20),
    },
    section: {
        width: '100%',
        marginBottom: verticalScale(20),
    },
    titleText: {
        width: "100%",
        color: color.main,
        fontSize: moderateScale(16),
        fontFamily: 'poppins-s',
        marginBottom: 7,
    },
    textInputContainer: {
        width: "100%",
        marginBottom: verticalScale(10),
    },
    textInputTitle: {
        fontFamily: 'poppins-m',
        color: color.whiteText
    },
    miniDescription: {
        fontFamily: 'poppins',
        fontSize: moderateScale(12),
        color: color.whiteText,
    },
    textInput: {
        fontFamily: 'poppins',
        width: "100%",
        padding: moderateScale(10),
        borderRadius: moderateScale(7),
        backgroundColor: "#0004",
        color: color.whiteText
    },
    textInputMultiline: {
        width: "100%",
        fontFamily: 'poppins',
        padding: moderateScale(10),
        backgroundColor: '#0004',
        minHeight: verticalScale(100),
        maxHeight: verticalScale(200),
        borderRadius: moderateScale(7),
        color: color.whiteText,
    },
    locationHolder: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    radioBtn: {
        width: "100%",
        marginBottom: verticalScale(10),
        alignItems: 'center',
        flexDirection: 'row',
    },
    radioText: {
        marginLeft: horizontalScale(10),
        fontFamily: 'poppins-m',
        color: color.whiteText
    },
    descriptiveText: {
        width: '100%',
        marginBottom: verticalScale(7),
        fontFamily: 'poppins',
        color: color.whiteText
    },
    submitButton: {
        width: "100%",
        padding: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.main,
        borderRadius: moderateScale(15),
        marginBottom: verticalScale(30),
    },
    submitButtonText: {
        color: "#fff",
        fontFamily: 'poppins-s'
    },
    cardInfo: {
        borderTopColor: '#fff3',
        borderTopWidth: verticalScale(1),
        width: "100%",
        marginTop: verticalScale(10),
        paddingTop: verticalScale(20),
        marginBottom: verticalScale(20),
    },
    infoCont: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    infoContTitle: {
        fontFamily: 'poppins-b',
        color: color.main,
        fontSize: moderateScale(14)
    },
    infoContText: {
        fontSize: moderateScale(14),
        color: '#999',
        fontFamily: 'poppins'
    },
})