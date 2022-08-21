import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const RecipeDetail = ({navigation}) => {
    return (
        <View>
            <Text>Detalles de la receta</Text>
            <Button
                title='Atras'
                onPress={() => navigation.goBack() }
            />
        </View>
    )
}

