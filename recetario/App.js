import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { globalStyles } from './src/Styles/GlobalStyle';
import { Colors } from './src/Styles/Colors';
import { Card } from './src/Components/Card';

export default function App() {
  return (
    <View style={globalStyles.screenContainer}>
      {/* <Text style={globalStyles.title}>TREDING</Text> */}
      {/* <Text style={globalStyles.title}>RECENT</Text> */}
      <Card/>
      <StatusBar backgroundColor={Colors.primary} style='light' />
    </View>
  );
}

