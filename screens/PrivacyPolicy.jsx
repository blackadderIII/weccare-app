import React, { useContext } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

// styling
import { terms, darkTerms } from '../styles/terms'

// components
import HeaderComponent from '../components/headerComponent'

// utils
import { ThemeContext } from '../utils/theme'

export default function PrivacyPolicy() {

    const { theme } = useContext(ThemeContext)

    const navigation = useNavigation()

    return (
        <View style={theme === 'light' ? terms.main : darkTerms.main}>
            <HeaderComponent
                onPress={() => navigation.goBack()}
                theme={theme}
                title={'Privacy Policy'}
            />
            <ScrollView style={theme === 'light' ? terms.container : darkTerms.container} contentContainerStyle={{ alignItems: 'center' }}>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>

                    <Text style={theme === 'light' ? terms.text : darkTerms.text}>
                        As a company, we take your privacy using all our
                        product seriously. This Privacy Policy is in line
                        with the use of the Care Card app and its outlines
                        the types of personal information the app collects,
                        how we use it, and how we protect it. By using the Care
                        Card app, you consent to the terms of this Privacy Policy.
                    </Text>

                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Information We Collect</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Text style={theme === 'light' ? terms.text : darkTerms.text}>
                            When you use the Care Card app, we may collect certain
                            personal information from you, such as your name, department, and
                            phone number. We may also collect information about
                            the feedback and complaints you submit through the app.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>How We Use Your Information</Text>
                    <Text style={theme === 'light' ? terms.text : darkTerms.text}>
                        We use the personal information we collect from you to provide you
                        with the services of the Care Card app. Specifically,
                        we use your information to:
                    </Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            Forward feedback and complaints to the appropriate
                            body within the company to take care of the issue
                        </Text>
                    </View>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            For other purposes that are consistent with the reason for
                            which it was collected, or with your consent
                        </Text>
                    </View>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            Track the progress of the feedback and complaints you submit through the app
                        </Text>
                    </View>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            Notify you of updates on the status of your feedback and complaints
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Sharing your Information</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Text style={theme === 'light' ? terms.text : darkTerms.text}>
                            We do not share your personal information with
                            any third parties except as required by law or
                            with your consent. We may share your information
                            with our service providers who assist us in providing
                            the services of the Care Card app. These service
                            providers are required to protect your
                            personal information in a manner consistent with this Privacy Policy.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Data Security</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Text style={theme === 'light' ? terms.text : darkTerms.text}>
                            We take appropriate measures to protect the personal information
                            we collect from you against loss, theft, and unauthorized
                            access, disclosure, or modification. We use industry-standard
                            security measures, such as encryption and firewalls, to
                            protect your personal information.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Data Retention</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Text style={theme === 'light' ? terms.text : darkTerms.text}>
                            We will only retain your personal information
                            for as long as necessary to fulfil the purposes
                            for which it was collected, or as required by law.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Your Rights</Text>
                    <Text style={theme === 'light' ? terms.text : darkTerms.text}>
                        You have the right to access, correct, or delete your personal
                        information that we have collected from you. If you wish to
                        exercise any of these rights, please contact us at
                    </Text>
                    <Text style={theme === 'light' ? terms.textlink : darkTerms.textlink} >
                        Email: hse@wayoeltd.com
                    </Text>
                    <Text style={theme === 'light' ? terms.textlink : darkTerms.textlink}>
                        Tel: (+233) 50 144 0385
                    </Text>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Changes to these Policies</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Text style={theme === 'light' ? terms.text : darkTerms.text}>
                            We may update this Privacy Policy from time to time.
                            Any changes will be effective immediately upon posting
                            the revised Privacy Policy on the Care Card app.
                            continued use of the Care Card app after the revised
                            Privacy Policy is posted constitutes your agreement
                            to the revised Privacy Policy.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.spacer : darkTerms.spacer}></View>

            </ScrollView>
        </View>
    )
}