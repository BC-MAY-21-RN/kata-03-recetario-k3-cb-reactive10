import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Switch } from 'react-native';
import  Main  from  './src/Components/Main'
import {Card} from './src/Components/Card.jsx'
//import { ThemeContext } from "./src/Context/ThemeContext.jsx";
import { globalStyles } from './src/Styles/GlobalStyle';
import { Colors } from './src/Styles/Colors';

export default function App() {
  const [theme, setTheme] = useState(Colors.ligth)
  return (
    <View style={globalStyles.screenContainer}>
      {/* <Text style={globalStyles.title}>TREDING</Text> */}
      {/* <Text style={globalStyles.title}>RECENT</Text> */}
      
      <Main /> 
      {/* <Card/> */}
      <StatusBar backgroundColor={Colors.primary} style='light' />
    </View>
  );
}

