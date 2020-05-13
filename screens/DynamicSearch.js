import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { Image, SafeAreaView, FlatList ,Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SongSearch from '../actions/songSearch'
import SearchIcon from '../components/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AnimatedLoader from 'react-native-animated-loader';


export default function SearchScreen()
{
      const [search_item, onChangeValue] = useState("");
      let [stuff, displayResults] = useState([]);


      let [track, settrack] = useState([]);
      let [album, setalbum] = useState([]);
      let [artist, setartist] = useState([]);


      const [results, setResults] = useState({});
      const Item = ({ title }) => {
        return (
          <View style={styles.item}>
          <Text style={styles.title}> { title } </Text>
          </View>
        );
      }
    const searchTime = async () =>
    {
        displayResults([]);
        var text = await SongSearch(search_item);
        setResults(text);
        create_results();

    }
    const Tracks = ({ track }) => {
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

const create_results = () =>
{
  try
  {
    console.log("PRessed");
    let keys = 0;
    var info;
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
                    };
                    settrack(track => track.concat(info));
          }
          break;
          case "albums":
          for(var index = 0; index < ob.length; index ++)
          {
                    info =
                    {
                        name:       ob[index].name,
                        image:      ob[index].album[0].images[0].url,
                        artist:     ob[index].artists[0].name,
                    };
                    setalbum(album => album.concat(info));
          }
          break;
          case "artists":
          for(var index = 0; index < ob.length; index ++)
          {
                    info =
                    {
                        name:       ob[index].name,
                        image:      ob[index].images[0].url,
                    };
                    setartist(artist => artist.concat(info));
          }

          break;
        }
        console.log();
    }
  }
   catch(e)
  {

  }
}

return (
  <View style={styles.container}>
        <View style={styles.searchSection}>
            <View style={styles.searchIcon}>
            <SearchIcon style={styles.searchIcon} name="search"/>
            </View>
              <TextInput
                style={styles.input_bar}
                onChangeText = {search => {
                  onChangeValue(search);
                  }}
                />
                <TouchableOpacity style={styles.SearchButton} onPress={searchTime}>
                    <Text style={styles.ButtonText}> Search </Text>
                </TouchableOpacity>
        </View>

        <SafeAreaView style={styles.container}>
         <FlatList
           data={track}
           renderItem={ ({ item }) => <Track track={item} />}
           keyExtractor={ item => (item.name + item.artist)}
         /> <FlatList
            data={album}
            renderItem={ ({ item }) => <Album album={item} />}
            keyExtractor={ item => (item.name + item.artist)}
          /> <FlatList
             data={artist}
             renderItem={ ({ item }) => <Artist artist={item} />}
             keyExtractor={ item => (item.name + "2.0")}
           />
       </SafeAreaView>

  </View>


)}


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
