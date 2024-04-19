import React, { useContext } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

import { write, darkWrite } from '../styles/write'

import HeaderComponent from '../components/headerComponent'

import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme'
import { moderateScale } from '../utils/metrics'

export default function ViewCard() {

    const { theme } = useContext(ThemeContext)

    const navigation = useNavigation()
    const route = useRoute()

    const { info } = route.params

    const formatDate = (dateString) => {
        const newDate = new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        return newDate
    };

    return (
        <View style={theme === 'light' ? write.main : darkWrite.main}>
            <HeaderComponent
                theme={theme}
                onPress={() => navigation.goBack()}
                title={info.cardID}
            />
            <ScrollView style={theme === 'light' ? write.container : darkWrite.container} contentContainerStyle={{ alignItems: 'center' }}>

                {/* Part A */}
                <View style={theme === 'light' ? write.section : darkWrite.section}>
                    <Text style={theme === 'light' ? write.titleText : darkWrite.titleText}>Part A - General</Text>
                    <View style={theme === 'light' ? write.textInputContainer : darkWrite.textInputContainer}>
                        <Text style={theme === 'light' ? write.textInputTitle : darkWrite.textInputTitle}>Name of Observer</Text>
                        <TextInput
                            value={info.observerFirstname + ' ' + info.observerLastname}
                            editable={false}
                            style={theme === 'light' ? write.textInput : darkWrite.textInput}
                            selectionColor={"#0080006b"}
                            cursorColor={color.main}
                        />
                    </View>
                    <View style={theme === 'light' ? write.textInputContainer : darkWrite.textInputContainer}>
                        <Text style={theme === 'light' ? write.textInputTitle : darkWrite.textInputTitle}>Department</Text>
                        <TextInput
                            value={info.observerDepartment}
                            editable={false}
                            style={theme === 'light' ? write.textInput : darkWrite.textInput}
                            selectionColor={"#0080006b"}
                            cursorColor={color.main}
                        />
                    </View>
                    <View style={theme === 'light' ? write.textInputContainer : darkWrite.textInputContainer}>
                        <Text style={theme === 'light' ? write.textInputTitle : darkWrite.textInputTitle}>*Location</Text>

                        <View style={theme === 'light' ? write.locationHolder : darkWrite.locationHolder}>
                            <TouchableOpacity activeOpacity={.7} style={[theme === 'light' ? write.textInput : darkWrite.textInput, { width: '47%', padding: moderateScale(14), }]}>
                                <Text style={{ fontFamily: 'poppins', color: theme === 'light' ? '#222' : '#ddd' }}>{info.observerCountry}</Text>
                            </TouchableOpacity>

                            <TextInput
                                value={info.observerLocation}
                                style={[theme === 'light' ? write.textInput : darkWrite.textInput, { width: '47%', padding: moderateScale(12) }]}
                                selectionColor={"#0080006b"}
                                cursorColor={color.main}
                                editable={false}
                                placeholder='Your location'
                            />
                        </View>
                    </View>
                </View>

                {/* part B */}
                <View style={theme === 'light' ? write.section : darkWrite.section}>
                    <Text style={theme === 'light' ? write.titleText : darkWrite.titleText}>*Part B - Type of Observation</Text>
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn}>
                        {info.observationType === "Positive" ? (
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
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn}>
                        {info.observationType === "Substandard Hazard" ? (
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
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn}>
                        {info.observationType === "Improvement" ? (
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
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn} >
                        {info.peopleActs ? (
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
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn}>
                        {info.condition ? (
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
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn}>
                        {info.environmental ? (
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
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn}>
                        {info.assetsEquipment ? (
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
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn}>
                        {info.procedureSystem ? (
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
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn}>
                        {info.quality ? (
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
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn}>
                        {info.security ? (
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
                        value={info.description}
                        keyboardType='default'
                        multiline={true}
                        textAlignVertical='top'
                        selectionColor={'#0080006b'}
                        editable={false}
                        cursorColor={color.main}
                        style={theme === 'light' ? write.textInputMultiline : darkWrite.textInputMultiline}
                        placeholder='None...'
                        placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                    />
                </View>

                {/* part E */}
                <View style={theme === 'light' ? write.section : darkWrite.section}>
                    <Text style={theme === 'light' ? write.titleText : darkWrite.titleText}>Part E - Actions & Suggestions</Text>
                    <Text style={theme === 'light' ? write.descriptiveText : darkWrite.descriptiveText}>Were you able to correct the problem?</Text>
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn}>
                        {info.actionsTaken === "Yes" ? (
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
                    <Pressable style={theme === 'light' ? write.radioBtn : darkWrite.radioBtn}>
                        {info.actionsTaken === "No" ? (
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
                        value={info.suggestion}
                        keyboardType='default'
                        editable={false}
                        multiline={true}
                        selectionColor={'#0080006b'}
                        cursorColor={color.main}
                        textAlignVertical='top'
                        placeholder='None...'
                        placeholderTextColor={theme === 'light' ? '#0005' : '#fff5'}
                        style={theme === 'light' ? write.textInputMultiline : darkWrite.textInputMultiline}
                    />
                </View>

                {/* Card Details */}
                <View style={theme === 'light' ? write.cardInfo : darkWrite.cardInfo}>
                    <View style={theme === 'light' ? write.infoCont : darkWrite.infoCont}>
                        <Text style={theme === 'light' ? write.infoContTitle : darkWrite.infoContTitle}>Card No: </Text>
                        <Text style={theme === 'light' ? write.infoContText : darkWrite.infoContText}>{info.cardID}</Text>
                    </View>
                    <View style={theme === 'light' ? write.infoCont : darkWrite.infoCont}>
                        <Text style={theme === 'light' ? write.infoContTitle : darkWrite.infoContTitle}>Date Submitted: </Text>
                        <Text style={theme === 'light' ? write.infoContText : darkWrite.infoContText}>{formatDate(info.dateAdded)}</Text>
                    </View>
                    <View style={theme === 'light' ? write.infoCont : darkWrite.infoCont}>
                        <Text style={theme === 'light' ? write.infoContTitle : darkWrite.infoContTitle}>Status: </Text>
                        <Text style={theme === 'light' ? write.infoContText : darkWrite.infoContText}>{info.status}</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}