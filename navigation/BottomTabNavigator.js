import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import MaterialIcons from '../components/MaterialIcons';
import SignIn from '../screens/SignIn';
import LinksScreen from '../screens/LinksScreen';
import SpotifyScreen from '../screens/SpotifyScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  const hello = {
    style:
    {
      backgroundColor: '#646C77',
    }
  };

  return (
    <BottomTab.Navigator tabBarOptions={hello} initialRouteName={INITIAL_ROUTE_NAME}>
    <BottomTab.Screen
      name="SignIn"
      component={SignIn}
      options={{
        title: 'SignIn',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
      }}
    />
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
