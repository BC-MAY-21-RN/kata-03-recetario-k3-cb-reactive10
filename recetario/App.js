import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import  Main  from  './src/Components/Main'
import {Card} from './src/Components/Card.jsx'
import { globalStyles } from './src/Styles/GlobalStyle';
import { Colors } from './src/Styles/Colors';

export default function App() {
  return (
    <View style={globalStyles.screenContainer}>
      {/* <Text style={globalStyles.title}>TREDING</Text> */}
      {/* <Text style={globalStyles.title}>RECENT</Text> */}
      <Main /> 
      <StatusBar backgroundColor={Colors.primary} style='light' />
    </View>
  );
}

