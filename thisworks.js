import React, { Component, state } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons';
import Base64 from 'Base64';


const CLIENT_ID = "2b0942fbe4e4477fa8bd23bbec99acfa";
const CLIENT_SECRET = "a73a5a27b1df4286a8dd28e82658366f";
var gotToken = true;
const scopesArr = ['user-modify-playback-state','user-read-currently-playing','user-read-playback-state','user-library-modify',
                   'user-library-read','playlist-read-private','playlist-read-collaborative','playlist-modify-public',
                   'playlist-modify-private','user-read-recently-played','user-top-read'];
const scopes = scopesArr.join(' ');
export default class App extends React.Component {
  state = {
    userInfo: null,
    didError: false
  };
  handleSpotifyLogin = async () => {
    try {

  //Step one of the Authorization Code Flow
  let redirectUrl = AuthSession.getRedirectUrl();
  const results = await AuthSession.startAsync({
      authUrl:
        'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' +
        CLIENT_ID +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' +
        encodeURIComponent(redirectUrl),
    })
  //2. Have your application request refresh and access tokens; Spotify returns access and refresh tokens

  console.log("STEP TWO");
  console.log("TEST");
  const credsB64 = Base64.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);


  if (results.type !== 'success') {
   this.setState({ didError: true });
  }
  else {
     const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credsB64}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=authorization_code&code=${results.params.code}&redirect_uri=${
          encodeURIComponent(redirectUrl)}`,
      });

      const responseJson = await response.json();
      console.log(responseJson);
 }
}
catch(error)
{
  console.log(error);
}
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
        onPress={this.handleSpotifyLogin}
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
