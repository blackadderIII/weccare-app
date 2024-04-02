import { StyleSheet } from "react-native"

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export const write = StyleSheet.create({
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
    headerIcon: {
        fontSize: moderateScale(18),
        color: color.jet
    },
    headerText: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(32),
        color: color.jet
    },
    container: {
        flex: 1,
        // paddingTop: verticalScale(20),
        paddingHorizontal: horizontalScale(20),
        // backgroundColor: 'pink',
    },
    section: {
        width: '100%',
        marginBottom: verticalScale(20),
    },
    titleText: {
        width: "100%",
        color: color.main,
        fontSize: moderateScale(16),
        fontFamily: 'poppins-s',
        marginBottom: 7,
    },
    textInputContainer: {
        width: "100%",
        marginBottom: verticalScale(10),
    },
    textInputTitle: {
        fontFamily: 'poppins-m',
    },
    miniDescription: {
        fontFamily: 'poppins',
        fontSize: moderateScale(12),
    },
    textInput: {
        fontFamily: 'poppins',
        width: "100%",
        padding: moderateScale(10),
        backgroundColor: "#0001",
        borderRadius: moderateScale(7),
    },
    textInputMultiline: {
        width: "100%",
        padding: moderateScale(10),
        backgroundColor: '#0001',
        minHeight: verticalScale(100),
        maxHeight: verticalScale(200),
        borderRadius: moderateScale(7),
    },
    locationHolder: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    radioBtn: {
        width: "100%",
        marginBottom: verticalScale(10),
        alignItems: 'center',
        flexDirection: 'row',
    },
    radioText: {
        marginLeft: horizontalScale(10),
        fontFamily: 'poppins-m'
    },
    descriptiveText: {
        width: '100%',
        marginBottom: verticalScale(7),
        fontFamily: 'poppins'
    },
    submitButton: {
        width: "100%",
        padding: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.main,
        borderRadius: moderateScale(15),
        marginBottom: verticalScale(30),
    },
    submitButtonText: {
        color: "#fff",
        fontFamily: 'poppins-s'
    },
})