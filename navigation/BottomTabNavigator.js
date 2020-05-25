import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import MaterialIcons from '../components/MaterialIcons';
import MaterialCommunityIcons from '../components/MaterialCommunityIcons';
import Fontisto from '../components/Fontisto';
import SignIn from '../screens/SignIn';
import SpotifyScreen from '../screens/SpotifyScreen';
import HomeScreen from '../screens/HomeScreen';
import PartyQueuePage from '../screens/PartyQueuePage';
import SearchScreen from '../screens/SearchScreen';
import {getMethod} from '../actions/ServerSearch';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

var spotify_connected;

async function stuff (myFunction)
{
   myFunction(await getMethod("/me/spotify"));
}


export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  var [spotify_connected, setSpotifyBoolean] = React.useState(false);

  stuff(setSpotifyBoolean);


  const hello = {
    style:
    {
      backgroundColor: 'black',
    }
  };

  const searchscreen = () =>
  {
    return(
    <BottomTab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        title: 'Search',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />,
      }}
    />);
  }
  const spotifyscreen = () =>
  {
    return(
    <BottomTab.Screen
      name="Spotify Connect"
      component={SpotifyScreen}
      options={{
        title: 'Spotify',
        tabBarIcon: ({ focused }) => <MaterialCommunityIcons focused={focused} name="spotify" />,
      }}
    />);
  }


  return (
    <BottomTab.Navigator tabBarOptions={hello} initialRouteName={INITIAL_ROUTE_NAME}>

    <BottomTab.Screen
      name="JoinQueue"
      component={PartyQueuePage}
      options={{
        title: 'PartyQueue',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
      }}
    />


    {spotify_connected ? searchscreen() : spotifyscreen() }

    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Spotify':
      return 'Sign Into Spotify';
  }
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomColor:
  {
    backgroundColor: 'black',
    color: 'white',
  },
});
