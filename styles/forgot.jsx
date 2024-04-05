import { StyleSheet } from "react-native"

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export const forgot = StyleSheet.create({
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
})