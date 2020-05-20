import React, { Component, state } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons';
import Credentials from '../secrets/SpotifyCredentials';
import Base64 from 'Base64';
import { retrieveHeader, retrieveData } from './userProfile';


//Spotify Secrets
const CLIENT_ID = Credentials.CLIENT_ID;
const CLIENT_SECRET = Credentials.CLIENT_SECRET;

//we want all the scopes!
var gotToken = true;
const scopesArr = ['user-modify-playback-state','user-read-currently-playing','user-read-playback-state','user-library-modify',
                   'user-library-read','playlist-read-private','playlist-read-collaborative','playlist-modify-public',
                   'playlist-modify-private','user-read-recently-played','user-top-read'];
const scopes = scopesArr.join(' ');


export default async function SpotifyAuth()
{
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
      const credsB64 = Base64.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

      if (results.type !== 'success') {
          console.log("Theres an issue...")
      }
      else
      {
        const response = await fetch('https://accounts.spotify.com/api/token',
        {
          method: 'POST',
          headers:
          {
            Authorization: `Basic ${credsB64}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=authorization_code&code=${results.params.code}&redirect_uri=${encodeURIComponent(redirectUrl)}`,
        });


        var responseJson = await response.json();


        //send information to the server so it can handle refreshing tokens when needed
        const data = { access_token: responseJson.access_token, refresh_token: responseJson.refresh_token};
        const apithings = await fetch('http://159.203.160.33/me/spotify/token_assign',
      {
        method: 'POST',
        headers: await retrieveHeader(),
        body: JSON.stringify(data),
      });

        console.log("finished");
        return apithings;

      }
}
  catch(error)
    {
      console.log(error);
    }

}
