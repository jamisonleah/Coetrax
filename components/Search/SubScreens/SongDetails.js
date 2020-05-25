import React from 'react';
import { Image, SafeAreaView, Dimensions,FlatList ,Platform, StyleSheet, Alert, TouchableHighlight, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

export default function Details({route, navigation})
{
    const { track } = route.params;

    const alert = () =>
    {
        console.log("add song to PartyQueue Pending List");
    }
    const createTwoButtonAlert = () =>
    {
    Alert.alert(
      `You want to suggest ${track.name} `,
      "",
      [
        {
          text: "No",
          onPress: () => navigation.goBack(),
          style: "cancel"
        },
        { text: "Yes", onPress: alert }
      ],
      { cancelable: true }
    );
    }
    const explicit = () =>
    {
      return (<MaterialIcons style={styles.whiteText} name="explicit" size={15} color="white"/>);
    }
    const clean = () =>
    {
      return (<MaterialCommunityIcons style={styles.whiteText} name="set-none" size={24} color="white"/>);
    }
    const back = () =>
    {
        navigation.goBack();
    }
    return (
      <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.img}  source={{ uri: track.image }}/>
        <MaterialIcons onPress={back} style={styles.backButton} name="chevron-left" size={40} color="white" />
      </View>
                <View style={styles.song_details}>

                  <Text numberOfLines={2} ellipsizeMode='tail' style={styles.trackName}>{track.name}</Text>
                  <Text style={styles.whiteText}>{track.artist}</Text>
                {track.explicit ? explicit() : clean()  }
                </View>

        <View style={styles.twoButtons}>
        <TouchableOpacity style={styles.green_button} onPress={createTwoButtonAlert}>
          <Text> Suggest </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2025',
    alignItems: 'baseline',
    flex: 1,

  },
  whiteText:
  {
    color: 'white',
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'multicolore'


  },
  twoButtons:
  {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  green_button:
  {
    margin: 25,
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#35bb9b',
    width: 250,
    width: Dimensions.get('window').width,

  },
  img:
  {
    borderColor: 'black',
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
    borderBottomRightRadius: 100,
    borderWidth: 10,
  },
  song_details:
  {

    flexDirection: 'column',
  },
  backButton:
  {
    paddingTop: 50,
    paddingLeft: 20,
    position: 'absolute'
  },
  trackName:
  {
    margin: 10,
    fontSize: 25,
    color: 'white',
    fontFamily: 'multicolore'
  }


});
