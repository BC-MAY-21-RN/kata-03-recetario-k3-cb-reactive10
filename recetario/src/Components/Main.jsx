import { View, Text, StyleSheet, Image, ScrollView, Switch } from "react-native";
import React,{useState} from "react";
import Search from "./Search";
import { FontAwesome } from "@expo/vector-icons";
import { globalStyles } from "../Styles/GlobalStyle";
import { Colors } from "../Styles/Colors";


export default function Main() {
  
  return (
    <View style={style.mainContainer}>
      <Search style={globalStyles.searchBarContainer} />

      <ScrollView>

      <View style={style.themeContainer}>
        <FontAwesome
          name="moon-o"
          size={38}
          color="white"
          style={style.darkTheme}
          
        />

        <Text style={style.textTheme}>Normal mode</Text>
      </View>
      <Text style={style.headings}>Trending</Text>
      <View style={style.listOfRecipeContainer}>
        <View style={style.recipeBox}>
          <ScrollView horizontal style={{ width: "100%", height: 200}}>
            
            {/* Falta poner texto aqui mero */}
          <View style={{ width: 110, height: 157}}>
            <Image
              source={require("../assets/img/Taco.jpg")}
              style={style.image}
            /> 
             <Text style={{color:'white', fontSize: 20, padding: 17, textAlign: 'center', fontWeight: 'bold'}}>Taco</Text>
          </View>

          <View style={{ width: 110, height: 157, marginLeft: 30}}>
            <Image
              source={require("../assets/img/Taco.jpg")}
              style={style.image}
            /> 
             <Text style={{color:'white', fontSize: 20, padding: 17, textAlign: 'center', fontWeight: 'bold'}}>Taco</Text>
          </View>

          <View style={{ width: 110, height: 157, marginLeft: 30}}>
            <Image
              source={require("../assets/img/Taco.jpg")}
              style={style.image}
            /> 
             <Text style={{color:'white', fontSize: 20, padding: 17, textAlign: 'center', fontWeight: 'bold'}}>Taco</Text>
          </View>

          <View style={{ width: 110, height: 157, marginLeft: 30}}>
            <Image
              source={require("../assets/img/Taco.jpg")}
              style={style.image}
            /> 
             <Text style={{color:'white', fontSize: 20, padding: 17, textAlign: 'center', fontWeight: 'bold'}}>Taco</Text>
          </View>

          <View style={{ width: 110, height: 157, marginLeft: 30}}>
            <Image
              source={require("../assets/img/Taco.jpg")}
              style={style.image}
            /> 
             <Text style={{color:'white', fontSize: 20, padding: 17, textAlign: 'center', fontWeight: 'bold'}}>Taco</Text>
          </View>
           
          </ScrollView>
        </View>
        <Text style={style.headings}>Recent</Text>
      </View>
      {/* Second part */}
      <View style={style.secondListOfRecipeContainer}>
        <View style={style.secondRecipeBox}>
          <ScrollView horizontal style={{ width: "100%" }}>
            <Image
              source={require("../assets/img/Taco.jpg")}
              style={{ width: 160, height: 228 }}
            />
          </ScrollView>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
  recipeBox: {
    width: "90%",
    height: 165,
    marginLeft: 20,
  },
  secondListOfRecipeContainer:{
    width: "90%",
    height: 228,
    marginLeft: 20,
  },
  darkTheme: {
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 15,
  },
  textTheme: {
    color: Colors.ligth,
    marginLeft: 10,
    fontWeight: "bold",
  },
  themeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 9,
  },
  headings: {
    fontSize: 50,
    color: Colors.secondary,
    marginLeft: 10,
    marginBottom: 15,
    fontWeight: '600'
  },
});
