import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { signUp } from '../actions/AppAuth'

export default function SignUp({navigation}) {
  var email;
  var password;
  var passwordConfirmation;
  var [invalidCredentials, setInvalidCredentials] = useState(false);
  var [errorMessage, setErrorMessage] = useState();
  const onUsernameChange = (text) => email = text;
  const onPasswordChange = (text) => password = text;
  const onPasswordConfirmationChange = (text) => passwordConfirmation = text;
  
  const onPressSubmit = async () => {
    let response = await signUp(email, password, passwordConfirmation);
    console.log(email);
    if(response.status == 200) {
      navigation.navigate('SignIn');
    } else {
      let json = await response.json();
      let errors = "";
      json.errors.full_messages.forEach(element => {
        errors = errors.concat(element);
        errors = errors.concat(".\n");
      });

      setInvalidCredentials(true);
      setErrorMessage(errors);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.close_button}
      onPress={() => navigation.navigate('SignIn')}>
      </TouchableOpacity>
      <Text style={styles.h1}> Coetrax </Text>
      {invalidCredentials ? <Text style={styles.invalid_credentials_text}>{errorMessage}</Text> : null}
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
      {invalidCredentials ? <Text style={styles.invalid_credentials_text}> Please try again. </Text> : null}
      <TouchableOpacity 
      style={styles.submit_button}
      onPress={onPressSubmit}>
          <Text style={styles.submit_button_text}> Sign Up </Text>
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
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  h1: {
    alignItems: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20
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
    margin: 20,
    backgroundColor: '#35bb9b',
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 50,
    width: 150,
  },

  invalid_credentials_text: {
    color: 'orange',
    textAlign: 'center'
  },

  close_button: {

  }
});
