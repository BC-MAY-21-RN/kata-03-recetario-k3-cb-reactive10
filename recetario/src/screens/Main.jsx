import * as React from 'react'
import { View, Text, Button } from 'react-native'

export const Main = ({ navigation }) => {
    return (
        <View>
            <Text>Pantalla principal</Text>
            <Button
                title='Ir a detalles'
                onPress={() => navigation.navigate('RecipeDetail')}
            />
        </View>
    )
}
