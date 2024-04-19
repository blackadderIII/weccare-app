import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')

import { color } from "../utils/color"
import { horizontalScale, verticalScale, moderateScale } from "../utils/metrics"

export const obStyles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.background,
    },
    image: {
        width: width / 1,
        height: width / 1.1,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: color.main,
        width: horizontalScale(50),
        height: verticalScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(50),
        marginRight: horizontalScale(20)
    },
    title: {
        fontFamily: 'poppins-b',
        fontSize: moderateScale(26),
        color: color.darkgreen,
    },
    subtitle: {
        fontFamily: 'poppins',
        fontSize: moderateScale(14),
        color: color.jet
    }
})