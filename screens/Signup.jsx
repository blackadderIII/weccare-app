import React, { useContext, useState } from 'react'
import { ActivityIndicator, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

// components
import HeaderComponent from '../components/headerComponent'
import Departments from '../components/departments'
import Designation from '../components/designation'

// styling
import { signup, darkSignup } from '../styles/signup'

// images
import carecard from '../assets/logo.png'

// utils
import { api } from '../utils/api'
import { color } from '../utils/color'
import { moderateScale } from '../utils/metrics'
import { ThemeContext } from '../utils/theme'
import { errorToast, successToast, warnToast } from '../utils/toasts'

export default function SignUp() {

    const { theme } = useContext(ThemeContext)

    const navigation = useNavigation()

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

    // ---------------------------------------------------------------

    const handleSelectedDepartment = (option) => {
        setDepartment(option)
    }

    const handleSelectedDesignation = (option) => {
        setDesignation(option)
    }

    // ---------------------------------------------------------------

    const createUser = async () => {

        if (!firstname || !lastname || !email || !designation === 'Select your designation' || department === 'Select your department' || !password || !confirmPassword) {
            warnToast("Fields can't be empty. Please check and try again")
            return
        }

        if (password !== confirmPassword) {
            warnToast("Passwords don't match. Please check and try again")
            return
        }

        setIsLoading(true)

        try {
            const create = await fetch(`${api}:3000/createUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    profilepicture: 'default.jpg',
                    email: email,
                    password: password,
                    department: department,
                    designation: designation,
                })
            })
            const response = await create.json()

            if (response.message === 'error executing query') {
                setIsLoading(false)
                errorToast("Can't reach server. Please try again later")
                return
            }
            if (response.message === 'error adding user') {
                setIsLoading(false)
                errorToast("An error occured. Please try again later")
                return
            }
            if (response.message === 'email exist') {
                setIsLoading(false)
                errorToast("This user already exists")
                return
            }

            setIsLoading(false)
            successToast('User created Successfully')
            navigation.navigate('signin')
            return
        }
        catch (error) {
            setIsLoading(false)
            console.log('error testing', error)
            errorToast('An error occured. Please try again later.')
            return
        }
    }

    return (
        <>
            <View style={theme === 'light' ? signup.main : darkSignup.main}>
                <HeaderComponent
                    theme={theme}
                    onPress={() => navigation.navigate('signin')}
                    title={'Create Account'}
                />
                <ScrollView>
                    <Image source={carecard} style={theme === 'light' ? signup.logo : darkSignup.logo} />

                    <Text style={theme === 'light' ? signup.sectionHeader : darkSignup.sectionHeader}>First Name</Text>
                    <View style={theme === 'light' ? signup.section : darkSignup.section}>
                        <TextInput
                            placeholder="Enter your first name"
                            selectionColor={'#0080006b'}
                            cursorColor={color.main}
                            textContentType="name"
                            value={firstname}
                            onChangeText={setFirstname}
                            placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                            style={theme === 'light' ? signup.textInput : darkSignup.textInput}
                        />
                    </View>

                    <Text style={theme === 'light' ? signup.sectionHeader : darkSignup.sectionHeader}>Last Name</Text>
                    <View style={theme === 'light' ? signup.section : darkSignup.section}>
                        <TextInput
                            placeholder="Enter your last name"
                            selectionColor={'#0080006b'}
                            cursorColor={color.main}
                            textContentType="name"
                            value={lastname}
                            onChangeText={setLastname}
                            placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                            style={theme === 'light' ? signup.textInput : darkSignup.textInput}
                        />
                    </View>

                    <Text style={theme === 'light' ? signup.sectionHeader : darkSignup.sectionHeader}>Email</Text>
                    <View style={theme === 'light' ? signup.section : darkSignup.section}>
                        <TextInput
                            placeholder="Enter your email"
                            selectionColor={'#0080006b'}
                            cursorColor={color.main}
                            textContentType="emailAddress"
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                            placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                            style={theme === 'light' ? signup.textInput : darkSignup.textInput}
                        />
                    </View>

                    <Text style={theme === 'light' ? signup.sectionHeader : darkSignup.sectionHeader}>Department</Text>
                    <TouchableOpacity onPress={() => setShowDepartment(!showDepartment)} activeOpacity={.7}>
                        <View style={theme === 'light' ? signup.dropDownPlaceholders : darkSignup.dropDownPlaceholders}>
                            <Text style={{ fontFamily: 'poppins', fontSize: moderateScale(14), color: theme === 'light' ? color.jet : color.whiteText }}>{department}</Text>
                            <Feather
                                name={'chevron-down'}
                                color={'green'}
                                size={18}
                                style={theme === 'light' ? signup.dropDownIcon : darkSignup.dropDownIcon}
                            />
                        </View>
                    </TouchableOpacity>

                    <Text style={theme === 'light' ? signup.sectionHeader : darkSignup.sectionHeader}>Designation</Text>
                    <TouchableOpacity onPress={() => setShowDesgination(!showDesignation)} activeOpacity={.7}>
                        <View style={theme === 'light' ? signup.dropDownPlaceholders : darkSignup.dropDownPlaceholders}>
                            <Text style={{ fontFamily: 'poppins', fontSize: moderateScale(14), color: theme === 'light' ? color.jet : color.whiteText }}>{designation}</Text>
                            <Feather
                                name={'chevron-down'}
                                color={'green'}
                                size={18}
                                style={theme === 'light' ? signup.dropDownIcon : darkSignup.dropDownIcon}
                            />
                        </View>
                    </TouchableOpacity>

                    <Text style={theme === 'light' ? signup.sectionHeader : darkSignup.sectionHeader}>Create Password</Text>
                    <View style={theme === 'light' ? signup.section : darkSignup.section}>
                        <TextInput
                            placeholder="Enter a new Password"
                            selectionColor={'#0080006b'}
                            cursorColor={color.main}
                            textContentType="password"
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                            secureTextEntry={!showPassword}
                            style={theme === 'light' ? signup.textInput : darkSignup.textInput}
                        />
                    </View>

                    <Text style={theme === 'light' ? signup.sectionHeader : darkSignup.sectionHeader}>Confirm Password</Text>
                    <View style={theme === 'light' ? signup.section : darkSignup.section}>
                        <TextInput
                            placeholder="Confirm your new Password"
                            selectionColor={'#0080006b'}
                            cursorColor={color.main}
                            textContentType="password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                            secureTextEntry={!showPassword}
                            style={theme === 'light' ? signup.textInput : darkSignup.textInput}
                        />
                    </View>

                    <View style={theme === 'light' ? signup.showPasswordContainer : darkSignup.showPasswordContainer}>
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            {showPassword ?
                                <Ionicons name='checkbox' color={color.main} size={moderateScale(24)} /> :
                                <MaterialCommunityIcons name='checkbox-blank-outline' color={color.jet} size={moderateScale(24)} />
                            }
                        </TouchableOpacity>
                        <Text style={theme === 'light' ? signup.showPasswordText : darkSignup.showPasswordText}>Show Password</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => createUser()} style={theme === 'light' ? signup.buttonContainer : darkSignup.buttonContainer}>
                        {isLoading ?
                            <ActivityIndicator color={'white'} size={'small'} style={theme === 'light' ? signup.button : darkSignup.button} /> :
                            <Text style={theme === 'light' ? signup.button : darkSignup.button}>Sign Up</Text>
                        }
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={theme === 'light' ? signup.register : darkSignup.register} onPress={() => navigation.navigate('signin')}>
                        <Text style={theme === 'light' ? signup.registerText : darkSignup.registerText}>Already have an account?</Text>
                        <Text style={theme === 'light' ? signup.registerLink : darkSignup.registerLink}> Login Here</Text>
                    </TouchableOpacity>

                    <View style={theme === 'light' ? signup.spacer : darkSignup.spacer}></View>
                </ScrollView>
            </View>

            <Departments
                theme={theme}
                isVisible={showDepartment}
                toggleVisibility={() => setShowDepartment(false)}
                onSelectedOption={handleSelectedDepartment}
            />

            <Designation
                theme={theme}
                isVisible={showDesignation}
                toggleVisibility={() => setShowDesgination(false)}
                onSelectedOption={handleSelectedDesignation}
            />
        </>
    )
}