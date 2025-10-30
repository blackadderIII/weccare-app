import React, { useContext, useState } from 'react'
import { Image, View, ScrollView, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { settings, darkSettings } from '../styles/settings'

import HeaderComponent from '../components/headerComponent'
import Confirm from '../components/confirm';

import { ThemeContext } from '../utils/theme'
import { UserContext } from '../utils/user'
import { ProfilePictureContext } from '../utils/profilePicture';
import { color } from '../utils/color';

// const profilePic = require('../assets/default.jpg')
const profilePic = require('../profilePictures/8671783526.jpg')

export default function Settings() {

    const { theme } = useContext(ThemeContext)
    const { user, setUser } = useContext(UserContext)
    const { profilePicture } = useContext(ProfilePictureContext)

    const navigation = useNavigation()

    const department = user.department
    const name = `${user.firstname} ${user.lastname}`
    const email = `${user.email}`

    const [isImageLoading, setIsImageLoading] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)

    return (
        <>
            <View style={theme === 'light' ? settings.main : darkSettings.main}>
                <HeaderComponent
                    onPress={() => navigation.goBack()}
                    theme={theme}
                    title={'Settings'}
                />

                <ScrollView style={theme === 'light' ? settings.container : darkSettings.container} contentContainerStyle={{ alignItems: 'center' }}>

                    <View style={theme === 'light' ? settings.profile : darkSettings.profile}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {isImageLoading ? <ActivityIndicator color={color.main} size={'large'} style={settings.imageLoader} /> : ''}
                            <Image source={profilePicture ? { uri: profilePicture } : profilePic} style={theme === 'light' ? settings.profilePicture : darkSettings.profilePicture} />
                        </View>

                        <View style={theme === 'light' ? settings.profileInfo : darkSettings.profileInfo}>
                            <Text style={theme === 'light' ? settings.profileDepartment : darkSettings.profileDepartment}>{department}</Text>
                            <Text adjustsFontSizeToFit={true} style={theme === 'light' ? settings.profileName : darkSettings.profileName}>{name}</Text>
                            <Text style={theme === 'light' ? settings.profileEmail : darkSettings.profileEmail}>{email}</Text>
                        </View>

                    </View>

                    <View style={theme === 'light' ? settings.section : darkSettings.section}>

                        <Text style={theme === 'light' ? settings.sectionHeader : darkSettings.sectionHeader}>General</Text>

                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('editProfile', { user: user })} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                            <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Edit Profile</Text>
                            <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>Make changes to your account on this platform</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('changePass', { user: user })} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                            <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Change Password</Text>
                            <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>Change your current password used to access this app</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('theme')} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                            <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Theme</Text>
                            <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>Select a theme that suits your style</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={theme === 'light' ? settings.section : darkSettings.section}>

                        <Text style={theme === 'light' ? settings.sectionHeader : darkSettings.sectionHeader}>App Info</Text>

                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('about')} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                            <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>About</Text>
                            <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>All you need to know about this application</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                            <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Version</Text>
                            <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>1.0.0</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.navigate('terms') }} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                            <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Terms & Conditions</Text>
                            <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>Everything related to the use of this app</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.navigate('privacy') }} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                            <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Privacy Policy</Text>
                            <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>Policies reagrding our privacy</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={theme === 'light' ? settings.section : darkSettings.section}>

                        <Text style={theme === 'light' ? settings.sectionHeader : darkSettings.sectionHeader}>Others</Text>

                        <TouchableOpacity activeOpacity={0.7} onPress={() => setShowConfirmation(true)} style={theme === 'light' ? settings.settingTile : darkSettings.settingTile}>
                            <Text style={theme === 'light' ? settings.settingText : darkSettings.settingText}>Logout</Text>
                            <Text style={theme === 'light' ? settings.settingTextSub : darkSettings.settingTextSub}>You're currently logged in as {name}</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={theme === 'light' ? settings.spacer : darkSettings.spacer}></View>

                </ScrollView>
            </View>

            <Confirm
                theme={theme}
                isVisible={showConfirmation}
                question={'Are you sure you want to log out?'}
                onCancel={() => setShowConfirmation(false)}
                onConfirm={() => setUser(null)}
            />
        </>
    )
}