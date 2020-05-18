import React from 'react';
import { Image, SafeAreaView, Dimensions, FlatList ,Platform, StyleSheet, TouchableHighlight, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Results(props)
{

  const to_minutes = (ms) =>
  {
    var minutes = Math.floor((ms / (1000 * 60)) % 60);

    var seconds = Math.floor((ms / 1000) % 60);
    if(seconds < 10)
    {
      seconds = "0" + seconds;
    }


    return `${minutes}:${seconds}`;
  }
  const Track = ({ track }) => {
    return (
      <TouchableOpacity style={styles.column} onPress={() => props.navigation.navigate('songdetails', {
            track: track
          })}>
        <View style={styles.songs}>
            <View style= {styles.songInfo}>
              <Text numberOfLines={1} ellipsizeMode='tail' style={styles.whiteText} > { track.name } </Text>

                    <View style={styles.row}>
                    {track.explicit ?
                      <MaterialIcons style={styles.whiteText} name="explicit" size={15} color="white"/>
                      : <MaterialCommunityIcons style={styles.whiteText} name="set-none" size={24} color="white" /> }
                      <Text numberOfLines={1} ellipsizeMode='tail' style={styles.whiteText}> {track.album.name} </Text>
                      </View>
            </View>
            <View style={styles.time_block}>

                <Text style={styles.time_text}> {to_minutes(track.duration)}</Text>

            </View>

        </View>



      </TouchableOpacity>

    );
  }


        return (<Track track={props.item}/>);
  }
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2025',
    flex: 1,
  },
  row:
  {
      flexDirection: 'row'
  },
  column:
  {
      flexDirection: 'column'
  },
  dotIcon:
  {
    padding: 15
  },
  scroll:
  {

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
  pressedButton:
  {
    backgroundColor: '#EEC8A0',
  },
  songs:
  {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1D2025',
    height: 100,
    color: 'black',

  },
  songInfo:
  {
    width: 250,
    padding: 10,
    justifyContent: 'center'
  },
  time_block:
  {
      padding: 10,
      justifyContent: 'center',
      flex: 1,
    },
    time_text:
    {
      color: 'white',
      textAlign: 'right',
    },
});
