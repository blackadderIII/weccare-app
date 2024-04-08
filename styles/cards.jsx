import { StyleSheet } from "react-native"

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export const cards = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.background,
    },
    flatListContainer: {
        paddingHorizontal: horizontalScale(20),
        paddingTop: horizontalScale(20),
    },
})

export const darkCards = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.darkBackground,
    },
    flatListContainer: {
        paddingHorizontal: horizontalScale(20),
        paddingTop: horizontalScale(20),
    },
})