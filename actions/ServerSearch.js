import React, { Component, state } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons';
import Credentials from '../secrets/SpotifyCredentials';
import Base64 from 'Base64';

export default async function ServerSearch(endpoint, method = 'GET')
{

  const server = "http://159.203.160.33";
  try {
    console.log(server + endpoint);
    const apithings = await fetch(server + endpoint ,
      {
        method: method,
        headers:
        {
          //this is an example header...should be saved somewhere
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'access-token':'KDo9EI1cmCmyRgodtzD_uQ',
          'token-type':'Bearer',
          'client':'pK4GctyFFniID8fvCdKShw',
          'expiry':'1590340025',
          'uid':'lxj9480@rit.edu',
        }
      });

      var jsonstuff = await apithings.json();


      return jsonstuff;


  } catch (error) {
      console.log(error);
  }


}
