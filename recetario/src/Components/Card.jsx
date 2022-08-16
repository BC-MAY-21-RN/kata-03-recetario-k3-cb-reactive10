import { View, Text,Image, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { globalStyles } from '../Styles/GlobalStyle'

export const Card = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/img/Taco.jpg')} />

      <Text style={globalStyles.simpleTitle}>Treding</Text>
      <Text style={globalStyles.productName}>Tacos</Text>

      <View style={styles.containerScrollView}>
        <Text style={globalStyles.description}>Ingredients
          <Text> for 1 serving</Text>
        </Text>
        <ScrollView> 
          <View style={globalStyles.ingredients}> 
          <Text style={globalStyles.text}>Meat</Text> 
          <Text style={globalStyles.text}>200gm</Text>
          </View>
          <View style={globalStyles.ingredients}> 
          <Text style={globalStyles.text}>Cilantro</Text> 
          <Text style={globalStyles.text}>A handful</Text>
          </View>
          <View style={globalStyles.ingredients}> 
          <Text style={globalStyles.text}>Onion</Text> 
          <Text style={globalStyles.text}>A handful</Text>
          </View>
          <View style={globalStyles.ingredients}> 
          <Text style={globalStyles.text}>Beans</Text> 
          <Text style={globalStyles.text}>1 pbsp</Text>
          </View>
          <View style={globalStyles.ingredients}> 
          <Text style={globalStyles.text}>Lime</Text> 
          <Text style={globalStyles.text}>1 squeeze</Text>
          </View>
          <View style={globalStyles.ingredients}> 
          <Text style={globalStyles.text}>Salsa</Text> 
          <Text style={globalStyles.text}>1 pbsp</Text>
          </View>
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
    height: '100%',
  },
  image:{
    width: '100%',
    height: 380,
    borderRadius:4,
    marginTop: 0,
    opacity: .5
  }
})

