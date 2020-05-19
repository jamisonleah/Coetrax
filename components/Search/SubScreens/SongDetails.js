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

    const back = () =>
    {
        navigation.goBack();
    }
    return (
      <View style={styles.container}>
          <View style={styles.song_info}>
          <Image style={styles.img}  source={{ uri: track.image }}/>

                <View style={styles.song_details}>

                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.whiteText} > { track.name } </Text>
                    <Text style={styles.whiteText}>  {track.artist} </Text>
                    <Text style={styles.whiteText}> {track.album.name} </Text>

                    {track.explicit ?
                  <MaterialIcons style={styles.whiteText} name="explicit" size={15} color="white"/>
                    : <MaterialCommunityIcons style={styles.whiteText} name="set-none" size={24} color="white" /> }
                    </View>
        </View>
        <View style={styles.twoButtons}>
        <TouchableOpacity style={styles.green_button} onPress={createTwoButtonAlert}>
          <Text> Suggest </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.white_button} onPress = {back}>
          <Text> Cancel </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2025',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  whiteText:
  {
    color: 'white',
    margin: 3,
    textAlign: 'right',
    fontWeight: 'bold'

  },
  suggest:
  {
    backgroundColor: "#EEC8A0"
  },
  cancel:
  {
    backgroundColor: "white"
  },
  twoButtons:
  {
    flexDirection: 'row',
  },
  ButtonText:
  {
    color: 'white',
    fontSize: 15,
  },
  green_button:
  {
    margin: 25,
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#35bb9b',
    width: 150,
  },
  white_button:
  {
    margin: 25,
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'white',
    width: 150,
  },
  img:
  {
    borderColor: 'black',
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  song_info:
  {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  song_details:
  {
    padding: 10,
    flexDirection: 'column',
    width: 200,
  }


});
