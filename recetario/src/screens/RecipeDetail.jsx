import * as React from 'react';
import { Text, Button } from 'react-native';
import { DefaultLayout } from "../Components";

export const RecipeDetail = ({ navigation }) => {
    return (
        <DefaultLayout>
            <Text>Detalles de la receta</Text>
            <Button
                title='Atras'
                onPress={() => navigation.navigate('Main')}
            />
        </DefaultLayout>
    )
}

