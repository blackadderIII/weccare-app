import React, { useContext } from 'react'
import { Image, View, ScrollView, Text, TouchableOpacity } from 'react-native'

// styling
import { settings, darkSettings } from '../styles/settings'

// components
import HeaderComponent from '../components/headerComponent'

// utils
import { ThemeContext } from '../utils/theme'

export default function Settings() {

    const { theme } = useContext(ThemeContext)

    const profilePic = require('../assets/dp004.jpg')
    const department = 'IT'
    const name = 'Paul Arthur'
    const email = 'paul.arthur@wayoeltd.com'

    return (
        <View style={theme === 'light' ? settings.main : darkSettings.main}>
            <HeaderComponent
                title={'Settings'}
            />

            <ScrollView style={theme === 'light' ? settings.container : darkSettings.container} contentContainerStyle={{ alignItems: 'center' }}>

                <View style={theme === 'light' ? settings.profile : darkSettings.profile}>

                    <Image source={profilePic} style={theme === 'light' ? settings.profilePicture : darkSettings.profilePicture} />

                    <View style={theme === 'light' ? settings.profileInfo : darkSettings.profileInfo}>
                        <Text style={theme === 'light' ? settings.profileDepartment : darkSettings.profileDepartment}>{department}</Text>
                        <Text style={theme === 'light' ? settings.profileName : darkSettings.profileName}>{name}</Text>
                        <Text style={theme === 'light' ? settings.profileEmail : darkSettings.profileEmail}>{email}</Text>
                    </View>

                </View>

                <View style={theme === 'light' ? settings.section : darkSettings.section}>

                    <Text style={theme === 'light' ? settings.sectionHeader : darkSettings.sectionHeader}>General</Text>

                    <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                        <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Edit Profile</Text>
                        <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>Make changes to your account on this platform</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                        <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Change Password</Text>
                        <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>Change your current password used to access this app</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                        <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Theme</Text>
                        <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>Select a theme that suits your style</Text>
                    </TouchableOpacity>

                </View>

                <View style={theme === 'light' ? settings.section : darkSettings.section}>

                    <Text style={theme === 'light' ? settings.sectionHeader : darkSettings.sectionHeader}>App Info</Text>

                    <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                        <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>About</Text>
                        <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>All you need to know about this application</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                        <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Version</Text>
                        <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>1.0.0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                        <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Terms & Conditions</Text>
                        <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>Everything related to the use of this app</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                        <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Privacy Policy</Text>
                        <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>Policies reagrding our privacy</Text>
                    </TouchableOpacity>

                </View>

                <View style={theme === 'light' ? settings.section : darkSettings.section}>

                    <Text style={theme === 'light' ? settings.sectionHeader : darkSettings.sectionHeader}>Others</Text>

                    <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                        <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Logout</Text>
                        <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>You're currently logged in as {name}</Text>
                    </TouchableOpacity>

                </View>

                <View style={theme === 'light' ? settings.spacer : darkSettings.spacer}></View>

            </ScrollView>
        </View>
    )
}