import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { Image, SafeAreaView, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SongSearch from '../actions/songSearch'

export default function SearchScreen()
{
const [search_item, onChangeValue] = useState("");
let [stuff, displayResults] = useState([]);
const [results, setResults] = useState("");
const searchTime = async () => {
  displayResults([]);
  var text = await SongSearch(search_item);
  setResults(text);
  create_results();
};

const create_results = async () =>
{

    let keys = 0;
    for(var objects in results)
    {
      var ob = results[objects];
      for(var index = 0; index < ob.length; index ++)
      {
        displayResults(stuff => stuff.concat(
          <View style={styles.songs}>
          <Text key = {keys}> {(ob[index].name)} </Text>
          </View>
        ));
        keys++;
        console.log(ob[index].name);
      }
    }
}

return (
  <View style={styles.container}>
    <Text> Search Page </Text>
    <TextInput
      style={styles.input_bar}
      onChangeText = {search => onChangeValue(search)}
    />

    <TouchableOpacity style={styles.sign_in_button} onPress={searchTime}>
        <Text style={styles.sign_in_button_text}> Search </Text>
    </TouchableOpacity>

    <View>
    <ScrollView style={styles.white}>
      {stuff}
      </ScrollView>
    </View>
  </View>


)}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#424953',
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    color: 'white',
  },
  songs:
  {
    flex: 1,
    backgroundColor: '#424953',
    padding: 15,
    borderColor: 'black',
    borderStyle: 'solid',

  },
  white:
  {
      height: 100,
      borderRadius: 10,
      backgroundColor: '#424953',
      flex: 1,
  },
  blue_text:
  {
    color: '#35bb9b',
  },
  white_text:
  {
    color: 'white',
  },
  input_container:
  {
    color: 'black',
    marginTop: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1:
  {
    alignItems: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  input_bar:
  {
    margin: 20,
    height: 50,
    width: 350,
    backgroundColor: '#f4f6f9',
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    color: '#424963',
  },
  sign_in_button_text:
  {
    color: 'white',
    fontSize: 15,
  },
  sign_in_button:
  {
    margin: 25,
    backgroundColor: '#35bb9b',
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 50,
    width: 150,
  },

});
