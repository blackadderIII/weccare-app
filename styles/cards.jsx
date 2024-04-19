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
    loadingContainer: {
        flex: .85,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyContainer: {
        flex: .85,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyImg: {
        width: moderateScale(100),
        height: moderateScale(100),
        objectFit: 'contain'
    },
    emptyText: {
        fontFamily: 'poppins',
        color: color.jet,
        fontSize: moderateScale(14),
        opacity: .5
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
    loadingContainer: {
        flex: .85,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyContainer: {
        flex: .85,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyImg: {
        width: moderateScale(100),
        height: moderateScale(100),
        objectFit: 'contain'
    },
    emptyText: {
        fontFamily: 'poppins',
        color: color.whiteText,
        fontSize: moderateScale(14),
        opacity: .5
    },
    flatListContainer: {
        paddingHorizontal: horizontalScale(20),
        paddingTop: horizontalScale(20),
    },
})