import * as React from 'react'

import { ListItem } from "./ListItem";
import { FlatList, Text, StyleSheet } from "react-native";



export const HorizontalList = ({ data, title, isLarge = false, navigation }) => {
    const renderItem = ({ item }) => (
        <ListItem
            id={item.id}
            uri={item.image}
            title={item.title}
            large={isLarge}
            navigation={navigation}
            item={item}
        />
    )

    return (
        <>
            <Text style={style.title}>{title}</Text>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
            />
        </>
    )
}

const style = StyleSheet.create({
    title:{
        marginLeft: 10,
        color: '#E2163E',
        fontSize: 24
    }
})