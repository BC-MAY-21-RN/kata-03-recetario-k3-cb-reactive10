import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Switch } from 'react-native';
import  Main  from  './src/Components/Main'
import {Card} from './src/Components/Card.jsx'
import { globalStyles } from './src/Styles/GlobalStyle';
import { Colors } from './src/Styles/Colors';
import { ThemeContext } from "./src/Context/ThemeContext.jsx";

export default function App() {
  const [theme, setTheme] = useState(Colors.ligth)
  return (
    <ThemeContext.Provider value={theme}>
    <View style={theme === Colors.ligth ? globalStyles.screenContainer : [globalStyles.screenContainer,{backgroundColor:Colors.primary}]}>
      {/* <Text style={globalStyles.title}>TREDING</Text> */}
      {/* <Text style={globalStyles.title}>RECENT</Text> */}
      
      <Main /> 
      <Switch
        value={theme === Colors.ligth}
        onValueChange={() => setTheme (theme === Colors.ligth ? Colors.primary : Colors.ligth)}
        />
      <StatusBar backgroundColor={Colors.primary} style='light' />
    </View>
    </ThemeContext.Provider>
  );
}

