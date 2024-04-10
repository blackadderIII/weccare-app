import { StyleSheet } from "react-native"

// utils
import { color } from '../utils/color'
import { horizontalScale, moderateScale, verticalScale } from '../utils/metrics'

export const settings = StyleSheet.create({
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
    profile: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(20),
        backgroundColor: '#fff',
        padding: moderateScale(20),
        borderRadius: moderateScale(20),
    },
    imageLoader: {
        position: 'absolute',
        zIndex: 3,
    },
    profilePicture: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: moderateScale(30),
    },
    profileInfo: {
        height: 'auto',
        marginLeft: horizontalScale(15),
    },
    profileName: {
        width: horizontalScale(185),
        fontFamily: 'poppins-s',
        fontSize: moderateScale(24),
        marginBottom: verticalScale(-5),
        color: color.jet
    },
    profileEmail: {
        fontFamily: 'poppins-s',
        color: color.main,
        fontSize: moderateScale(14),
    },
    profileDepartment: {
        fontFamily: 'poppins-s',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    section: {
        width: '100%',
        marginBottom: verticalScale(20),
        backgroundColor: '#fff',
        paddingHorizontal: moderateScale(20),
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(10),
        borderRadius: moderateScale(20),
    },
    sectionHeader: {
        width: '100%',
        fontSize: moderateScale(15),
        fontFamily: 'poppins-b',
        color: color.main,

    },
    settingTile: {
        width: '100%',
        paddingVertical: verticalScale(10),
    },
    settingText: {
        fontFamily: 'poppins-m',
        fontSize: moderateScale(16),
        marginBottom: verticalScale(-3),
    },
    settingTextSub: {
        fontFamily: 'poppins-m',
        color: '#0007',
        fontSize: moderateScale(14),
    },
    spacer: {
        width: '100%',
        height: verticalScale(20),
    }
})

export const darkSettings = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: verticalScale(40),
        backgroundColor: color.darkBackground,
    },
    container: {
        flex: 1,
        paddingTop: verticalScale(20),
        paddingHorizontal: horizontalScale(20),
    },
    profile: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(20),
        backgroundColor: color.darkComponent,
        padding: moderateScale(20),
        borderRadius: moderateScale(20),
    },
    profilePicture: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: moderateScale(30),
    },
    profileInfo: {
        height: 'auto',
        marginLeft: horizontalScale(15),
    },
    profileName: {
        width: horizontalScale(185),
        fontFamily: 'poppins-s',
        fontSize: moderateScale(24),
        marginBottom: verticalScale(-5),
        color: color.whiteText
    },
    profileEmail: {
        fontFamily: 'poppins-s',
        color: color.main,
        fontSize: moderateScale(14),
    },
    profileDepartment: {
        fontFamily: 'poppins-s',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: color.whiteText
    },
    section: {
        width: '100%',
        marginBottom: verticalScale(20),
        backgroundColor: color.darkComponent,
        paddingHorizontal: moderateScale(20),
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(10),
        borderRadius: moderateScale(20),
    },
    sectionHeader: {
        width: '100%',
        fontSize: moderateScale(15),
        fontFamily: 'poppins-b',
        color: color.main,

    },
    settingTile: {
        width: '100%',
        paddingVertical: verticalScale(10),
    },
    settingText: {
        fontFamily: 'poppins-m',
        fontSize: moderateScale(14),
        marginBottom: verticalScale(-3),
        color: color.whiteText
    },
    settingTextSub: {
        fontFamily: 'poppins-m',
        color: '#fff7',
        fontSize: moderateScale(12),
    },
    spacer: {
        width: '100%',
        height: verticalScale(20),
    }
})