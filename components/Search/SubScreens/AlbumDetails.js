import React from 'react';
import { Image, SafeAreaView, Dimensions,FlatList, Button,Platform, StyleSheet, Alert, TouchableHighlight, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import ServerSearch from '../../../actions/ServerSearch';
import AlbumTracks from '../FlatListComponents/AlbumTracks';

export default class Search extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(props);
    this.state =
    {
        album_id: this.props.route.params.album.id,
        album_data: [],
    };

    this.data();
  }
  data = async () =>
  {
    var main = await ServerSearch(`/search/${this.state.album_id}/tracks`);
    const results = this.create_results(main);
    this.setState({album_data: results});
    console.log("we did it");
  }
  create_results = (results) =>
  {

    var album_tracks = [];
    var album_info = "";
    try
    {

      for(var objects in results)
      {
        var stuff = results[objects];

          switch(objects)
          {
            case "items":

              for(var index = 0; index < stuff.length; index++)
              {
                  album_info =
                  {
                    name:       stuff[index].name,
                    image:      this.props.route.params.album.image,
                    album:      this.props.route.params.album,
                    artist:     stuff[index].artists[0].name,
                    type:       "Song",
                    explicit:   stuff[index].explicit,
                    id:         stuff[index].id,
                    duration:   stuff[index].duration_ms
                 }
                    album_tracks.push(album_info);
              }

            break;
          }
      }
    } catch (error)
      {
          console.log(error);
      }

      return album_tracks;
    }

  render()
  {
    return (
        <View style={styles.container}>

        <View style={styles.album_header}>
          <View style={styles.album_info}>

              <Image style={styles.img}  source={{ uri: this.props.route.params.album.image }}/>

          </View>

        </View>
          <SafeAreaView style={styles.LeftList}>

          <FlatList
             data={this.state.album_data}
             renderItem={ ({ item }) => <AlbumTracks item={item} navigation={this.props.navigation}/>}
             keyExtractor={ item => (item.name + item.id)}
             style = {styles.whiteText}
           />
           <View style={styles.backButton}><Button title="Back to Search" onPress={() => this.props.navigation.goBack()}/></View>

           </SafeAreaView>
        </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2025',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  LeftList:
  {
    width: Dimensions.get('window').width,
    backgroundColor: '#1D2025',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  album_info:
  {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'left',
    justifyContent: 'center',
    alignItems: 'center',


  },
  whiteText:
  {
    color: 'white',
    margin: 3,
    textAlign: 'right',
    fontWeight: 'bold'

  },
  backButton:
  {
    textAlign: 'left',

  },
  img:
  {
      height: 200,
      width: 200,
  },
  album_header:
  {
    borderRadius: 25,
    backgroundColor: '#3E4C59',
    justifyContent: 'center',
    height: 300,
    margin: 25,
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    padding: 25,

  }
});
