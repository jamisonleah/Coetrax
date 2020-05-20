import React, { Component, state } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons';
import Credentials from '../secrets/SpotifyCredentials';
import Base64 from 'Base64';
import { retrieveHeader, retrieveData } from './userProfile';



   export async function getMethod (endpoint)
   {
    const server = "http://159.203.160.33";
    try {
      const response = await fetch(server + endpoint ,
      {
        method: 'GET',
        headers: await retrieveHeader()
      });


      var jsonstuff = await response.json();
      return jsonstuff;


    } catch (error) {
      console.log(error);
    }
  }
