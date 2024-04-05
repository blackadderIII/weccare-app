import React, { useContext } from 'react'
import { FlatList, View, Text } from 'react-native'

// styling
import { cards, darkCards } from '../styles/cards'

// components
import HeaderComponent from '../components/headerComponent'
import CardFile from '../components/cardFile'
import { ThemeContext } from '../utils/theme'

export default function Cards() {

    const { theme } = useContext(ThemeContext)

    const cardsData = [
        {
            title: 'CC-2436310',
            date: 'January 20, 2024',
        },
        {
            title: 'CC-2436310',
            date: 'January 20, 2024',
        },
        {
            title: 'CC-2436310',
            date: 'January 20, 2024',
        },
        {
            title: 'CC-2436310',
            date: 'January 20, 2024',
        },
        {
            title: 'CC-2436310',
            date: 'January 20, 2024',
        },
    ]

    const renderItem = ({ item }) => (
        <CardFile
            theme={theme}
            careCardNo={item.title ? item.title : item.id}
            date={item.date}
        />
    );

    return (
        <View style={theme === 'light' ? cards.main : darkCards.main}>
            <HeaderComponent
                title={'Pending Cards'}
            />
            <FlatList
                data={cardsData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                style={theme === 'light' ? cards.flatListContainer : darkCards.flatListContainer}
                numColumns={3}
            />
        </View>
    )
}