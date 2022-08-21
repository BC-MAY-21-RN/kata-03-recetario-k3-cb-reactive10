import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Switch } from 'react-native';
//import Main from './src/Components/Main'
import { Card } from './src/Components/Card.jsx'
//import { ThemeContext } from "./src/Context/ThemeContext.jsx";
import { globalStyles } from './src/Styles/GlobalStyle';
import { Colors } from './src/Styles/Colors';

import { Main, RecipeDetail } from "./src/screens"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



