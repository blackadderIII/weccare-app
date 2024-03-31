import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

// styling
import { home } from '../styles/home'

// components
import Banner from '../components/banner'
import CarecardOverview from '../components/carecardOverview'

// utils
import { color } from '../utils/color'
import { horizontalScale } from '../utils/metrics'

// images
import pp from '../assets/default.jpg'
import pendingBG from '../assets/banner/pending.jpg'
import completedBG from '../assets/banner/completed.jpg'
import uncompletedBG from '../assets/banner/uncompleted.jpg'

export default function Home() {
    return (
        <View style={home.main}>
            <View style={home.header}>
                <Text style={home.headerText}>Hi, Paul</Text>
                <TouchableOpacity style={home.headerImgContainer} activeOpacity={.7}>
                    <Image source={pp} style={home.headerImg} />
                </TouchableOpacity>
            </View>

            <Banner />

            <Text style={home.titleText}>Care Card Summary</Text>

            <View style={home.summaryContainer}>
                <ScrollView horizontal={true} alwaysBounceHorizontal showsHorizontalScrollIndicator={false} >
                    <View style={{ width: horizontalScale(10) }}></View>
                    <CarecardOverview
                        imgSource={pendingBG}
                        // color={'#ff841f'}
                        color={'#ffffff'}
                        iconName={'clock'}
                        amount={'25'}
                        tabName={'Pending Cards'}
                    />
                    <CarecardOverview
                        imgSource={completedBG}
                        // color={'#00c993'}
                        color={'#ffffff'}
                        iconName={'check-circle'}
                        amount={'40'}
                        tabName={'Completed Cards'}
                    />
                    <CarecardOverview
                        imgSource={uncompletedBG}
                        // color={'#004ddb'}
                        color={'#ffffff'}
                        iconName={'x-circle'}
                        amount={'15'}
                        tabName={'Uncompleted Cards'}
                    />
                    <View style={{ width: horizontalScale(10) }}></View>
                </ScrollView>
            </View>

        </View>
    )
}