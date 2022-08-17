import { View, Text, TextInput } from 'react-native'
import { globalStyles } from '../Styles/GlobalStyle'
import React from 'react'

const Search = () => {
    return (
        <View style={globalStyles.containerView}>
            <View style={globalStyles.searchBarContainer}>
                <TextInput> Search </TextInput>
            </View>
        </View>
    )
}

export default Search

