import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { Image, SafeAreaView, FlatList ,Platform, StyleSheet, Text,  Alert, TouchableOpacity, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getMethod } from '../../../actions/ServerSearch'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../../../assets/StyleSheets/ScreenStyles';
import Slider from "react-native-slider";

export default class MusicPlayer extends React.Component
{


  //constrcutor needed for setState...I think...Well it's here
  constructor(props)
  {
    super(props);
    this.state =
    {
        loading: false,
        paused: true,
        current: null,
    };

    this.getQueue();
  }

    async getQueue()
    {
        var songs = await getMethod(`/playback/play`);
        this.setState({current: songs});
        console.log(this.state.current.name); 
    }

    render()
    {
      return (
        <View style={styles.container}>
                <Text style={{color: 'white'}}> Music Player Screen </Text>
                <Slider />
        </View>

      );
    }
}

//Style Sheets :)
const styles = StyleSheet.create({

  container: {
    backgroundColor: '#1D2025',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },

});
