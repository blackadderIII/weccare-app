import { StyleSheet } from "react-native"

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'


export const home = StyleSheet.create({

    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.background,
    },
    header: {
        width: '100%',
        height: verticalScale(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: horizontalScale(20),
        marginBottom: verticalScale(20),
    },
    headerText: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(28),
        color: color.jet
    },
    headerImgContainer: {
        width: moderateScale(50),
        height: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImg: {
        width: moderateScale(42),
        height: moderateScale(42),
        borderRadius: moderateScale(15),
    },
    titleText: {
        paddingLeft: horizontalScale(20),
        fontFamily: 'poppins-m',
        fontSize: moderateScale(14),
        opacity: .5,
        marginBottom: verticalScale(10),
    },
    summaryContainer: {
        width: '100%',
        height: verticalScale(210),
        marginBottom: verticalScale(20),
    },
    recentCardContainer: {
        width: '100%',
        marginBottom: verticalScale(80),
    },
    writeButton: {
        width: moderateScale(65),
        height: moderateScale(65),
        alignSelf: 'center',
        backgroundColor: color.main,
        borderRadius: moderateScale(50),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: verticalScale(20),
        right: horizontalScale(20),
        zIndex: 2,
    },
    writeIcon: {
        fontSize: moderateScale(24),
        color: '#ffffff',
    },
    writeButtonText: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(14),
        color: '#fff'
    },
})

export const darkHome = StyleSheet.create({

    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.darkBackground,
    },
    header: {
        width: '100%',
        height: verticalScale(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: horizontalScale(20),
        marginBottom: verticalScale(20),
    },
    headerText: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(28),
        color: color.whiteText
    },
    headerImgContainer: {
        width: moderateScale(50),
        height: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImg: {
        width: moderateScale(42),
        height: moderateScale(42),
        borderRadius: moderateScale(15),
    },
    titleText: {
        paddingLeft: horizontalScale(20),
        fontFamily: 'poppins-m',
        fontSize: moderateScale(14),
        opacity: .5,
        marginBottom: verticalScale(10),
        color: color.whiteText
    },
    summaryContainer: {
        width: '100%',
        height: verticalScale(210),
        marginBottom: verticalScale(20),
    },
    recentCardContainer: {
        width: '100%',
        marginBottom: verticalScale(80),
    },
    writeButton: {
        width: moderateScale(65),
        height: moderateScale(65),
        alignSelf: 'center',
        backgroundColor: color.main,
        borderRadius: moderateScale(50),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: verticalScale(20),
        right: horizontalScale(20),
        zIndex: 2,
    },
    writeIcon: {
        fontSize: moderateScale(24),
        color: color.whiteText,
    },
    writeButtonText: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(14),
        color: color.whiteText
    },
})