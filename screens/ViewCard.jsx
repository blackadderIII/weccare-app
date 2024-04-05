import React, { useContext, useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
// styling
import { write, darkWrite } from '../styles/write'

// component
import HeaderComponent from '../components/headerComponent'

// utils
import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme'
import { moderateScale } from '../utils/metrics'

export default function ViewCard() {

    const { theme } = useContext(ThemeContext)

    const username = 'Paul Arthur'
    const department = 'IT'
    const date = 'March 04, 2024'
    const status = 'Pending'

    const [title, setTitle] = useState('CC-0789361')
    const [country, setCountry] = useState('Ghana')
    const [location, setLocation] = useState('Agona, Takoradi')
    const [showCountries, setShowCountries] = useState(false)
    const [typeOfObservation, setTypeOfObservation] = useState('Positive')
    const [peopleActs, setPeopleActs] = useState(true)
    const [condition, setCondition] = useState(false)
    const [environmental, setEnvironmental] = useState(true)
    const [assetEquipment, setAssetEquipment] = useState(true)
    const [procedureSystem, setProcedureSystem] = useState(false)
    const [quality, setQuality] = useState(false)
    const [security, setSecurity] = useState(true)
    const [description, setDescription] = useState("A lot of description to write down but let's keep it simple for now.")
    const [actions, setActions] = useState('')
    const [correctiveAction, setCorrectiveAction] = useState('Suggestions, lots and lots of suggestions. Question is, will they ever amount to anything? Or are they just going to remain suggestions for the rest of eternity?')
    const [isSubmitting, setIsSubmitting] = useState(false)

    return (
        <View style={theme === 'light' ? write.main : darkWrite.main}>
            <HeaderComponent
                title={title}
            />
            <ScrollView style={theme === 'light' ? write.container : darkWrite.container} contentContainerStyle={{ alignItems: 'center' }}>

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
                        />
                    </View>
                    <View style={theme === 'light' ? write.textInputContainer : darkWrite.textInputContainer}>
                        <Text style={theme === 'light' ? write.textInputTitle : darkWrite.textInputTitle}>*Location</Text>

                        <View style={theme === 'light' ? write.locationHolder : darkWrite.locationHolder}>
                            <TouchableOpacity activeOpacity={.7} onPress={() => setShowCountries(!showCountries)} style={[theme === 'light' ? write.textInput : darkWrite.textInput, { width: '47%', padding: moderateScale(14), }]}>
                                <Text style={{ fontFamily: 'poppins', color: theme === 'light' ? '#222' : '#ddd' }}>{country}</Text>
                            </TouchableOpacity>

                            <TextInput
                                value={location}
                                style={[theme === 'light' ? write.textInput : darkWrite.textInput, { width: '47%', padding: moderateScale(12) }]}
                                selectionColor={"#0080006b"}
                                cursorColor={color.main}
                                editable={false}
                                placeholder='Your location'
                                onChangeText={setLocation}
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
                                name='checkcircle'
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
                                name='checkcircle'
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
                                name='checkcircle'
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
                                name='checkcircle'
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
                                name='checkcircle'
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
                                name='checkcircle'
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
                                name='checkcircle'
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
                                name='checkcircle'
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
                                name='checkcircle'
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
                                name='checkcircle'
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
                        editable={false}
                        cursorColor={color.main}
                        style={theme === 'light' ? write.textInputMultiline : darkWrite.textInputMultiline}
                        placeholder='Describe your observation'
                    />
                </View>

                {/* part E */}
                <View style={theme === 'light' ? write.section : darkWrite.section}>
                    <Text style={theme === 'light' ? write.titleText : darkWrite.titleText}>Part E - Actions & Suggestions</Text>
                    <Text style={theme === 'light' ? write.descriptiveText : darkWrite.descriptiveText}>Were you able to correct the problem?</Text>
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => setActions("Yes")}>
                        {actions === "Yes" ? (
                            <AntDesign
                                name='checkcircle'
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
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} onPress={() => setActions("No")}>
                        {actions === "No" ? (
                            <AntDesign
                                name='checkcircle'
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
                        value={correctiveAction}
                        onChangeText={setCorrectiveAction}
                        keyboardType='default'
                        editable={false}
                        multiline={true}
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textAlignVertical='top'
                        placeholder='Your corrective action or suggestion'
                        style={theme === 'light' ? write.textInputMultiline : darkWrite.textInputMultiline}
                    />
                </View>

                {/* Card Details */}
                <View style={theme === 'light' ? write.cardInfo : darkWrite.cardInfo}>
                    <View style={theme === 'light' ? write.infoCont : darkWrite.infoCont}>
                        <Text style={theme === 'light' ? write.infoContTitle : darkWrite.infoContTitle}>Card No: </Text>
                        <Text style={theme === 'light' ? write.infoContText : darkWrite.infoContText}>{title}</Text>
                    </View>
                    <View style={theme === 'light' ? write.infoCont : darkWrite.infoCont}>
                        <Text style={theme === 'light' ? write.infoContTitle : darkWrite.infoContTitle}>Date Submitted: </Text>
                        <Text style={theme === 'light' ? write.infoContText : darkWrite.infoContText}>{date}</Text>
                    </View>
                    <View style={theme === 'light' ? write.infoCont : darkWrite.infoCont}>
                        <Text style={theme === 'light' ? write.infoContTitle : darkWrite.infoContTitle}>Status: </Text>
                        <Text style={theme === 'light' ? write.infoContText : darkWrite.infoContText}>{status}</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}