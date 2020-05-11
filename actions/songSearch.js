import React, { Component, state } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons';
import Credentials from '../secrets/SpotifyCredentials';
import Base64 from 'Base64';

export default async function songSearch(searchValue)
{
  console.log(searchValue);
  const server = "http://159.203.160.33";
  const endpoint = "/search/";
  try {

    const apithings = await fetch(server + endpoint + searchValue,
      {
        method: 'GET',
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
      //console.log(jsonstuff);
      for( var objects in jsonstuff)
      {
        //console.log("******"+objects+"*******");
       var ob = jsonstuff[objects];
        for(var index = 0; index < ob.length; index ++)
        {
          //console.log(ob[index].name);
        } 
      }

      return jsonstuff;
  } catch (e) {
      console.log(error);
  }


}
