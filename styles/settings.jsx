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
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: moderateScale(30),
    },
    profileInfo: {
        marginLeft: horizontalScale(15),
    },
    profileName: {
        fontFamily: 'poppins-s',
        fontSize: moderateScale(24),
        marginBottom: verticalScale(-5)
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