import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { cards, darkCards } from '../styles/cards'

import HeaderComponent from '../components/headerComponent'
import CardFile from '../components/cardFile'

import { ThemeContext } from '../utils/theme'
import { errorToast } from '../utils/toasts'
import { color } from '../utils/color'
import { api } from '../utils/api'

import empty from '../assets/icons/empty.png'

export default function Cards() {

    const { theme } = useContext(ThemeContext)

    const navigation = useNavigation()
    const route = useRoute()

    const { email, status } = route.params

    const [isLoading, setIsLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    const [cardsData, setCardsData] = useState()

    const fetchCards = async () => {
        if (status === 'Pending') {
            try {
                const fetchPendingCards = await fetch(`${api}:3000/getPendingCards/${email}`)
                const response = await fetchPendingCards.json()

                if (response.message === 'error executing query') {
                    setIsLoading(false)
                    setIsEmpty(true)
                    errorToast("Can't reach servers. Please try again later")
                    return
                }

                if (response.message === 'empty') {
                    setIsLoading(false)
                    setIsEmpty(true)
                    return
                }

                setIsLoading(false)
                setCardsData(response.pendingCards)
                return

            }
            catch (error) {
                console.log(`error fetching ${status} cards`, error)
                errorToast('An error occured. Please try again later.')
                return
            }
        }

        else if (status === 'Completed') {
            try {
                const fetchCompletedCards = await fetch(`${api}:3000/getCompletedCards/${email}`)
                const response = await fetchCompletedCards.json()

                if (response.message === 'error executing query') {
                    setIsLoading(false)
                    setIsEmpty(true)
                    errorToast("Can't reach servers. Please try again later")
                    return
                }

                if (response.message === 'empty') {
                    setIsLoading(false)
                    setIsEmpty(true)
                    return
                }

                setIsLoading(false)
                setCardsData(response.completedCards)
                return

            }
            catch (error) {
                console.log(`error fetching ${status} cards`, error)
                errorToast('An error occured. Please try again later.')
                return
            }
        }

        else if (status === 'Uncompleted') {

            try {
                const fetchUncompletedCards = await fetch(`${api}:3000/getUncompletedCards/${email}`)
                const response = await fetchUncompletedCards.json()

                if (response.message === 'error executing query') {
                    setIsLoading(false)
                    setIsEmpty(true)
                    errorToast("Can't reach servers. Please try again later")
                    return
                }

                if (response.message === 'empty') {
                    setIsLoading(false)
                    setIsEmpty(true)
                    return
                }

                setIsLoading(false)
                setCardsData(response.uncompletedCards)
                return

            }
            catch (error) {
                console.log(`error fetching ${status} cards`, error)
                errorToast('An error occured. Please try again later.')
                return
            }
        }
    }

    useEffect(() => {
        fetchCards()
    }, [])

    const formatDate = (dateString) => {
        const newDate = new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        return newDate
    };

    const renderItem = ({ item }) => (
        <CardFile
            onPress={() => navigation.navigate('viewCard', { info: item })}
            theme={theme}
            careCardNo={item.cardTitle ? item.cardTitle : item.cardID}
            date={formatDate(item.dateAdded)}
        />
    );

    return (
        <View style={theme === 'light' ? cards.main : darkCards.main}>
            <HeaderComponent
                theme={theme}
                onPress={() => navigation.goBack()}
                title={`${status} Cards`}
            />
            {isLoading ?
                <View style={theme === 'light' ? cards.loadingContainer : darkCards.loadingContainer} >
                    <ActivityIndicator color={color.main} size={'large'} />
                </View> :
                (isEmpty ?
                    <View style={theme === 'light' ? cards.emptyContainer : darkCards.emptyContainer} >
                        <Image source={empty} style={theme === 'light' ? cards.emptyImg : darkCards.emptyImg} />
                        <Text style={theme === 'light' ? cards.emptyText : darkCards.emptyText}>Empty</Text>
                    </View> :
                    <FlatList
                        data={cardsData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        style={theme === 'light' ? cards.flatListContainer : darkCards.flatListContainer}
                        numColumns={3}
                    />
                )
            }
        </View>
    )
}