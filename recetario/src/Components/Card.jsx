import { View, Text,Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { globalStyles } from '../Styles/GlobalStyle'

export const Card = () => {
  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
      source={require('../assets/img/Taco.jpg')}
      />
      <Text style={globalStyles.simpleTitle}>Treding</Text>
      <Text style={globalStyles.productName}>Tacos</Text>

      <View style={styles.containerScrollView}>
        <Text style={globalStyles.description}>Ingredients
          <Text> for 1 serving</Text>
        </Text>
        <ScrollView> 
          <Text style={globalStyles.ingredients}><Text>Tortilla</Text> <Text>1 Tortilla</Text></Text>
          <Text style={globalStyles.ingredients}>Carne</Text>
          <Text style={globalStyles.ingredients}>Cilantro</Text>
          <Text style={globalStyles.ingredients}>Cebolla</Text> 
          <Text style={globalStyles.ingredients}>Salsa</Text>
          <Text style={globalStyles.ingredients}>Limoncito</Text>
        </ScrollView>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  containerScrollView:{
    flex: 1,
    // flexDirection: 'column',
    marginTop: 30
  },
  container:{
    width: '100%',
    height: '100%'
  },
  image:{
    width: '100%',
    height: 380,
    borderRadius:4,
    marginTop: 0
  }
})

