import React from 'react'
import { FlatList, View, Text } from 'react-native'

// styling
import { cards } from '../styles/cards'

// components
import HeaderComponent from '../components/headerComponent'
import CardFile from '../components/cardFile'

export default function Cards() {

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
            careCardNo={item.title ? item.title : item.id}
            date={item.date}
        />
    );

    return (
        <View style={cards.main}>
            <HeaderComponent
                title={'Pending Cards'}
            />
            <FlatList
                data={cardsData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                style={cards.flatListContainer}
                numColumns={3}
            />
        </View>
    )
}