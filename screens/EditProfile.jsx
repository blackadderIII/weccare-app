import React, { useState } from 'react'
import { ActivityIndicator, Image, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

// styling
import { edit } from '../styles/editProfile'

// components
import HeaderComponent from '../components/headerComponent'

// utils
import { color } from '../utils/color'

// images
const profilePic = require('../assets/dp004.jpg')

export default function EditProfile() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isSaving, setIsSaving] = useState(false)

    return (
        <View style={edit.main}>
            <HeaderComponent
                title={'Edit Profile'}
            />

            <ScrollView>

                <TouchableOpacity activeOpacity={.8} style={edit.profile}>
                    <Image source={profilePic} style={edit.profilePicture} />
                    <Ionicons name='camera' color={'white'} style={edit.profileIcon} />
                </TouchableOpacity>

                <Text style={edit.sectionHeader}>First Name</Text>
                <View style={edit.section}>
                    <TextInput
                        placeholder="Enter your first name"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        value={firstName}
                        textContentType='name'
                        keyboardType='default'
                        onChangeText={setFirstName}
                        style={edit.textInput}
                    />
                </View>

                <Text style={edit.sectionHeader}>Last Name</Text>
                <View style={edit.section}>
                    <TextInput
                        placeholder="Enter your last name"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        value={lastName}
                        textContentType='name'
                        keyboardType='default'
                        onChangeText={setLastName}
                        style={edit.textInput}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.7} style={edit.buttonContainer}>
                    {isSaving ?
                        <ActivityIndicator color={'#fff'} /> :
                        <Text style={edit.button}>Save</Text>
                    }
                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}