import React, { useContext, useState } from 'react'
import { ActivityIndicator, Image, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

// styling
import { edit, darkEdit } from '../styles/editProfile'

// components
import HeaderComponent from '../components/headerComponent'

// utils
import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme'

// images
const profilePic = require('../assets/dp004.jpg')

export default function EditProfile() {

    const { theme } = useContext(ThemeContext)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isSaving, setIsSaving] = useState(false)

    return (
        <View style={theme === 'light' ? edit.main : darkEdit.main}>
            <HeaderComponent
                title={'Edit Profile'}
            />

            <ScrollView>

                <TouchableOpacity activeOpacity={.8} style={theme === 'light' ? edit.profile : darkEdit.profile}>
                    <Image source={profilePic} style={theme === 'light' ? edit.profilePicture : darkEdit.profilePicture} />
                    <Ionicons name='camera' color={'white'} style={theme === 'light' ? edit.profileIcon : darkEdit.profileIcon} />
                </TouchableOpacity>

                <Text style={theme === 'light' ? edit.sectionHeader : darkEdit.sectionHeader}>First Name</Text>
                <View style={theme === 'light' ? edit.section : darkEdit.section}>
                    <TextInput
                        placeholder="Enter your first name"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        value={firstName}
                        textContentType='name'
                        placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                        keyboardType='default'
                        onChangeText={setFirstName}
                        style={theme === 'light' ? edit.textInput : darkEdit.textInput}
                    />
                </View>

                <Text style={theme === 'light' ? edit.sectionHeader : darkEdit.sectionHeader}>Last Name</Text>
                <View style={theme === 'light' ? edit.section : darkEdit.section}>
                    <TextInput
                        placeholder="Enter your last name"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        value={lastName}
                        textContentType='name'
                        keyboardType='default'
                        placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                        onChangeText={setLastName}
                        style={theme === 'light' ? edit.textInput : darkEdit.textInput}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? edit.buttonContainer : darkEdit.buttonContainer}>
                    {isSaving ?
                        <ActivityIndicator color={'#fff'} /> :
                        <Text style={theme === 'light' ? edit.button : darkEdit.button}>Save</Text>
                    }
                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}