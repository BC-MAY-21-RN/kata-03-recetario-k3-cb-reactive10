import * as React from 'react'
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export const ListItem = ({ id, uri, title, large = false, navigation, item }) => {
    return (
        <TouchableOpacity
            key={id}
            style={large ? style.itemContainer_large : style.itemContainer}
            onPress={() => navigation.navigate("RecipeDetail", {
                recipe: item
            })}
        >
            <Image
                source={{ uri: uri }}
                style={large ? style.image_large : style.image}
            />
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    itemContainer: {
        width: 110,
        height: 157,
        margin: 10
    },
    itemContainer_large: {
        width: 160,
        height: 228,
        margin: 10
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 7,
    },
    image_large: {
        width: '100%',
        height: '85%',
        borderRadius: 9,
    },
    title: {
        color: 'white',
        padding: 4,
        fontSize: 18,
        textAlign: 'center',
    }
})

