import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { Image, SafeAreaView, FlatList ,Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SongSearch from '../actions/songSearch'
import SearchIcon from '../components/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AnimatedLoader from 'react-native-animated-loader';
import ListSearchResults from '../components/ListSearchResults';

export default class Search extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
        stuff: [],
        results: [],
        search_text: null
      };
  }


  searchTime = async () =>
  {
    if(this.state.search_text)
    {
      this.state.stuff = [];
      var text = await SongSearch(this.state.search_text);
      var results = this.create_results(text);
      this.setState({stuff: results});
    }
  }
  typing = (text) =>
  {
      this.state.search_text = text;
      console.log(this.state.search_text);
  }
  create_results = (results) =>
  {
    try
    {
      let keys = 0;
      var info;
      var allthestuff = [];
      var img;
      for(var objects in results)
      {
          var ob = results[objects];
          switch(objects)
          {
            case "tracks":
            for(var index = 0; index < ob.length; index ++)
                  {
                      info =
                      {
                          name:       ob[index].name,
                          image:      ob[index].album[0].images[0].url,
                          artist:     ob[index].artists[0].name,
                          type:       "song",
                          id:         ob[index].id
                      };
                      allthestuff.push(info);
                  }
            break;
            case "albums":
              for(var index = 0; index < ob.length; index ++)
                  {
                      info =
                      {
                          name:       ob[index].name,
                          image:      ob[index].images[0].url,
                          artist:     ob[index].artists[0].name,
                          type:       "album",
                          id:         ob[index].id
                      };
                      allthestuff.push(info);
                  }
                  break;
            case "artists":

              console.log(ob);
                for(var index = 0; index < ob.length; index ++)
                {
                      info =
                      {
                          name:       ob[index].name,
                          image:      ob[index].images[0] ? ob[index].images[0].url : "",
                          type:       "artist",
                          id:         ob[index].id
                      };
                      allthestuff.push(info);
                }
                break;
            }
          }
    }
     catch(error)
    {
        console.error(error);
    }
    console.log("FINISHED");
    return allthestuff;
  }



   Track = ({ track }) => {
    return (

      <View style={styles.songs}>
      <Image style={styles.img}  source={{ uri: track.image }}/>
      <View style= {styles.songInfo} >
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.whiteText} > { track.name } </Text>
          <Text style ={styles.whiteText} >
            Song  <MaterialIcons style={styles.dotIcon} name="music-note" size={15} color="white"/>
          </Text>
          </View>
          </View>
        );
    }
    render()
    {
      return (
        <View style={styles.container}>
              <View style={styles.searchSection}>

                        <View style={styles.searchIcon}>
                            <SearchIcon style={styles.searchIcon} name="search"/>
                        </View>
                          <TextInput
                            style={styles.input_bar}
                            onChangeText = {search => {
                              this.typing(search);
                            }}
                          />
                      <TouchableOpacity style={styles.SearchButton} onPress={this.searchTime}>
                          <Text style={styles.ButtonText}> Search </Text>
                      </TouchableOpacity>
              </View>

              <SafeAreaView style={styles.container}>
              <FlatList
                 data={this.state.stuff}
                 renderItem={ ({ item }) => <ListSearchResults item={item} />}
                 keyExtractor={ item => (item.name + item.id)}
                 style = {styles.whiteText}
               />
             </SafeAreaView>

        </View>

      );
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
