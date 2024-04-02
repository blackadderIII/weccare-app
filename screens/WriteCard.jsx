import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
// styling
import { write } from '../styles/write'

// component
import HeaderComponent from '../components/headerComponent'

// utils
import { color } from '../utils/color'
import { moderateScale } from '../utils/metrics'

export default function WriteCard() {

    const username = 'Paul Arthur'
    const department = 'IT'
    const [title, setTitle] = useState('')
    const [country, setCountry] = useState('Ghana')
    const [location, setLocation] = useState('')
    const [showCountries, setShowCountries] = useState(false)
    const [typeOfObservation, setTypeOfObservation] = useState('Positive')
    const [peopleActs, setPeopleActs] = useState(false)
    const [condition, setCondition] = useState(false)
    const [environmental, setEnvironmental] = useState(false)
    const [assetEquipment, setAssetEquipment] = useState(false)
    const [procedureSystem, setProcedureSystem] = useState(false)
    const [quality, setQuality] = useState(false)
    const [security, setSecurity] = useState(false)
    const [description, setDescription] = useState('')
    const [actions, setActions] = useState('')
    const [correctiveAction, setCorrectiveAction] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    return (
        <View style={write.main}>
            <HeaderComponent
                title={'Care Card'}
            />
            <ScrollView style={write.container} contentContainerStyle={{ alignItems: 'center' }}>

                <View style={write.section}>
                    <Text style={write.titleText}>Title</Text>
                    <View style={write.textInputContainer}>
                        <Text style={write.miniDescription}>
                            This is an optional feature that allows you to name your carecard making recognition quick and easy.{`\n`}
                        </Text>
                        <TextInput
                            value={title}
                            onChangeText={setTitle}
                            editable={true}
                            placeholder='eg. Care Card 1'
                            style={write.textInput}
                            selectionColor={"#0080006b"}
                            cursorColor={color.main}
                        />
                    </View>
                </View>

                {/* Part A */}
                <View style={write.section}>
                    <Text style={write.titleText}>Part A - General</Text>
                    <View style={write.textInputContainer}>
                        <Text style={write.textInputTitle}>Name of Observer</Text>
                        <TextInput
                            value={username}
                            editable={false}
                            style={write.textInput}
                            selectionColor={"#0080006b"}
                            cursorColor={color.main}
                        />
                    </View>
                    <View style={write.textInputContainer}>
                        <Text style={write.textInputTitle}>Department</Text>
                        <TextInput
                            value={department}
                            editable={false}
                            style={write.textInput}
                            selectionColor={"#0080006b"}
                            cursorColor={color.main}
                        />
                    </View>
                    <View style={write.textInputContainer}>
                        <Text style={write.textInputTitle}>*Location</Text>

                        <View style={write.locationHolder}>
                            <TouchableOpacity activeOpacity={.7} onPress={() => setShowCountries(!showCountries)} style={[write.textInput, { width: '47%', padding: moderateScale(14), }]}>
                                <Text style={{ fontFamily: 'poppins' }}>{country}</Text>
                            </TouchableOpacity>

                            <TextInput
                                value={location}
                                style={[write.textInput, { width: '47%', padding: moderateScale(12) }]}
                                selectionColor={"#0080006b"}
                                cursorColor={color.main}
                                placeholder='Your location'
                                onChangeText={setLocation}
                            />
                        </View>
                    </View>
                </View>

                {/* part B */}
                <View style={write.section}>
                    <Text style={write.titleText}>*Part B - Type of Observation</Text>
                    <Pressable style={write.radioBtn} onPress={() => setTypeOfObservation("Positive")}>
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
                        <Text style={write.radioText}>Positive</Text>
                    </Pressable>
                    <Pressable style={write.radioBtn} onPress={() => setTypeOfObservation("Substandard Hazard")}>
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
                        <Text style={write.radioText}>Substandard Hazard</Text>
                    </Pressable>
                    <Pressable style={write.radioBtn} onPress={() => setTypeOfObservation("Improvement")}>
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
                        <Text style={write.radioText}>Improvement</Text>
                    </Pressable>
                </View>

                {/* Part C */}
                <View style={write.section}>
                    <Text style={write.titleText}>*Part C - Observation</Text>
                    <Pressable style={write.radioBtn} onPress={() => setPeopleActs(!peopleActs)}>
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
                        <Text style={write.radioText}>People | Acts</Text>
                    </Pressable>
                    <Pressable style={write.radioBtn} onPress={() => setCondition(!condition)}>
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
                        <Text style={write.radioText}>Condition</Text>
                    </Pressable>
                    <Pressable style={write.radioBtn} onPress={() => setEnvironmental(!environmental)}>
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
                        <Text style={write.radioText}>Environmental</Text>
                    </Pressable>
                    <Pressable style={write.radioBtn} onPress={() => setAssetEquipment(!assetEquipment)}>
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
                        <Text style={write.radioText}>Asset | Equipment</Text>
                    </Pressable>
                    <Pressable style={write.radioBtn} onPress={() => setProcedureSystem(!procedureSystem)}>
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
                        <Text style={write.radioText}>Procedure | System</Text>
                    </Pressable>
                    <Pressable style={write.radioBtn} onPress={() => setQuality(!quality)}>
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
                        <Text style={write.radioText}>Quality</Text>
                    </Pressable>
                    <Pressable style={write.radioBtn} onPress={() => setSecurity(!security)}>
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
                        <Text style={write.radioText}>Security</Text>
                    </Pressable>
                </View>

                {/* part D */}
                <View style={write.section}>
                    <Text style={write.titleText}>*Part D - Description of Observation</Text>
                    <TextInput
                        value={description}
                        onChangeText={setDescription}
                        keyboardType='default'
                        multiline={true}
                        textAlignVertical='top'
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        style={write.textInputMultiline}
                        placeholder='Describe your observation'
                    />
                </View>

                {/* part E */}
                <View style={write.section}>
                    <Text style={write.titleText}>Part E - Actions & Suggestions</Text>
                    <Text style={write.descriptiveText}>Were you able to correct the problem?</Text>
                    <Pressable style={write.radioBtn} onPress={() => setActions("Yes")}>
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
                        <Text style={write.radioText}>Yes</Text>
                    </Pressable>
                    <Pressable style={write.radioBtn} onPress={() => setActions("No")}>
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
                        <Text style={write.radioText}>No</Text>
                    </Pressable>

                    <Text style={write.descriptiveText}>
                        Describe the corrective action taken, or your suggestion to prevent reoccurance.
                    </Text>
                    <TextInput
                        value={correctiveAction}
                        onChangeText={setCorrectiveAction}
                        keyboardType='default'
                        multiline={true}
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textAlignVertical='top'
                        placeholder='Your corrective action or suggestion'
                        style={write.textInputMultiline}
                    />
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={write.submitButton} activeOpacity={0.8} onPress={() => submit()}>
                    {isSubmitting ?
                        <ActivityIndicator color={'white'} /> :
                        <Text style={write.submitButtonText}>Submit</Text>
                    }
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}