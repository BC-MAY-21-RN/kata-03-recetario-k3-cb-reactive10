import * as React from 'react';
import { Text, StyleSheet, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { DefaultLayout } from "../Components";
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { globalStyles } from "../Styles"

export const RecipeDetail = ({ route, navigation: { goBack } }) => {
    const { recipe } = route.params

    const renderItem = ({ item }) => (

        <View style={globalStyles.ingredients}>
            <Text style={globalStyles.text}> {item.ingredient}</Text>
            <Text style={globalStyles.text}>{item.size}</Text>
        </View>
    )

    return (
        <DefaultLayout>
            <View style={{zIndex: 1, position: 'absolute', marginTop: 80, marginLeft: 20, flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
            <TouchableOpacity onPress={() => goBack()}>
            <AntDesign name="close" size={28} color="white"  />
            </TouchableOpacity>
         
            <View style={{flexDirection: 'row'}}>

            <EvilIcons style={{marginRight: 15}} name="share-apple" size={35} color="white" />
            
            <AntDesign name="hearto" size={24} color="white" />
            </View>
         
            </View>
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
    }
    
})
