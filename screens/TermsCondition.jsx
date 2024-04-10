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

export default function TermsCondition() {

    const { theme } = useContext(ThemeContext)

    const navigation = useNavigation()

    return (
        <View style={theme === 'light' ? terms.main : darkTerms.main}>
            <HeaderComponent
                onPress={() => navigation.goBack()}
                theme={theme}
                title={'Terms & Conditions'}
            />
            <ScrollView style={theme === 'light' ? terms.container : darkTerms.container} contentContainerStyle={{ alignItems: 'center' }}>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Acceptance of Terms</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            Welcome to the Care Card digital system.
                            By using this app, you acknowledge that
                            you have read and understood these terms
                            and conditions and agree to be bound by
                            them. If you do not agree with these terms
                            and conditions, please do not use this system.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Use of the Care Card Digital System</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            The Care Card app is designed to allow
                            members of the company to provide feedbacks,
                            complaints, and suggestions, as well as
                            commendations for good actions. You are
                            solely responsible for the accuracy of
                            the content you submit.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Prohibited Conduct</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            By using the Care Card app, you agree not to use
                            the system for any unlawful purpose or in any way
                            that could damage the company’s reputation or
                            interfere with the use of the system by others.
                            You also agree not to post any content that is
                            defamatory, harassing, discriminatory, or otherwise
                            objectionable. The Care Card app must only be used for
                            its intended purpose and nothing else.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Privacy</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            The Care Card app collects personal information
                            such as your name, contact details and department
                            in order to submit your feedbacks to the company.
                            By using the Care Card app, you agree to the collection
                            and use of your personal information in accordance with
                            the company's privacy policy as it deems fit.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Intellectual Property</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            All intellectual property rights in the Care Card app,
                            including but not limited to the design, software, database
                            and content, are owned by the company. You may not use any
                            part of the Care Card digital system for commercial or
                            personal purposes without the company's prior written consent.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Limitation of Liability</Text>
                    <Text style={theme === 'light' ? terms.text : darkTerms.text}>
                        The company guarantees the safe use of the Care Card app
                        from malicious attacks and damages whiles using the app
                        for its intended purpose. Hence, if the system is used out
                        of its scope and purpose,
                    </Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            The company won’t be liable for any malicious attacks
                        </Text>
                    </View>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            To the extent permitted by law, the company will not be
                            liable for any direct, indirect, incidental, or consequential
                            damages arising from or in connection with the use of the Care Card app.
                        </Text>
                    </View>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            You agree to indemnify and hold the organization harmless
                            from any claims, losses, or damages, including legal fees,
                            arising from your use of the app or any breach of these terms
                            and conditions.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Modification of Terms</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            The company may modify these Terms and Conditions at
                            any time, and such modifications will be effective
                            immediately upon updating the on the Care Card app.
                            Your continuous use of the Care Card app after any
                            modification constitutes your acceptance of the modified
                            Terms and Conditions.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Governing Law</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            These Terms and Conditions are governed by and construed
                            in accordance with the Constitution of Ghana.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.subHeading : darkTerms.subHeading}>Entire Agreement</Text>
                    <View style={theme === 'light' ? terms.textSection : darkTerms.textSection}>
                        <Entypo
                            name="dot-single"
                            size={24}
                            style={theme === 'light' ? terms.bulletStyle : darkTerms.bulletStyle}
                        />
                        <Text style={theme === 'light' ? terms.textStyle : darkTerms.textStyle}>
                            These Terms and Conditions constitute the entire
                            agreement between you and the company with respect
                            to the use of the Care Card app.
                        </Text>
                    </View>
                </View>

                <View style={theme === 'light' ? terms.section : darkTerms.section}>
                    <Text style={theme === 'light' ? terms.text : darkTerms.text}>
                        If you have any questions or concerns about these
                        Terms and Conditions, please contact the HSE Manager;
                    </Text>
                    <Text style={theme === 'light' ? terms.textlink : darkTerms.textlink} >
                        Email: hse@wayoeltd.com
                    </Text>
                    <Text style={theme === 'light' ? terms.textlink : darkTerms.textlink}>
                        Tel: (+233) 50 144 0385
                    </Text>
                </View>

                <View style={theme === 'light' ? terms.spacer : darkTerms.spacer}></View>

            </ScrollView>
        </View>
    )
}