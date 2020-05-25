import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { Image, SafeAreaView, FlatList ,Platform, StyleSheet, Text,  Alert, TouchableOpacity, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getMethod } from '../actions/ServerSearch'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AnimatedLoader from 'react-native-animated-loader';
import ListSearchResults from '../components/Search/ListSearchResults';
import Styles from '../assets/StyleSheets/ScreenStyles';
import Mosaic from '../components/Search/Mosaic';

export default class Search extends React.Component
{


  //constrcutor needed for setState...I think...Well it's here
  constructor(props)
  {
    super(props);
    this.state =
    {
        stuff: [],
        results: [],
        search_text: null,
        mosaic: [],
        entered: false
      };
  }
  getData = async () =>
  {
    var tracks = await getMethod(`/you`);
    var extrastep = [];
    extrastep.push(tracks);
    this.setState({mosaic : extrastep});
  }
  componentDidMount()
  {
    this.getData();
  }


  //Function that is called when you press Search :0
  searchTime = async () =>
  {
    if(this.state.search_text)
    {
      this.state.stuff = [];
      var text = await getMethod(`/search/${this.state.search_text}/`);
      var results = this.create_results(text);
      this.setState({stuff: results});
      this.state.entered = true;

      this.getData();
      console.log(this.state.entered);
    }
  }

  //search_text changes everytime a user types
  typing = (text) =>
  {
      this.state.search_text = text;
  }

  //Take the results from the server and parse them into objects
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
                          album:      ob[index].album[0],
                          explicit:   ob[index].explicit,
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
                for(var index = 0; index < ob.length; index ++)
                {
                      info =
                      {
                          name:       ob[index].name,
                          image:      ob[index].images[0] ? ob[index].images[0].url : "http://www.tiptoncommunications.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png",
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
    //return all the stuff!
    return allthestuff;
  }
    //Heres the main page!
    render()
    {
      return (
        <View style={styles.container}>
              <View style={styles.searchSection}>

                        <View style={styles.searchIcon}>
                          <MaterialIcons style={styles.whiteText} name="search" size={15} color="white"/>
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
              {this.state.entered ?
              <FlatList
                 data={this.state.stuff}
                 renderItem={ ({ item }) => <ListSearchResults item={item} navigation={this.props.navigation}/>}
                 keyExtractor={ item => (item.name + item.id)}
                 style = {styles.whiteText}
               />

               :
               <FlatList
                  data={this.state.mosaic}
                  renderItem={ ({ item }) => <Mosaic item={item} navigation={this.props.navigation}/>}
                  keyExtractor={ item => ("Mosaic")}
                  style = {styles.whiteText}
                />

              }
             </SafeAreaView>

        </View>

      );
    }
}

//Style Sheets :)
const styles = Styles();
