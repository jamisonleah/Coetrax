import React from 'react';
import { Image, SafeAreaView, FlatList ,Platform, StyleSheet, TouchableHighlight, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../../../assets/StyleSheets/ScreenStyles';

const styles = Styles();

export default function Album ({ album, navigation }) {
  return (

        <TouchableHighlight activeOpacity={.6} underlayColor= '#35bb9b' style={styles.pressedButton} onPress = {() => navigation.navigate('albumdetails', {album: album})}>
        <View style={styles.songs}>
        <Image style={styles.img}  source={{ uri: album.image }}/>
        <View style= {styles.songInfo} >
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.whiteText} > { album.name }  </Text>
            <Text style ={styles.whiteText} >
              Album  <MaterialIcons style={styles.dotIcon} name="album" size={15} color="white"/> { album.artist }
            </Text>
            </View>
            </View>
            </TouchableHighlight>
          );
}
