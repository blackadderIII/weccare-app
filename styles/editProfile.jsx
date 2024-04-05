import { StyleSheet } from "react-native"

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export const edit = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.background,
    },
    profile: {
        position: 'relative',
        marginBottom: verticalScale(50),
    },
    profilePicture: {
        width: moderateScale(120),
        height: moderateScale(120),
        borderRadius: moderateScale(100),
        alignSelf: 'center',
    },
    profileIcon: {
        width: moderateScale(30),
        height: moderateScale(30),
        textAlign: 'center',
        verticalAlign: 'middle',
        borderRadius: moderateScale(50),
        fontSize: moderateScale(20),
        backgroundColor: color.main,
        position: 'absolute',
        bottom: verticalScale(-10),
        alignSelf: 'center',
    },
    sectionHeader: {
        width: '100%',
        fontFamily: 'poppins-s',
        color: color.main,
        paddingHorizontal: horizontalScale(20),
        marginBottom: verticalScale(5),
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
    showPasswordContainer: {
        width: '100%',
        paddingHorizontal: horizontalScale(20),
        marginBottom: verticalScale(20),
        flexDirection: 'row',
        alignItems: 'center',
    },
    showPasswordText: {
        fontFamily: 'poppins-m',
        fontSize: moderateScale(14),
        color: '#0007',
        marginLeft: horizontalScale(5)
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