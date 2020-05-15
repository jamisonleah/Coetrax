import React from 'react';
import { Image, SafeAreaView, FlatList ,Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Results(props)
{
  const Track = ({ track }) => {
    return (

      <View style={styles.songs}>
      <Image style={styles.img}  source={{ uri: track.image }}/>
      <View style= {styles.songInfo} >
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.whiteText} > { track.name } </Text>
          <Text style ={styles.whiteText} >
            Song  <MaterialIcons style={styles.dotIcon} name="music-note" size={15} color="white"/> { track.artist }
          </Text>
          </View>
          </View>
        );
    }

    const Album = ({ album }) => {
      return (

        <View style={styles.songs}>
        <Image style={styles.img}  source={{ uri: album.image }}/>
        <View style= {styles.songInfo} >
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.whiteText} > { album.name } </Text>
            <Text style ={styles.whiteText} >
              Album  <MaterialIcons style={styles.dotIcon} name="album" size={15} color="white"/> { album.artist }
            </Text>
            </View>
            </View>
          );
      }
      const Artist = ({ artist }) => {
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
  switch(props.item.type)
  {
    case "song":
      return (<Track track={props.item}/>);
      break;
    case "album":
      return (<Album album={props.item}/>);
      break;
    case "artist":
      return (<Artist artist={props.item}/>);
      break;
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2025',
    flex: 1,
  },
  dotIcon:
  {
    padding: 15
  },
  scroll:
  {
    paddingTop: 20,
    flex: 1,

  },
  whiteText:
  {
    color: 'white',
    margin: 3
  },
  searchIcon:
  {
    height: 50,
    padding: 10,
    backgroundColor: '#f4f6f9',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchSection:
  {
    backgroundColor: '#3E4C59',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    paddingTop: 50,
    flexDirection: 'row',
  },
  input_bar:
  {
    flex: 1,
    height: 50,
    backgroundColor: '#f4f6f9',
    borderColor: 'white',
    //borderTopRightRadius: 10,
    //borderBottomRightRadius: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#424963',
  },
  ButtonText:
  {
    color: 'black',
    fontSize: 15,
  },
  SearchButton:
  {
    backgroundColor: '#EEC8A0',
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 150,
    height: 50,
  },
  img:
  {
    borderColor: 'black',
    height: 65,
    width: 65,
    paddingRight: 50,
  },
  imgcrlc:
    {
      borderColor: 'black',
      height: 65,
      width: 65,
      paddingRight: 50,
      borderRadius: 50,
    },
  songs:
  {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#1D2025',
    backgroundColor: '#1D2025',
    height: 100,
    padding: 20,
    color: 'black',
    alignItems: 'center',

  },
  songInfo:
  {
    width: 250,
    padding: 10,
  }
});
