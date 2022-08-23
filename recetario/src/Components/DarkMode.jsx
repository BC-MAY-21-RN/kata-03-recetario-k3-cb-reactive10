import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

const DarkMode = () => {
  return (
    <View style={styles.mainContainer}>
     <Image  source={require('../assets/img/moon.png')} style={styles.moonIcon}/>
     <Text style={styles.innerText}>Normal mode</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row', 
        alignItems:'center'
    },
    moonIcon:{
        width: 40, 
        height: 40, 
        marginLeft: 15, 
        marginRight: 15
    },
    innerText:{
        fontWeight: 'bold', 
        color: 'white'
    }
})
export default DarkMode