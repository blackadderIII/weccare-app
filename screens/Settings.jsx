import React from 'react'
import { Image, View, ScrollView, Text, TouchableOpacity } from 'react-native'

// styling
import { settings } from '../styles/settings'

// components
import HeaderComponent from '../components/headerComponent'

export default function Settings() {

    const profilePic = require('../assets/dp004.jpg')
    const department = 'IT'
    const name = 'Paul Arthur'
    const email = 'paul.arthur@wayoeltd.com'

    return (
        <View style={settings.main}>
            <HeaderComponent
                title={'Settings'}
            />

            <ScrollView style={settings.container} contentContainerStyle={{ alignItems: 'center' }}>

                <View style={settings.profile}>

                    <Image source={profilePic} style={settings.profilePicture} />

                    <View style={settings.profileInfo}>
                        <Text style={settings.profileDepartment}>{department}</Text>
                        <Text style={settings.profileName}>{name}</Text>
                        <Text style={settings.profileEmail}>{email}</Text>
                    </View>

                </View>

                <View style={settings.section}>

                    <Text style={settings.sectionHeader}>General</Text>

                    <TouchableOpacity activeOpacity={0.7} style={settings.settingTile}>
                        <Text style={settings.settingText}>Edit Profile</Text>
                        <Text style={settings.settingTextSub}>Make changes to your account on this platform</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={settings.settingTile}>
                        <Text style={settings.settingText}>Change Password</Text>
                        <Text style={settings.settingTextSub}>Change your current password used to access this app</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={settings.settingTile}>
                        <Text style={settings.settingText}>Theme</Text>
                        <Text style={settings.settingTextSub}>Select a theme that suits your style</Text>
                    </TouchableOpacity>

                </View>

                <View style={settings.section}>

                    <Text style={settings.sectionHeader}>App Info</Text>

                    <TouchableOpacity activeOpacity={0.7} style={settings.settingTile}>
                        <Text style={settings.settingText}>About</Text>
                        <Text style={settings.settingTextSub}>All you need to know about this application</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={settings.settingTile}>
                        <Text style={settings.settingText}>Version</Text>
                        <Text style={settings.settingTextSub}>1.0.0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={settings.settingTile}>
                        <Text style={settings.settingText}>Terms & Conditions</Text>
                        <Text style={settings.settingTextSub}>Everything related to the use of this app</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={settings.settingTile}>
                        <Text style={settings.settingText}>Privacy Policy</Text>
                        <Text style={settings.settingTextSub}>Policies reagrding our privacy</Text>
                    </TouchableOpacity>

                </View>

                <View style={settings.section}>

                    <Text style={settings.sectionHeader}>Others</Text>

                    <TouchableOpacity activeOpacity={0.7} style={settings.settingTile}>
                        <Text style={settings.settingText}>Logout</Text>
                        <Text style={settings.settingTextSub}>You're currently logged in as {name}</Text>
                    </TouchableOpacity>

                </View>

                <View style={settings.spacer}></View>

            </ScrollView>
        </View>
    )
}