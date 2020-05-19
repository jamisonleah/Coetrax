import React from 'react';
import { Image, SafeAreaView, Dimensions,FlatList ,Platform, StyleSheet, Alert, TouchableHighlight, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

export default function ArtistDetails({route, navigation})
{
  return (
        <View style={styles.container}>
          <Text style={styles.whiteText}> Artist </Text>
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

  }
});
