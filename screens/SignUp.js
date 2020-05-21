import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { signUp } from '../actions/AppAuth';
import Styles from '../assets/StyleSheets/HomeScreenStyles';


export default function SignUp({navigation}) {
  const styles = Styles();
  var email;
  var password;
  var passwordConfirmation;

  const onUsernameChange = (text) => email = text;
  const onPasswordChange = (text) => password = text;
  const onPasswordConfirmationChange = (text) => passwordConfirmation = text;

  const onPressSubmit = async () => {
    let response = await signUp(email, password, passwordConfirmation);

    if(response.status == 200) {
      navigation.navigate('SignIn');
    } else {
      console.log(await response.json()); // see 'errors'
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}> Register </Text>
      </View>
      <View style={styles.input_container}>
          <TextInput
            style={styles.input_bar}
            onChangeText={text => onUsernameChange(text)}
            value={email}
            placeholder='Email'
            placeholderTextColor='#b5bab6'
          />
          <View style={styles.break}>

          </View>
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
      style={styles.button_one}
      onPress={onPressSubmit}>
          <Text style={styles.button_text}> Submit </Text>
      </TouchableOpacity>

      <Text style={styles.white_text}> Have an Account?
        <Text style={styles.hyperlink} onPress={() => navigation.navigate('SignIn')}> Sign In </Text>
      </Text>

      </View>
  );
}
