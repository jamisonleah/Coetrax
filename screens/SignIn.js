import React, {} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Auth_SignIn from '../actions/AppAuth';


export default function SignIn({navigation}) {
  var email;
  var password;
  var signInAttempts = 0;  
  const maxSignInAttempts = 4;

  const onUsernameChange = (text) => email = text;
  const onPasswordChange = (text) => password = text;
  const onPressSignIn = async () => {
    signInAttempts += 1;
    //console.log(signInAttempts);
    let response = await Auth_SignIn(email, password);
    console.log(response.status);
    if(response.status == 200) {
      navigation.navigate('Coetrax')
    } else {
      // console.log(response.json)
    }
  }
  const calculateRemainingAttempts = () => maxSignInAttempts - signInAttempts;

  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Coetrax </Text>
      <Text style={styles.failed_login_text}> Email or password was incorrect. </Text>
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
          <Text style={styles.white_text}> Forgot Password? </Text>
      </View>
      <Text style={styles.failed_login_text}> Please try again. {calculateRemainingAttempts()} tries left. </Text>
      <TouchableOpacity 
      style={styles.sign_in_button}
      onPress={onPressSignIn}>
          <Text style={styles.sign_in_button_text}> Sign In </Text>
      </TouchableOpacity>
      <Text style={styles.white_text}> Don't have an account? 
        <Text style={styles.blue_text} onPress={() => navigation.navigate('SignUp')}> Sign Up </Text> 
      </Text>
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

  blue_text: {
    color: '#35bb9b',
  },

  white_text: {
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

  sign_in_button_text: {
    color: 'white',
    fontSize: 15,
  },

  sign_in_button: {
    margin: 25,
    backgroundColor: '#35bb9b',
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 50,
    width: 150,
  },

  failed_login_text: {
    color: 'orange'
  },
});
