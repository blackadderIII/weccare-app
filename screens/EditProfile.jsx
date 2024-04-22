import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Image, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { Ionicons } from '@expo/vector-icons'

// styling
import { edit, darkEdit } from '../styles/editProfile'

// components
import HeaderComponent from '../components/headerComponent'

// utils
import { api } from '../utils/api'
import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme'
import { UserContext } from '../utils/user'
import { ProfilePictureContext } from '../utils/profilePicture';
import { errorToast, successToast, warnToast } from '../utils/toasts'

// images
const defaultProfilePicture = require('../assets/default.jpg')

export default function EditProfile() {

    const { theme } = useContext(ThemeContext)
    const { user, setUser } = useContext(UserContext)
    const { profilePicture, setProfilePicture } = useContext(ProfilePictureContext)

    const navigation = useNavigation()

    const [image, setImage] = useState(null);
    const [firstName, setFirstName] = useState(user.firstname)
    const [lastName, setLastName] = useState(user.lastname)
    const [isSaving, setIsSaving] = useState(false)
    const [isUploading, setIsUploading] = useState(false)

    const uploadImage = async (imageUri) => {

        const formData = new FormData()
        formData.append('image', {
            uri: imageUri,
            type: 'image/jpeg',
            name: 'uploaded.jpg'
        })

        setIsUploading(true)

        try {
            const upload = await fetch(`${api}/uploadProfilePicture`, {
                method: 'POST',
                body: formData,
            })
            const response = await upload.json()

            if (response.message === 'File uploaded!') {

                const updateProfile = await fetch(`${api}/updateUserProfile/${user.email}`)
                const res = await updateProfile.json()

                if (res.message === 'error executing query') {
                    setIsUploading(false)
                    errorToast("Can't reach servers. Please try again later")
                    return
                }
                if (res.message === 'failed') {
                    setIsUploading(false)
                    errorToast("An error occured. Please try again later")
                    return
                }

                const userInfo = res.info
                setUser(userInfo)

                setIsUploading(false)
                console.log('Image uploaded successfully')
                successToast("Profile picture updated successfully")
                return

            }
        } catch (error) {
            setIsUploading(false)
            console.error('Error uploading image:', error)
            errorToast("An error occured. Please try again later")
            return
        }

    }

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            })

            if (!result.canceled) {
                const uri = result.assets[0].uri;

                // delete old file
                const oldFile = await AsyncStorage.getItem('profilePicture')

                if (oldFile) {
                    await FileSystem.deleteAsync(oldFile)
                }

                // upload new file
                const fileName = uri.split('/').pop();
                const newPath = FileSystem.documentDirectory + fileName

                await AsyncStorage.setItem('profilePicture', newPath)
                    .then(async () => {
                        await FileSystem.copyAsync({ from: uri, to: newPath })
                            .then(async () => {
                                setProfilePicture(newPath)
                                uploadImage(newPath)
                            })
                            .catch((err) => {
                                console.log('error copying picture', err)
                                errorToast("An error occured. Please try again later")
                                return
                            })
                    })
                    .catch((err) => {
                        console.log('error saving name to async', err)
                        errorToast("An error occured. Please try again later")
                        return
                    })
            } else {
                console.log('operation cancelled')
                return
            }
        } catch (error) {
            console.log('error picking image', error)
            errorToast("An error occured. Please try again later")
            return
        }
    };

    const save = async () => {

        if (!firstName || !lastName) {
            warnToast("Fields can't be empty. Please check and try again.")
            return
        }

        if (firstName === user.firstname && lastName === user.lastname) {
            warnToast('No change was made.')
            return
        }

        setIsSaving(true)

        try {
            const saveInfo = await fetch(`${api}/saveProfile`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: firstName,
                    lastname: lastName,
                    email: user.email
                })
            })
            const response = await saveInfo.json()

            if (response.message === 'error executing query') {
                setIsSaving(false)
                errorToast("Can't reach servers. Please try again later")
                return
            }
            if (response.message === 'failed') {
                setIsSaving(false)
                errorToast('An error occured. Please try again later')
                return
            }

            const userInfo = response.info
            setUser(userInfo)

            setIsSaving(false)
            successToast("Profile updated successfuly")
            navigation.goBack()
            return
        }
        catch (error) {
            setIsSaving(false)
            console.log('error saving profile', error)
            errorToast('An error occured. Please try again later')
            return
        }
    }

    return (
        <View style={theme === 'light' ? edit.main : darkEdit.main}>
            <HeaderComponent
                onPress={() => navigation.goBack()}
                theme={theme}
                title={'Edit Profile'}
            />

            <ScrollView>

                <TouchableOpacity activeOpacity={.8} onPress={() => pickImage()} style={theme === 'light' ? edit.profile : darkEdit.profile}>
                    {isUploading ? <ActivityIndicator color={color.main} size={'large'} style={[edit.profilePicture, { position: 'absolute', zIndex: 5, backgroundColor: '#0005' }]} /> : ''}
                    <Image source={profilePicture ? { uri: profilePicture } : defaultProfilePicture} style={theme === 'light' ? edit.profilePicture : darkEdit.profilePicture} />
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

                <TouchableOpacity activeOpacity={0.7} onPress={() => save()} style={theme === 'light' ? edit.buttonContainer : darkEdit.buttonContainer}>
                    {isSaving ?
                        <View style={theme === 'light' ? edit.button : darkEdit.button}>
                            <ActivityIndicator color={'#fff'} />
                        </View> :
                        <Text style={theme === 'light' ? edit.button : darkEdit.button}>Save</Text>
                    }
                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}