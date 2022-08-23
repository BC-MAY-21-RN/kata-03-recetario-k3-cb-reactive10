import * as React from 'react';
import { Text, StyleSheet, Image, View, FlatList } from 'react-native';
import { DefaultLayout } from "../Components";
import { globalStyles } from "../Styles"

export const RecipeDetail = ({ route, navigation }) => {
    const { recipe } = route.params

    const renderItem = ({ item }) => (

        <View style={globalStyles.ingredients}>
            <Text style={globalStyles.text}> {item.ingredient}</Text>
            <Text style={globalStyles.text}>{item.size}</Text>
        </View>
    )

    return (
        <DefaultLayout>
            <Image style={styles.image} source={{ uri: recipe.image }} />
            <Text style={globalStyles.simpleTitle}>{recipe.category}</Text>
            <Text style={globalStyles.productName}>{recipe.title}</Text>
            
            <View style={styles.containerScrollView}>
                <Text style={globalStyles.description}>Ingredients
                    <Text> for {recipe.servings} serving</Text>
                </Text>
                <FlatList
                    data={recipe.ingredients}
                    renderItem={renderItem}
                />
            </View>
        </DefaultLayout>
    )
}

const styles = StyleSheet.create({
    containerScrollView: {
        flex: 1,
        marginTop: 30
    },
    container: {
        width: '100%',
        height: '100%'
    },
    image: {
        width: '100%',
        height: 380,
        borderRadius: 4,
        marginTop: 0,
        opacity: .5
    },
    azul: {
        display: 'flex',
        backgroundColor: "blue",
        marginBottom: 10,
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    }


})
