import React, { useState } from 'react'
import { Image, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

// components
import HeaderComponent from '../components/headerComponent'

// styling
import { changePass } from '../styles/changePassword'

// utils
import { color } from '../utils/color'
import { moderateScale } from '../utils/metrics'

// images
import reset from '../assets/icons/reset.png'

export default function ChangePassword() {

    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <View style={changePass.main}>
            <HeaderComponent
                title={'Change Password'}
            />

            <ScrollView>

                <Image source={reset} style={changePass.illustration2} />

                <Text style={changePass.description}>
                    Your new password should be different from the previous one you used.
                </Text>

                <Text style={changePass.sectionHeader}>Current Password</Text>
                <View style={changePass.section}>
                    <TextInput
                        placeholder="Enter your Current Password"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textContentType="password"
                        value={currentPassword}
                        onChangeText={setCurrentPassword}
                        secureTextEntry={showPassword}
                        style={changePass.textInput}
                    />
                </View>

                <Text style={changePass.sectionHeader}>New Password</Text>
                <View style={changePass.section}>
                    <TextInput
                        placeholder="Enter your New Password"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textContentType="newPassword"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry={showPassword}
                        style={changePass.textInput}
                    />
                </View>

                <Text style={changePass.sectionHeader}>Confirm Password</Text>
                <View style={changePass.section}>
                    <TextInput
                        placeholder="Confirm your New Password"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textContentType="newPassword"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={showPassword}
                        style={changePass.textInput}
                    />
                </View>

                <View style={changePass.showPasswordContainer}>
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ?
                            <MaterialCommunityIcons name='checkbox-blank-outline' color={color.jet} size={moderateScale(24)} /> :
                            <Ionicons name='checkbox' color={color.main} size={moderateScale(24)} />
                        }
                    </TouchableOpacity>
                    <Text style={changePass.showPasswordText}>Show Password</Text>
                </View>

                <TouchableOpacity activeOpacity={0.7} style={changePass.buttonContainer}>
                    {isLoading ? <ActivityIndicator color={'white'} size={'small'} style={changePass.button} /> : <Text style={changePass.button}>Change</Text>}
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}