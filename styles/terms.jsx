import { StyleSheet } from "react-native"

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export const terms = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.background,
    },
    container: {
        flex: 1,
        paddingTop: verticalScale(20),
        paddingHorizontal: horizontalScale(20),
    },
    section: {
        width: '100%',
        marginBottom: verticalScale(10),
    },
    subHeading: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(18),
        color: color.main,
    },
    textSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: verticalScale(10),
    },
    bulletStyle: {
        width: '7%',
        marginTop: verticalScale(-5),
        color: '#555'
    },
    textStyle: {
        width: '93%',
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
    },
    text: {
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        marginBottom: verticalScale(7),
    },
    textlink: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(14),
        color: color.main,
    },
    spacer: {
        width: '100%',
        height: verticalScale(30),
    }
})