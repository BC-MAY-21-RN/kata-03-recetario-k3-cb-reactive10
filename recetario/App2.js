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
  