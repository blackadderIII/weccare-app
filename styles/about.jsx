import { StyleSheet } from "react-native"

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export const about = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.background,
    },
    container: {
        flex: .7,
        justifyContent: 'center',
        paddingHorizontal: horizontalScale(20),
    },
    logos: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    logoOne: {
        width: moderateScale(150),
        height: moderateScale(150),
        objectFit: 'contain',
    },
    logoTwo: {
        width: moderateScale(100),
        height: moderateScale(100),
        objectFit: 'contain',
    },
    textContainer: {
        paddingHorizontal: horizontalScale(30),
        marginBottom: verticalScale(10),
    },
    text: {
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        textAlign: 'center',
    }
})

export const darkAbout = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.darkBackground,
    },
    container: {
        flex: .7,
        justifyContent: 'center',
        paddingHorizontal: horizontalScale(20),
    },
    logos: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    logoOne: {
        width: moderateScale(150),
        height: moderateScale(150),
        objectFit: 'contain',
    },
    logoTwo: {
        width: moderateScale(100),
        height: moderateScale(100),
        objectFit: 'contain',
    },
    textContainer: {
        paddingHorizontal: horizontalScale(30),
        marginBottom: verticalScale(10),
    },
    text: {
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        textAlign: 'center',
        color: color.whiteText
    }
})