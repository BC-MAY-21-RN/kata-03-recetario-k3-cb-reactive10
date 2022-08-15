import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'

export const Card = () => {
  return (
    <View>
      <Image
      style={styles.image}
      source={require('../assets/img/Taco.jpg')}
      />
      <Text style={{color:'white'}}>Estamos en la CARD</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  },
  image:{
    width:120,
    height: 100,
    borderRadius:4
  }
})

