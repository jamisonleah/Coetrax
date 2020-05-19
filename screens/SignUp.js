import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { signUp } from '../actions/AppAuth'

export default function SignUp({navigation}) {
  var email;
  var password;
  var passwordConfirmation;

  const onUsernameChange = (text) => email = text;
  const onPasswordChange = (text) => password = text;
  const onPasswordConfirmationChange = (text) => passwordConfirmation = text;
  
  const onPressSubmit = async () => {
    let response = await signUp(email, password, passwordConfirmation);
    console.log(response.status);
    if(response.status == 200) {
      navigation.navigate('SignIn');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Coetrax </Text>
      <View style={styles.input_container}>
          <TextInput
            style={styles.input_bar}
            onChangeText={text => onUsernameChange(text)}
            value={email}
            placeholder='Email'
            placeholderTextColor='#b5bab6'
          />
          <TextInput
            style={styles.input_bar}
            secureTextEntry = {true}
            onChangeText={text => onPasswordChange(text)}
            value={password}
            placeholder='Password'
            placeholderTextColor='#b5bab6'
          />
          <TextInput
            style={styles.input_bar}
            secureTextEntry = {true}
            onChangeText={text => onPasswordConfirmationChange(text)}
            value={passwordConfirmation}
            placeholder='Confirm Password'
            placeholderTextColor='#b5bab6'
          />
      </View>
      <TouchableOpacity 
      style={styles.submit_button}
      onPress={onPressSubmit}>
          <Text style={styles.submit_button_text}> Submit </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#424953',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },

  input_container: {
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  h1: {
    alignItems: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40
  },

  input_bar: {
    margin: 20,
    height: 50,
    width: 350,
    backgroundColor: '#f4f6f9',
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    color: '#424963',
  },

  submit_button_text: {
    color: 'white',
    fontSize: 15,
  },

  submit_button: {
    margin: 25,
    backgroundColor: '#35bb9b',
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 50,
    width: 150,
  },

  invalid_credentials_text: {
    color: 'orange'
  },
});
