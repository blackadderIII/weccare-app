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
        // backgroundColor: 'pink',
    },
    headerText: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(32),
    },
    headerImgContainer: {
        width: moderateScale(50),
        height: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: color.main,
        // borderWidth: moderateScale(2),
    },
    headerImg: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: moderateScale(15),
        // borderColor: color.main,
        // borderWidth: moderateScale(2),
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
        height: verticalScale(190),
    },
})