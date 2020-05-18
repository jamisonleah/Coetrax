import React from 'react';
import { Image, SafeAreaView, FlatList ,Platform, StyleSheet, TouchableHighlight, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Album from '../Search/FlatListComponents/SearchAlbums';
import Track from '../Search/FlatListComponents/SearchTracks';
import Artist from '../Search/FlatListComponents/SearchArtists';

export default function Results(params)
{
  switch(params.item.type)
  {
    case "album":
      return (<Album album={params.item} navigation={params.navigation}/>);
      break;
    case "artist":
      return (<Artist artist={params.item} navigation={params.navigation}/>);
      break;
    default:
        return (<Track track={params.item} navigation={params.navigation}/>);
        break;
  }
}
