import React, { useState, useContext } from 'react'
import { ActivityIndicator, View, Text, ScrollView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

// styling
import { write, darkWrite } from '../styles/write'

// component
import HeaderComponent from '../components/headerComponent'
import Countries from '../components/countries'

// utils
import { api } from '../utils/api'
import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme'
import { moderateScale } from '../utils/metrics'
import { errorToast, successToast, warnToast } from '../utils/toasts'

export default function WriteCard() {

    const { theme } = useContext(ThemeContext)

    const navigation = useNavigation()
    const route = useRoute()

    const { user } = route.params

    const username = `${user.firstname} ${user.lastname}`
    const department = user.department
    const [title, setTitle] = useState(null)
    const [showCountries, setShowCountries] = useState(false)
    const [country, setCountry] = useState('Select a country')
    const [location, setLocation] = useState(null)
    const [typeOfObservation, setTypeOfObservation] = useState(null)
    const [peopleActs, setPeopleActs] = useState(false)
    const [condition, setCondition] = useState(false)
    const [environmental, setEnvironmental] = useState(false)
    const [assetEquipment, setAssetEquipment] = useState(false)
    const [procedureSystem, setProcedureSystem] = useState(false)
    const [quality, setQuality] = useState(false)
    const [security, setSecurity] = useState(false)
    const [description, setDescription] = useState(null)
    const [actions, setActions] = useState(null)
    const [suggestion, setSuggestion] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const generateRandomNumber = () => {
        const min = 1000000;
        const max = 9999999;
        const randomNumber = `CC-${Math.floor(Math.random() * (max - min + 1)) + min}`;
        return randomNumber
    }

    const cardID = generateRandomNumber()

    const handleSelectedCountry = (option) => {
        setCountry(option)
    }

    const submitCard = async () => {
        if (!country || country === 'Select a country') {
            warnToast('Select a country')
            return
        }

        if (!location || location.trim() === '') {
            warnToast('Please enter a location')
            return
        }

        if (!typeOfObservation || typeOfObservation === '') {
            warnToast('Select an observation type.')
            return
        }
        if (!peopleActs && !condition && !environmental && !assetEquipment && !procedureSystem && !quality && !security) {
            warnToast('Select at least one(1) observation')
            return
        }
        if (!description) {
            warnToast('Description cannot be empty')
            return
        }

        setIsSubmitting(true)

        try {
            const submit = await fetch(`${api}/submitCard`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    actionsTaken: actions,
                    assetsEquipment: assetEquipment ? 1 : 0,
                    cardID: cardID,
                    cardTitle: title,
                    condition: condition ? 1 : 0,
                    description: description,
                    environmental: environmental ? 1 : 0,
                    observationType: typeOfObservation,
                    observerCountry: country,
                    observerDepartment: department,
                    observerDesignation: user.designation,
                    observerEmail: user.email,
                    observerLocation: location,
                    observerFirstname: user.firstname,
                    observerLastname: user.lastname,
                    peopleActs: peopleActs ? 1 : 0,
                    procedureSystem: procedureSystem ? 1 : 0,
                    quality: quality ? 1 : 0,
                    security: security ? 1 : 0,
                    status: 'Pending',
                    suggestion: suggestion
                })
            })
            const response = await submit.json()

            if (response.message === 'error executing query') {
                setIsSubmitting(false)
                errorToast("Can't reach servers. Please try again later")
                return
            }
            if (response.message === 'failed') {
                setIsSubmitting(false)
                errorToast("An error occured. Please try again later")
                return
            }

            setIsSubmitting(false)
            successToast("Care Card submitted successfully")
            navigation.goBack()
            return
        }
        catch (error) {
            setIsSubmitting(false)
            console.log('error submitting care card', error)
            errorToast("An error occured. Please try again later")
            return
        }
    }

    return (
        <>
            <View style={theme === 'light' ? write.main : darkWrite.main}>
                <HeaderComponent
                    onPress={() => navigation.goBack()}
                    theme={theme}
                    title={'Care Card'}
                />
                <ScrollView style={theme === 'light' ? write.container : darkWrite.container} contentContainerStyle={{ alignItems: 'center' }}>

                    <View style={theme === 'light' ? write.section : darkWrite.section}>
                        <Text style={theme === 'light' ? write.titleText : darkWrite.titleText}>Title</Text>
                        <View style={theme === 'light' ? write.textInputContainer : darkWrite.textInputContainer}>
                            <Text style={theme === 'light' ? write.miniDescription : darkWrite.miniDescription}>
                                This is an optional feature that allows you to name your carecard making recognition quick and easy.{`\n`}
                            </Text>
                            <TextInput
                                value={title}
                                onChangeText={setTitle}
                                editable={true}
                                placeholder='eg. Care Card 1'
                                style={theme === 'light' ? write.textInput : darkWrite.textInput}
                                selectionColor={"#0080006b"}
                                cursorColor={color.main}
                                placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                            />
                        </View>
                    </View>

                    {/* Part A */}
                    <View style={theme === 'light' ? write.section : darkWrite.section}>
                        <Text style={theme === 'light' ? write.titleText : darkWrite.titleText}>Part A - General</Text>
                        <View style={theme === 'light' ? write.textInputContainer : darkWrite.textInputContainer}>
                            <Text style={theme === 'light' ? write.textInputTitle : darkWrite.textInputTitle}>Name of Observer</Text>
                            <TextInput
                                value={username}
                                editable={false}
                                style={theme === 'light' ? write.textInput : darkWrite.textInput}
                                selectionColor={"#0080006b"}
                                cursorColor={color.main}
                                placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                            />
                        </View>
                        <View style={theme === 'light' ? write.textInputContainer : darkWrite.textInputContainer}>
                            <Text style={theme === 'light' ? write.textInputTitle : darkWrite.textInputTitle}>Department</Text>
                            <TextInput
                                value={department}
                                editable={false}
                                style={theme === 'light' ? write.textInput : darkWrite.textInput}
                                selectionColor={"#0080006b"}
                                cursorColor={color.main}
                                placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                            />
                        </View>
                        <View style={theme === 'light' ? write.textInputContainer : darkWrite.textInputContainer}>
                            <Text style={theme === 'light' ? write.textInputTitle : darkWrite.textInputTitle}>*Location</Text>

                            <View style={theme === 'light' ? write.locationHolder : darkWrite.locationHolder}>
                                <TouchableOpacity activeOpacity={.7} onPress={() => setShowCountries(!showCountries)} style={[theme === 'light' ? write.textInput : darkWrite.textInput, { width: '47%', padding: moderateScale(14), }]}>
                                    <Text style={{ fontFamily: 'poppins', color: theme === 'light' ? '#222' : '#fff' }}>{country}</Text>
                                </TouchableOpacity>

                                <TextInput
                                    value={location}
                                    style={[theme === 'light' ? write.textInput : darkWrite.textInput, { width: '47%', padding: moderateScale(12) }]}
                                    selectionColor={"#0080006b"}
                                    cursorColor={color.main}
                                    placeholder='Your location'
                                    onChangeText={setLocation}
                                    placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                                />
                            </View>
                        </View>
                    </View>

                    {/* part B */}
                    <View style={theme === 'light' ? write.section : darkWrite.section}>
                        <Text style={theme === 'light' ? write.titleText : darkWrite.titleText}>*Part B - Type of Observation</Text>
                        <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => setTypeOfObservation("Positive")}>
                            {typeOfObservation === "Positive" ? (
                                <AntDesign
                                    name='check-circle'
                                    size={20}
                                    color={color.main}
                                />
                            ) : (
                                <Entypo
                                    name='circle'
                                    size={20}
                                    color={color.main}
                                />
                            )}
                            <Text style={theme === 'light' ? write.radioText : darkWrite.radioText}>Positive</Text>
                        </Pressable>
                        <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => setTypeOfObservation("Substandard Hazard")}>
                            {typeOfObservation === "Substandard Hazard" ? (
                                <AntDesign
                                    name='check-circle'
                                    size={20}
                                    color={color.main}
                                />
                            ) : (
                                <Entypo
                                    name='circle'
                                    size={20}
                                    color={color.main}
                                />
                            )}
                            <Text style={theme === 'light' ? write.radioText : darkWrite.radioText}>Substandard Hazard</Text>
                        </Pressable>
                        <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => setTypeOfObservation("Improvement")}>
                            {typeOfObservation === "Improvement" ? (
                                <AntDesign
                                    name='check-circle'
                                    size={20}
                                    color={color.main}
                                />
                            ) : (
                                <Entypo
                                    name='circle'
                                    size={20}
                                    color={color.main}
                                />
                            )}
                            <Text style={theme === 'light' ? write.radioText : darkWrite.radioText}>Improvement</Text>
                        </Pressable>
                    </View>

                    {/* Part C */}
                    <View style={theme === 'light' ? write.section : darkWrite.section}>
                        <Text style={theme === 'light' ? write.titleText : darkWrite.titleText}>*Part C - Observation</Text>
                        <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => setPeopleActs(!peopleActs)}>
                            {peopleActs ? (
                                <AntDesign
                                    name='check-circle'
                                    size={20}
                                    color={color.main}
                                />
                            ) : (
                                <Entypo
                                    name='circle'
                                    size={20}
                                    color={color.main}
                                />
                            )}
                            <Text style={theme === 'light' ? write.radioText : darkWrite.radioText}>People | Acts</Text>
                        </Pressable>
                        <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => setCondition(!condition)}>
                            {condition ? (
                                <AntDesign
                                    name='check-circle'
                                    size={20}
                                    color={color.main}
                                />
                            ) : (
                                <Entypo
                                    name='circle'
                                    size={20}
                                    color={color.main}
                                />
                            )}
                            <Text style={theme === 'light' ? write.radioText : darkWrite.radioText}>Condition</Text>
                        </Pressable>
                        <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => setEnvironmental(!environmental)}>
                            {environmental ? (
                                <AntDesign
                                    name='check-circle'
                                    size={20}
                                    color={color.main}
                                />
                            ) : (
                                <Entypo
                                    name='circle'
                                    size={20}
                                    color={color.main}
                                />
                            )}
                            <Text style={theme === 'light' ? write.radioText : darkWrite.radioText}>Environmental</Text>
                        </Pressable>
                        <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => setAssetEquipment(!assetEquipment)}>
                            {assetEquipment ? (
                                <AntDesign
                                    name='check-circle'
                                    size={20}
                                    color={color.main}
                                />
                            ) : (
                                <Entypo
                                    name='circle'
                                    size={20}
                                    color={color.main}
                                />
                            )}
                            <Text style={theme === 'light' ? write.radioText : darkWrite.radioText}>Asset | Equipment</Text>
                        </Pressable>
                        <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => setProcedureSystem(!procedureSystem)}>
                            {procedureSystem ? (
                                <AntDesign
                                    name='check-circle'
                                    size={20}
                                    color={color.main}
                                />
                            ) : (
                                <Entypo
                                    name='circle'
                                    size={20}
                                    color={color.main}
                                />
                            )}
                            <Text style={theme === 'light' ? write.radioText : darkWrite.radioText}>Procedure | System</Text>
                        </Pressable>
                        <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => setQuality(!quality)}>
                            {quality ? (
                                <AntDesign
                                    name='check-circle'
                                    size={20}
                                    color={color.main}
                                />
                            ) : (
                                <Entypo
                                    name='circle'
                                    size={20}
                                    color={color.main}
                                />
                            )}
                            <Text style={theme === 'light' ? write.radioText : darkWrite.radioText}>Quality</Text>
                        </Pressable>
                        <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => setSecurity(!security)}>
                            {security ? (
                                <AntDesign
                                    name='check-circle'
                                    size={20}
                                    color={color.main}
                                />
                            ) : (
                                <Entypo
                                    name='circle'
                                    size={20}
                                    color={color.main}
                                />
                            )}
                            <Text style={theme === 'light' ? write.radioText : darkWrite.radioText}>Security</Text>
                        </Pressable>
                    </View>

                    {/* part D */}
                    <View style={theme === 'light' ? write.section : darkWrite.section}>
                        <Text style={theme === 'light' ? write.titleText : darkWrite.titleText}>*Part D - Description of Observation</Text>
                        <TextInput
                            value={description}
                            onChangeText={setDescription}
                            keyboardType='default'
                            multiline={true}
                            textAlignVertical='top'
                            selectionColor={'#0080006b'}
                            cursorColor={color.main}
                            style={theme === 'light' ? write.textInputMultiline : darkWrite.textInputMultiline}
                            placeholder='Describe your observation'
                            placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                        />
                    </View>

                    {/* part E */}
                    <View style={theme === 'light' ? write.section : darkWrite.section}>
                        <Text style={theme === 'light' ? write.titleText : darkWrite.titleText}>Part E - Actions & Suggestions</Text>
                        <Text style={theme === 'light' ? write.descriptiveText : darkWrite.descriptiveText}>Were you able to correct the problem?</Text>
                        <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => { actions === 'Yes' ? setActions(null) : setActions("Yes") }}>
                            {actions === "Yes" ? (
                                <AntDesign
                                    name='check-circle'
                                    size={20}
                                    color={color.main}
                                />
                            ) : (
                                <Entypo
                                    name='circle'
                                    size={20}
                                    color={color.main}
                                />
                            )}
                            <Text style={theme === 'light' ? write.radioText : darkWrite.radioText}>Yes</Text>
                        </Pressable>
                        <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => { actions === 'No' ? setActions(null) : setActions("No") }}>
                            {actions === "No" ? (
                                <AntDesign
                                    name='check-circle'
                                    size={20}
                                    color={color.main}
                                />
                            ) : (
                                <Entypo
                                    name='circle'
                                    size={20}
                                    color={color.main}
                                />
                            )}
                            <Text style={theme === 'light' ? write.radioText : darkWrite.radioText}>No</Text>
                        </Pressable>

                        <Text style={theme === 'light' ? write.descriptiveText : darkWrite.descriptiveText}>
                            Describe the corrective action taken, or your suggestion to prevent reoccurance.
                        </Text>
                        <TextInput
                            value={suggestion}
                            onChangeText={setSuggestion}
                            keyboardType='default'
                            multiline={true}
                            selectionColor={'#0080006b'}
                            cursorColor={color.main}
                            textAlignVertical='top'
                            placeholder='Your corrective action or suggestion'
                            placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                            style={theme === 'light' ? write.textInputMultiline : darkWrite.textInputMultiline}
                        />
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity style={theme === 'light' ? write.submitButton : darkWrite.submitButton} activeOpacity={0.8} onPress={() => submitCard()}>
                        {isSubmitting ?
                            <ActivityIndicator color={'white'} /> :
                            <Text style={theme === 'light' ? write.submitButtonText : darkWrite.submitButtonText}>Submit</Text>
                        }
                    </TouchableOpacity>

                </ScrollView>
            </View>

            <Countries
                isVisible={showCountries}
                theme={theme}
                toggleVisibility={() => setShowCountries(false)}
                onSelectedOption={handleSelectedCountry}
            />
        </>
    )
}