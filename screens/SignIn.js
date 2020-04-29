import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
const [value, onChangeText] = useState("Hello");
  return (
    <View style={styles.container}>
    <Text style={styles.h1}> Coetrax </Text> 
    <View style={styles.input_container}>
    <TextInput
      style={styles.input_bar}
      //onChangeText={text => onChangeText(text)}
      value={value}
      />
      <TextInput
        style={styles.input_bar}
        secureTextEntry = {true}
        //onChangeText={}
        value={value}
        />
        <Text style={styles.white_text}> Forgot Password? </Text>
        </View>
        <TouchableOpacity style={styles.sign_in_button}>
          <Text style={styles.sign_in_button_text}> Log in </Text>
        </TouchableOpacity>
        <Text style={styles.white_text}> Don't have an account? <Text style={styles.blue_text}> Sign Up </Text>  </Text>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#424963',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  blue_text:
  {
    color: '#35bb9b',
  },
  white_text:
  {
    color: 'white',
  },
  input_container:
  {
    color: 'black',
    marginTop: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1:
  {
    alignItems: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  input_bar:
  {
    margin: 20,
    height: 50,
    width: 350,
    backgroundColor: '#f4f6f9',
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    color: '#424963',
  },
  sign_in_button_text:
  {
    color: 'white',
    fontSize: 15,
  },
  sign_in_button:
  {
    margin: 25,
    backgroundColor: '#35bb9b',
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 50,
    width: 150,
  },

});
