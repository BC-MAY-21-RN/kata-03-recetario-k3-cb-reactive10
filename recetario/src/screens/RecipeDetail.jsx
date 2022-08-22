import * as React from 'react';
import { Text, Button } from 'react-native';
import { DefaultLayout } from "../Components";

export const RecipeDetail = ({ route, navigation }) => {
    const { recipe } = route.params

    return (
        <DefaultLayout>
            <Button
                title='Atras'
                onPress={() => navigation.navigate('Main')}
            />
            <Text>{recipe.title}</Text>
        </DefaultLayout>
    )
}

