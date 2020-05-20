import React, {} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { retrieveData } from '../actions/userProfile'


export default function PartyQueuePage({navigation}) {
  const onPressCreateParty = async() => {
    // do something with backend
    // navigate
    //await retrieveData();
  }
  console.log(navigation);

  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
          <TextInput
            style={styles.input_bar}
            onChangeText={text => onUsernameChange(text)}
            placeholder='Enter Party Code'
            placeholderTextColor='#b5bab6'
          />
      </View>
      <TouchableOpacity
      style={styles.join_button}
      onPress={onPressCreateParty}>
          <Text style={styles.join_button_text}> Join </Text>
      </TouchableOpacity>
      <Text style={styles.white_text}> Wanna be the leader?
        <Text style={styles.blue_text}> Make a party </Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  },

  input_bar: {
    height: 50,
    width: 350,
    backgroundColor: '#f4f6f9',
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    color: '#424963',
  },

  join_button_text_text: {
    color: 'white',
    fontSize: 15,
  },

  join_button: {
    margin: 25,
    backgroundColor: '#35bb9b',
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 50,
    width: 150,
  }
});
