import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { Image, SafeAreaView, FlatList ,Platform, StyleSheet, Text,  Alert, TouchableOpacity, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getMethod } from '../actions/ServerSearch'
import SearchIcon from '../components/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AnimatedLoader from 'react-native-animated-loader';
import ListSearchResults from '../components/Search/ListSearchResults';
import Styles from '../assets/StyleSheets/ScreenStyles';


export default class PendingQueue extends React.Component
{


  //constrcutor needed for setState...I think...Well it's here
  constructor(props)
  {
    super(props);
    this.state =
    {
        //This is for state changes if needed
    };
  }

    render()
    {
      return (
        <View style={styles.container}
                <Text> Pending Request Screen </Text>
        </View>

      );
    }
}

//Style Sheets :)
const styles = Styles();
