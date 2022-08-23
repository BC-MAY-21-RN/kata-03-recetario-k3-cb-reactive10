//Importacion del contenedor de navegacion 
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from 'expo-status-bar';
import { Colors } from './src/Styles';

//Importaciones de pantallas(screens)
import { Main, RecipeDetail } from "./src/screens"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main' screenOptions={{ header: () => null, gestureEnabled: true }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
      </Stack.Navigator>
      <StatusBar backgroundColor={Colors.primary} style="light" />
    </NavigationContainer>
  );
}



