import { StyleSheet } from "react-native"

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export const verify = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.background,
    },
    illustration: {
        width: moderateScale(100),
        height: moderateScale(100),
        objectFit: 'contain',
        alignSelf: 'center',
        marginTop: verticalScale(50),
        marginBottom: verticalScale(30),
    },
    description: {
        paddingHorizontal: horizontalScale(20),
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        textAlign: 'center',
        marginBottom: verticalScale(30),
    },
    section: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: verticalScale(30),
        paddingHorizontal: horizontalScale(20),
    },
    textInput: {
        width: horizontalScale(60),
        height: horizontalScale(65),
        borderWidth: moderateScale(1),
        borderColor: color.main,
        fontFamily: 'poppins-s',
        fontSize: moderateScale(32),
        padding: moderateScale(10),
        backgroundColor: "#0001",
        borderRadius: moderateScale(7),
        textAlign: 'center',
        color: color.jet
    },
    textInputBlur: {
        width: horizontalScale(60),
        height: horizontalScale(65),
        fontFamily: 'poppins-s',
        fontSize: moderateScale(32),
        padding: moderateScale(10),
        backgroundColor: "#0001",
        borderRadius: moderateScale(7),
        textAlign: 'center',
        color: color.jet
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: horizontalScale(20),
        alignItems: 'center',
        marginBottom: verticalScale(20)
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
    descriptionSmall: {
        paddingHorizontal: horizontalScale(20),
        fontFamily: 'poppins-m',
        color: '#0005',
        fontSize: moderateScale(12),
        textAlign: 'center',
        marginBottom: verticalScale(10)
    },
})

export const darkVerify = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.darkBackground,
    },
    illustration: {
        width: moderateScale(100),
        height: moderateScale(100),
        objectFit: 'contain',
        alignSelf: 'center',
        marginTop: verticalScale(50),
        marginBottom: verticalScale(30),
    },
    description: {
        paddingHorizontal: horizontalScale(20),
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        textAlign: 'center',
        marginBottom: verticalScale(30),
        color: color.whiteText
    },
    section: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: verticalScale(30),
        paddingHorizontal: horizontalScale(20),
    },
    textInput: {
        width: horizontalScale(60),
        height: horizontalScale(65),
        borderWidth: moderateScale(1),
        borderColor: color.main,
        fontFamily: 'poppins-s',
        fontSize: moderateScale(32),
        padding: moderateScale(10),
        backgroundColor: "#0004",
        borderRadius: moderateScale(7),
        textAlign: 'center',
        color: color.whiteText,
    },
    textInputBlur: {
        width: horizontalScale(60),
        height: horizontalScale(65),
        fontFamily: 'poppins-s',
        fontSize: moderateScale(32),
        padding: moderateScale(10),
        backgroundColor: "#0004",
        borderRadius: moderateScale(7),
        textAlign: 'center',
        color: color.whiteText
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: horizontalScale(20),
        alignItems: 'center',
        marginBottom: verticalScale(20)
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
    descriptionSmall: {
        paddingHorizontal: horizontalScale(20),
        fontFamily: 'poppins-m',
        color: color.whiteText,
        fontSize: moderateScale(12),
        textAlign: 'center',
        marginBottom: verticalScale(10)
    },
})