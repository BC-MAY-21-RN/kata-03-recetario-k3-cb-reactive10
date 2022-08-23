import * as React from 'react'
import { Text, Image, TouchableOpacity } from "react-native";
import { listItems } from '../Styles/listItemStyles';
export const ListItem = ({ id, uri, title, large = false, navigation, item }) => {
    return (
        <TouchableOpacity
            key={id}
            style={large ? listItems.itemContainer_large : listItems.itemContainer}
            onPress={() => navigation.navigate("RecipeDetail", {
                recipe: item
            })}
        >
            <Image
                source={{ uri: uri }}
                style={large ? listItems.image_large : listItems.image}
            />
            <Text style={listItems.title}>{title}</Text>
        </TouchableOpacity>
    )
}


