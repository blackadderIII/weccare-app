import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

// styling
import { home, darkHome } from '../styles/home'

// components
import Banner from '../components/banner'
import CarecardOverview from '../components/carecardOverview'
import RecentCard from '../components/recentCard'

// utils
import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme'
import { horizontalScale } from '../utils/metrics'

// images
import pp from '../assets/default.jpg'
import pendingBG from '../assets/banner/pending.png'
import completedBG from '../assets/banner/completed.png'
import uncompletedBG from '../assets/banner/uncompleted.png'

export default function Home() {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <View style={theme === 'light' ? home.main : darkHome.main}>
                <View style={theme === 'light' ? home.header : darkHome.header}>
                    <Text style={theme === 'light' ? home.headerText : darkHome.headerText}>Hi, Paul</Text>
                    <TouchableOpacity style={theme === 'light' ? home.headerImgContainer : darkHome.headerImgContainer} activeOpacity={.7} onPress={() => toggleTheme()}>
                        <Image source={pp} style={theme === 'light' ? home.headerImg : darkHome.headerImg} />
                    </TouchableOpacity>
                </View>

                <ScrollView refreshControl={''}>
                    <Banner />

                    <Text style={theme === 'light' ? home.titleText : darkHome.titleText}>Care Card Summary</Text>

                    <View style={theme === 'light' ? home.summaryContainer : darkHome.summaryContainer}>
                        <ScrollView horizontal={true} alwaysBounceHorizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                            <View style={{ width: horizontalScale(10) }}></View>
                            <CarecardOverview
                                theme={theme}
                                imgSource={pendingBG}
                                color={'#ff841f'}
                                iconName={'clock'}
                                amount={'25'}
                                tabName={'Pending Cards'}
                            />
                            <CarecardOverview
                                theme={theme}
                                imgSource={completedBG}
                                color={'#00c993'}
                                iconName={'check-circle'}
                                amount={'40'}
                                tabName={'Completed Cards'}
                            />
                            <CarecardOverview
                                theme={theme}
                                imgSource={uncompletedBG}
                                color={color.red}
                                iconName={'x-circle'}
                                amount={'15'}
                                tabName={'Uncompleted Cards'}
                            />
                            <View style={{ width: horizontalScale(10) }}></View>
                        </ScrollView>
                    </View>

                    <Text style={theme === 'light' ? home.titleText : darkHome.titleText}>Recent Cards</Text>

                    <View style={theme === 'light' ? home.recentCardContainer : darkHome.recentCardContainer}>
                        <ScrollView>
                            <RecentCard
                                theme={theme}
                                cc={'CC-9786542'}
                                date={'March 19, 2024'}
                                status={'Pending'}
                            />
                            <RecentCard
                                theme={theme}
                                cc={'CC-9786542'}
                                date={'March 19, 2024'}
                                status={'Pending'}
                            />
                            <RecentCard
                                theme={theme}
                                cc={'CC-9786542'}
                                date={'March 19, 2024'}
                                status={'Pending'}
                            />
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity activeOpacity={.7}>
                <View style={theme === 'light' ? home.writeButton : darkHome.writeButton}>
                    <MaterialCommunityIcons name='file-plus-outline' style={theme === 'light' ? home.writeIcon : darkHome.writeIcon} />
                </View>
            </TouchableOpacity>
        </>
    )
}