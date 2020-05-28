import React from 'react';
import { Image, ImageBackground, SafeAreaView, FlatList ,Platform, StyleSheet, TouchableHighlight, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Album from '../Search/FlatListComponents/SearchAlbums';
import Track from '../Search/FlatListComponents/SearchTracks';
import Artist from '../Search/FlatListComponents/SearchArtists';
import Styles from '../../assets/StyleSheets/ScreenStyles';


export default function Mosaic({item, navigation})
{
  const styles = Styles();
  var data = item;

  //remake list.. was using recursion before but too many stack overflows :/
  const newList = () =>
  {
      var newArry = [];
      for(var item = 0; item < data.length; item++)
      {
        if(data[item] != null)
        {
            newArry.push(data[item]);
        }
      }
      data = newArry;

  }

  //reformat the tracks JSON so it's easier to display
  const reformat = (track) =>
  {
    var info;

              info =
              {
                  name:       track.name,
                  image:      track.album[0].images[0].url,
                  artist:     track.artists[0].name,
                  type:       "song",
                  album:      track.album[0],
                  explicit:   track.explicit,
                  id:         track.id
              };
          console.log(info.name + " ID:" + info.id);
          return info;

  }

  //random track yay!
  const randomTrack = (size) =>
  {
      newList();
      var rand = Math.floor(Math.random() * data.length);
      var pop = data[rand];
      data[rand] = null;
      return reformat(pop);
  }

  //
  const Row = ({size}) =>
  {
    var pop = randomTrack(size);
    var bgStyle = styles.bigfavs;
    if(size)
    {
       bgStyle = styles.smallfavs;
    }
    return (
      <TouchableOpacity onPress={() => navigation.navigate('songdetails', {
            track: pop
          })}>
          <View style={styles.mosaicCover}>
                  <Image style={bgStyle} source={{uri: pop.image}} />
                  <Text style={styles.center}> {pop.name} </Text>
          </View>
      </TouchableOpacity>
    );

  }
  return (
    <View>
            <View style={styles.mosaic}>
              <View style={styles.blockgroup}>
                    <View style={styles.smallBlock}>
                      <Row size={true}/>
                    </View>
                    <View style={styles.smallBlock}>
                      <Row size={true}/>
                    </View>
              </View>
              <View style={styles.bigBlock}>
              <Row size={false}/>

              </View>
            </View>
            <View style={styles.mosaic}>
              <View style={styles.bigBlock}>
              <Row size={false}/>

              </View>
              <View style={styles.blockgroup}>
                    <View style={styles.smallBlock}>
                    <Row size={true}/>

                    </View>
                    <View style={styles.smallBlock}>
                    <Row size={true}/>

                    </View>
              </View>
            </View>
    </View> );
}
