import { StyleSheet } from "react-native"

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export const themeStyle = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.background,
    },
    description: {
        paddingHorizontal: horizontalScale(20),
        color: color.jet,
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        marginBottom: verticalScale(30),
    },
    pickerContainer: {
        paddingHorizontal: horizontalScale(20),
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    theme: {
        width: '48%',
        paddingVertical: verticalScale(10),
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(2),
        borderColor: '#0000',
        backgroundColor: color.white,
        elevation: 10,
        shadowColor: '#0005'
    },
    themeActive: {
        width: '48%',
        paddingVertical: verticalScale(10),
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(2),
        borderColor: color.main,
        backgroundColor: color.white,
        elevation: 10,
        shadowColor: '#0005'
    },
    themeImg: {
        width: '100%',
        height: verticalScale(280),
        objectFit: 'contain',
        marginBottom: verticalScale(20),
    },
    themeText: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(14),
        color: color.jet,
        textAlign: 'center',
    },
})

export const darkThemeStyle = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.darkBackground,
    },
    description: {
        paddingHorizontal: horizontalScale(20),
        color: color.whiteText,
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        marginBottom: verticalScale(30),
    },
    pickerContainer: {
        paddingHorizontal: horizontalScale(20),
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    theme: {
        width: '48%',
        paddingVertical: verticalScale(10),
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(2),
        borderColor: '#0000',
        backgroundColor: color.darkComponent,
        elevation: 10,
        shadowColor: '#000'
    },
    themeActive: {
        width: '48%',
        paddingVertical: verticalScale(10),
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(2),
        borderColor: color.main,
        backgroundColor: color.darkComponent,
        elevation: 10,
        shadowColor: '#000'
    },
    themeImg: {
        width: '100%',
        height: verticalScale(280),
        objectFit: 'contain',
        marginBottom: verticalScale(20),
    },
    themeText: {
        fontFamily: 'poppins-b',
        fontSize: moderateScale(14),
        color: color.whiteText,
        textAlign: 'center',
    },
})