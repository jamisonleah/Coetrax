import React, {useState} from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { signIn } from '../actions/AppAuth';
import { storeData } from '../actions/userProfile';
import Styles from '../assets/StyleSheets/HomeScreenStyles';

export default function SignIn({navigation}) {
  const styles = Styles();
  var email;
  var password;
  //var [signInAttempts, setSignInAttempts] = useState(4); -- Not being used ATM
  var [invalidCredentials, setInvalidCredentials] = useState(false);

  const onUsernameChange = (text) => email = text;
  const onPasswordChange = (text) => password = text;
  const onPressSignIn = async () => {
    let response = await signIn(email, password);
    let headers = response.headers;

    if(response.status == 200) {
      storeData(headers)
      navigation.navigate('Coetrax')
    } else {
      //setSignInAttempts(signInAttempts - 1);
      setInvalidCredentials(true);
      console.log(await response.json());
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}> Coetrax </Text>
      </View>
      {invalidCredentials ? <Text style={styles.failed_login_text}> Email or password was incorrect. </Text> : null}
      <View style={styles.input_container}>
          <TextInput
            style={styles.input_bar}
            onChangeText={text => onUsernameChange(text)}
            value={email}
            placeholder='Email'
            placeholderTextColor='#b5bab6'
          />
          <View>
          </View>
          <TextInput
            style={styles.input_bar}
            secureTextEntry = {true}
            onChangeText={text => onPasswordChange(text)}
            value={password}
            placeholder='Password'
            placeholderTextColor='#b5bab6'
          />
      </View>
      {invalidCredentials ? <Text style={styles.failed_login_text}> Please try again. </Text> : null}
      <Text style={styles.hyperlink}> Forgot Password? </Text>

      <TouchableOpacity
      style={styles.button_one}
      onPress={onPressSignIn}>
          <Text style={styles.button_text}> Sign In </Text>
      </TouchableOpacity>
      <Text style={styles.white_text}> Don't have an account?
        <Text style={styles.hyperlink} onPress={() => navigation.navigate('SignUp')}> Sign Up </Text>
      </Text>
    </View>
  );
}
