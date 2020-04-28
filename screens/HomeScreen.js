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
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  h1:
  {
    alignItems: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
});
