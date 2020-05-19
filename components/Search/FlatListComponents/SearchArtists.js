import React from 'react';
import { Image, SafeAreaView, FlatList ,Platform, StyleSheet, TouchableHighlight, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../../../assets/StyleSheets/ScreenStyles';

const styles = Styles();

export default function Artist ({ artist, navigation }) {

    return (

      <View style={styles.songs}>
      <Image style={styles.imgcrlc}  source={{ uri: artist.image }}/>
      <View style= {styles.songInfo} >
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.whiteText} > { artist.name } </Text>
          <Text style ={styles.whiteText} >
            Artist <MaterialCommunityIcons name="artist" size={15} color="white" />
          </Text>
          </View>
          </View>
        );
}
