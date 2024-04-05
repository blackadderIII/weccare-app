import React, { useState } from 'react'
import { ActivityIndicator, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

// components
import HeaderComponent from '../components/headerComponent'

// styling
import { signup } from '../styles/signup'

// images
import carecard from '../assets/logo.png'

// utils
import { color } from '../utils/color'
import { moderateScale } from '../utils/metrics'

export default function SignUp() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [showDesignation, setShowDesgination] = useState(false)
    const [designation, setDesignation] = useState('Select your designation')
    const [showDepartment, setShowDepartment] = useState(false)
    const [department, setDepartment] = useState('Select your department')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <View style={signup.main}>
            <HeaderComponent
                title={'Create Account'}
            />
            <ScrollView>
                <Image source={carecard} style={signup.logo} />

                <Text style={signup.sectionHeader}>First Name</Text>
                <View style={signup.section}>
                    <TextInput
                        placeholder="Enter your first name"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textContentType="name"
                        value={firstname}
                        onChangeText={setFirstname}
                        style={signup.textInput}
                    />
                </View>

                <Text style={signup.sectionHeader}>Last Name</Text>
                <View style={signup.section}>
                    <TextInput
                        placeholder="Enter your last name"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textContentType="name"
                        value={lastname}
                        onChangeText={setLastname}
                        style={signup.textInput}
                    />
                </View>

                <Text style={signup.sectionHeader}>Email</Text>
                <View style={signup.section}>
                    <TextInput
                        placeholder="Enter your email"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textContentType="emailAddress"
                        value={email}
                        onChangeText={setEmail}
                        style={signup.textInput}
                    />
                </View>

                <Text style={signup.sectionHeader}>Department</Text>
                <TouchableOpacity onPress={() => setShowDepartment(!showDepartment)} activeOpacity={.7}>
                    <View style={signup.dropDownPlaceholders}>
                        <Text style={{ fontFamily: 'poppins', fontSize: moderateScale(14) }}>{department}</Text>
                        <Feather
                            name={'chevron-down'}
                            color={'green'}
                            size={18}
                            style={signup.dropDownIcon}
                        />
                    </View>
                </TouchableOpacity>

                <Text style={signup.sectionHeader}>Designation</Text>
                <TouchableOpacity onPress={() => setShowDesgination(!showDesignation)} activeOpacity={.7}>
                    <View style={signup.dropDownPlaceholders}>
                        <Text style={{ fontFamily: 'poppins', fontSize: moderateScale(14) }}>{designation}</Text>
                        <Feather
                            name={'chevron-down'}
                            color={'green'}
                            size={18}
                            style={signup.dropDownIcon}
                        />
                    </View>
                </TouchableOpacity>

                <Text style={signup.sectionHeader}>Create Password</Text>
                <View style={signup.section}>
                    <TextInput
                        placeholder="Enter a new Password"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textContentType="password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        style={signup.textInput}
                    />
                </View>

                <Text style={signup.sectionHeader}>Confirm Password</Text>
                <View style={signup.section}>
                    <TextInput
                        placeholder="Confirm your new Password"
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textContentType="password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showPassword}
                        style={signup.textInput}
                    />
                </View>

                <View style={signup.showPasswordContainer}>
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ?
                            <Ionicons name='checkbox' color={color.main} size={moderateScale(24)} /> :
                            <MaterialCommunityIcons name='checkbox-blank-outline' color={color.jet} size={moderateScale(24)} />
                        }
                    </TouchableOpacity>
                    <Text style={signup.showPasswordText}>Show Password</Text>
                </View>

                <TouchableOpacity activeOpacity={0.7} style={signup.buttonContainer}>
                    {isLoading ?
                        <ActivityIndicator color={'white'} size={'small'} style={signup.button} /> :
                        <Text style={signup.button}>Sign Up</Text>
                    }
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={signup.forgotPassword}>
                    <Text style={signup.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={signup.register} onPress={() => navigation.navigate('SignupScreen')}>
                    <Text style={signup.registerText}>Don't have an account?</Text>
                    <Text style={signup.registerLink}> Register Now</Text>
                </TouchableOpacity>

                <View style={signup.spacer}></View>
            </ScrollView>
        </View>
    )
}