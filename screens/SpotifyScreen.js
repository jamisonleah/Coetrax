import React, { Component, state } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons';
import Base64 from 'Base64';
import SpotifyAuth from '../actions/SpotifyAuth';


//Feel Free to edit this... It 
export default class App extends React.Component {
  state = {
    userInfo: null,
    didError: false
  };

displayError = () => {
  return (
    <View style={styles.userInfo}>
      <Text style={styles.errorText}>
        There was an error, please try again.
      </Text>
    </View>
  );
}
displayResults = () => {
  { return this.state.userInfo ? (
    <View style={styles.userInfo}>
      <Image
        style={styles.profileImage}
        source={ {'uri': this.state.userInfo.images[0].url} }
      />
      <View>
        <Text style={styles.userInfoText}>
          Username:
        </Text>
        <Text style={styles.userInfoText}>
          {this.state.userInfo.id}
        </Text>
        <Text style={styles.userInfoText}>
          Email:
        </Text>
        <Text style={styles.userInfoText}>
          {this.state.userInfo.email}
        </Text>
      </View>
    </View>
  ) : (
    <View style={styles.userInfo}>
      <Text style={styles.userInfoText}>
        Login to Spotify to see user data.
      </Text>
    </View>
  )}
}

render() {
  return (
    <View style={styles.container}>
      <FontAwesome
        name="spotify"
        color="#2FD566"
        size={128}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={SpotifyAuth}
        disabled={this.state.userInfo ? true : false}
      >
        <Text style={styles.buttonText}>
          Login with Spotify
        </Text>
      </TouchableOpacity>
      {this.state.didError ?
        this.displayError() :
        this.displayResults()
      }
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#2FD566',
    padding: 20,
    borderRadius: 50
  },
  buttonText: {
    color: '#000',
    fontSize: 20
  },
  userInfo: {
    height: 250,
    width: 200,
    alignItems: 'center',
  },
  userInfoText: {
    color: '#fff',
    fontSize: 18
  },
  errorText: {
    color: '#fff',
    fontSize: 18
  },
  profileImage: {
    height: 64,
    width: 64,
    marginBottom: 32
  }
});
