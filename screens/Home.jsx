import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

// styling
import { home } from '../styles/home'

// components
import Banner from '../components/banner'
import CarecardOverview from '../components/carecardOverview'
import RecentCard from '../components/recentCard'

// utils
import { color } from '../utils/color'
import { horizontalScale } from '../utils/metrics'

// images
import pp from '../assets/default.jpg'
import pendingBG from '../assets/banner/pending.png'
import completedBG from '../assets/banner/completed.png'
import uncompletedBG from '../assets/banner/uncompleted.png'

export default function Home() {
    return (
        <>
            <View style={home.main}>
                <View style={home.header}>
                    <Text style={home.headerText}>Hi, Paul</Text>
                    <TouchableOpacity style={home.headerImgContainer} activeOpacity={.7}>
                        <Image source={pp} style={home.headerImg} />
                    </TouchableOpacity>
                </View>

                <ScrollView refreshControl={''}>
                    <Banner />

                    <Text style={home.titleText}>Care Card Summary</Text>

                    <View style={home.summaryContainer}>
                        <ScrollView horizontal={true} alwaysBounceHorizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                            <View style={{ width: horizontalScale(10) }}></View>
                            <CarecardOverview
                                imgSource={pendingBG}
                                color={'#ff841f'}
                                iconName={'clock'}
                                amount={'25'}
                                tabName={'Pending Cards'}
                            />
                            <CarecardOverview
                                imgSource={completedBG}
                                color={'#00c993'}
                                iconName={'check-circle'}
                                amount={'40'}
                                tabName={'Completed Cards'}
                            />
                            <CarecardOverview
                                imgSource={uncompletedBG}
                                color={color.red}
                                iconName={'x-circle'}
                                amount={'15'}
                                tabName={'Uncompleted Cards'}
                            />
                            <View style={{ width: horizontalScale(10) }}></View>
                        </ScrollView>
                    </View>

                    <Text style={home.titleText}>Recent Cards</Text>

                    <View style={home.recentCardContainer}>
                        <ScrollView>
                            <RecentCard
                                cc={'CC-9786542'}
                                date={'March 19, 2024'}
                                status={'Pending'}
                            />
                            <RecentCard
                                cc={'CC-9786542'}
                                date={'March 19, 2024'}
                                status={'Pending'}
                            />
                            <RecentCard
                                cc={'CC-9786542'}
                                date={'March 19, 2024'}
                                status={'Pending'}
                            />
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity activeOpacity={.7}>
                <View style={home.writeButton}>
                    <MaterialCommunityIcons name='file-plus-outline' style={home.writeIcon} />
                </View>
            </TouchableOpacity>
        </>
    )
}