import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { Image, SafeAreaView, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
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
    const [results, setResults] = useState({});


const searchTime = async () =>
{
    var text = await SongSearch(search_item);
    setResults(text);
    console.log("text:" + results);
    create_results();

};

const create_results = () =>
{
  try
  {
    console.log("PRessed");
    console.log("what is life" + results);
    let keys = 0;
    for(var objects in results)
    {
      var ob = results[objects];
      switch(objects)
      {
      case "tracks":
        for(var index = 0; index < ob.length; index ++)
          {
            displayResults(stuff => stuff.concat(
                <View key={keys} style={styles.songs}>
                <Image key={keys} style={styles.img}  source={{ uri: ob[index].album[0].images[0].url}}/>

                    <View key={"songinfo" + keys} style={styles.songInfo}>
                    <Text key={ob[index].name} numberOfLines={1} ellipsizeMode='tail' style={styles.whiteText} > {ob[index].name} </Text>
                    <Text key={keys} style ={styles.whiteText} >
                    Song
                    <MaterialIcons key={keys} style={styles.dotIcon} name="music-note" size={15} color="white" />
                    {ob[index].artists[0].name}
                    </Text>
                    </View>
                  </View>
            ));
            keys++;
          } //end of for loop
        break;
        case "albums":
        for(var index = 0; index < ob.length; index ++)
          {
                displayResults(stuff => stuff.concat(
                    <View key={keys} style={styles.songs}>

                    <Image key={keys} style={styles.img}  source={{uri: ob[index].images[0].url}}/>

                        <View key={"albuminfo" + keys} style={styles.songInfo}>
                        <Text key={ob[index].name} numberOfLines={1} ellipsizeMode='tail' style={styles.whiteText} > {ob[index].name} </Text>
                        <Text key={keys} style ={styles.whiteText} >
                        Album
                        <MaterialIcons key={keys} style={styles.dotIcon} name="album" size={15} color="white" />
                        {ob[index].artists[0].name}
                        </Text>
                        </View>
                      </View>

                    ));
                    keys++;
          } //end of for loop
          break;
          case "artists":
          for(var index = 0; index < ob.length; index ++)
            {
                var imge = ob[index].images[0].url;
                console.log(keys + imge);
                  if(imge == null)
                  {
                    imge = '';
                  }
                  displayResults(stuff => stuff.concat(
                      <View key={keys} style={styles.songs}>
                      <Image key={keys} style={styles.imgcrlc}  source={{uri: imge}}/>

                          <View key={"albuminfo" + keys} style={styles.songInfo}>
                          <Text key={ob[index].name} numberOfLines={1} ellipsizeMode='tail' style={styles.whiteText} > {ob[index].name}
                              <MaterialCommunityIcons name="artist" size={15} color="white" />
                          Artists </Text>


                          </View>
                        </View>
                      ));
                      keys++;
                    }
            break;
      } // end of case statements
    }
  } catch(e)
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

    <ScrollView style={styles.scroll} keyboardShouldPersistTaps='always'>
      {stuff}
    </ScrollView>

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
