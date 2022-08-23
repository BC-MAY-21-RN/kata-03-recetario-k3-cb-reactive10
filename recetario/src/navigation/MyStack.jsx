import { View, Text } from 'react-native'
import React from 'react'
//Importacion del contenedor de navegacion 
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from 'expo-status-bar';
import { Colors } from '../Styles/Colors';

//Importaciones de pantallas(screens)
import { Main, RecipeDetail } from "../screens"

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Main' screenOptions={{ header: () => null, gestureEnabled: true }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
    </Stack.Navigator>
    <StatusBar backgroundColor={Colors.primary} style="light" />
  </NavigationContainer>
  )
}

export default MyStack