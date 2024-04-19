import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage'

// styling
import { home, darkHome } from '../styles/home'

// components
import Banner from '../components/banner'
import CarecardOverview from '../components/carecardOverview'
import RecentCard from '../components/recentCard'

// utils
import { api } from '../utils/api'
import { color } from '../utils/color'
import { ThemeContext } from '../utils/theme'
import { UserContext } from '../utils/user'
import { ProfilePictureContext } from '../utils/profilePicture';
import { horizontalScale, moderateScale } from '../utils/metrics'
import { errorToast } from '../utils/toasts'

// images
import defaultProfilePicture from '../assets/default.jpg'
import pendingBG from '../assets/banner/pending.png'
import completedBG from '../assets/banner/completed.png'
import uncompletedBG from '../assets/banner/uncompleted.png'

export default function Home() {

    const navigation = useNavigation()

    const { theme } = useContext(ThemeContext)
    const { user } = useContext(UserContext)
    const { profilePicture } = useContext(ProfilePictureContext)

    const [refreshing] = useState(false)

    const [pendingCards, setPendingCards] = useState(0)
    const [completedCards, setCompletedCards] = useState(0)
    const [uncompletedCards, setUncompletedCards] = useState(0)
    const [recentCards, setRecentCards] = useState()
    const [isRecentCardsEmpty, setIsRecentCardsEmpty] = useState(true)

    const getCards = async () => {
        try {
            const fetchCards = await fetch(`${api}/getCardAmount/${user.email}`)
            const response = await fetchCards.json()

            if (response.message === 'error executing query') {
                errorToast("Can't reach server now. Please try again later")
                return
            }

            setPendingCards(response.pendingCards)
            setCompletedCards(response.completedCards)
            setUncompletedCards(response.uncompletedCards)
            return

        }
        catch (error) {
            console.log('error fetching cards', error)
            return
        }
    }

    const getRecentCards = async () => {
        try {
            const fetchRecentCards = await fetch(`${api}/getRecentCards/${user.email}`)
            const response = await fetchRecentCards.json()

            if (response.message === 'error executing query') {
                errorToast("Can't reach server now. Please try again later")
                return
            }

            if (response.message === 'empty') {
                setIsRecentCardsEmpty(true)
                return
            }

            setRecentCards(response.recentCards)
            setIsRecentCardsEmpty(false)
            return
        }
        catch (error) {
            console.log('error fetching recent cards', error)
            return
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            getCards()
            getRecentCards()
        }, [])
    )

    const formatDate = (dateString) => {
        const newDate = new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        return newDate
    };

    const refresh = () => {
        getCards()
        getRecentCards()
        return
    }

    return (
        <>
            <View style={theme === 'light' ? home.main : darkHome.main}>
                <View style={theme === 'light' ? home.header : darkHome.header}>
                    <Text style={theme === 'light' ? home.headerText : darkHome.headerText}>Hi, {user.firstname}</Text>
                    <TouchableOpacity style={theme === 'light' ? home.headerImgContainer : darkHome.headerImgContainer} activeOpacity={.7} onPress={() => navigation.navigate('settings')}>
                        <Image source={!profilePicture ? defaultProfilePicture : { uri: profilePicture }} style={theme === 'light' ? home.headerImg : darkHome.headerImg} />
                    </TouchableOpacity>
                </View>

                <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}>
                    <Banner />

                    <Text style={theme === 'light' ? home.titleText : darkHome.titleText}>Care Card Summary</Text>

                    <View style={theme === 'light' ? home.summaryContainer : darkHome.summaryContainer}>
                        <ScrollView horizontal={true} alwaysBounceHorizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                            <View style={{ width: horizontalScale(10) }}></View>
                            <CarecardOverview
                                onPress={() => navigation.navigate('cards', { status: 'Pending', email: user.email })}
                                theme={theme}
                                imgSource={pendingBG}
                                color={'#ff841f'}
                                iconName={'clock'}
                                amount={pendingCards}
                                tabName={'Pending Cards'}
                            />
                            <CarecardOverview
                                onPress={() => navigation.navigate('cards', { status: 'Completed', email: user.email })}
                                theme={theme}
                                imgSource={completedBG}
                                color={'#00c993'}
                                iconName={'check-circle'}
                                amount={completedCards}
                                tabName={'Completed Cards'}
                            />
                            <CarecardOverview
                                onPress={() => navigation.navigate('cards', { status: 'Uncompleted', email: user.email })}
                                theme={theme}
                                imgSource={uncompletedBG}
                                color={color.red}
                                iconName={'x-circle'}
                                amount={uncompletedCards}
                                tabName={'Uncompleted Cards'}
                            />
                            <View style={{ width: horizontalScale(10) }}></View>
                        </ScrollView>
                    </View>

                    <Text style={theme === 'light' ? home.titleText : darkHome.titleText}>Recent Cards</Text>

                    <View style={theme === 'light' ? home.recentCardContainer : darkHome.recentCardContainer}>
                        {isRecentCardsEmpty ?
                            <View style={{ height: moderateScale(300) }}>
                                <Text style={theme === 'light' ? home.emptyText : darkHome.emptyText}>You haven't written a care card yet</Text>
                            </View> :
                            <ScrollView>
                                {
                                    recentCards.map((item, index) => {
                                        return (
                                            <RecentCard
                                                key={index}
                                                onPress={() => navigation.navigate('viewCard', { info: item })}
                                                theme={theme}
                                                cc={item.cardTitle ? item.cardTitle : item.cardID}
                                                date={formatDate(item.dateAdded)}
                                                status={item.status}
                                            />
                                        )
                                    })
                                }
                            </ScrollView>
                        }
                    </View>

                </ScrollView>
            </View>

            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('writeCard', { user: user })} style={theme === 'light' ? home.writeButton : darkHome.writeButton}>
                <MaterialCommunityIcons name='file-plus-outline' style={theme === 'light' ? home.writeIcon : darkHome.writeIcon} />
            </TouchableOpacity>

        </>
    )
}