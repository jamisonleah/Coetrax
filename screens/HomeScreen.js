import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
const [value, onChangeText] = useState("Hello");
  return (
    <View style={styles.container}>
        <Text style={styles.h1}> Sign in </Text>

        <TextInput style={styles.input} onChangeText={text => onChangeText(text)} />

    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'coral',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  h1:
  {
    alignItems: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
  input:
  {
    backgroundColor: 'white',
    width: 250,
    height: 50,
    borderRadius: 50,
    padding: 10,
  }
});
