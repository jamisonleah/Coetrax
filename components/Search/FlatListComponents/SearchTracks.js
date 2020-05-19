import React from 'react';
import { Image, SafeAreaView, FlatList ,Platform, StyleSheet, TouchableHighlight, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../../../assets/StyleSheets/ScreenStyles';

const styles = Styles();

export default function Track ({track, navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('songdetails', {
          track: track
        })}>
      <View style={styles.songs}>
        <Image style={styles.img}  source={{ uri: track.image }}/>
          <View style= {styles.songInfo} >
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.whiteText} > { track.name } </Text>
              <Text style ={styles.whiteText} >  Song <MaterialIcons style={styles.dotIcon} name="music-note" size={15} color="white"/> { track.artist }
            </Text>
          </View>
        </View>
    </TouchableOpacity>

  );}
