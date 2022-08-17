import * as React from 'react';
import { Text, View, TextInput, StyleSheet, ViewPagerAndroidBase } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FontAwesome name="search" size={24} color="white" />
        <TextInput placeholder="Whant to you want to eat? " style={styles.textInput} />
        <FontAwesome name="microphone" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'dimgray',
    borderRadius: 6,
  },
  textInput: {
    paddingLeft: 10,
    flex: 1,
    height: 50,
  },
});


