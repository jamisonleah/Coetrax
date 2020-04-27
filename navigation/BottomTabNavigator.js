import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import MaterialIcons from '../components/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SpotifyScreen from '../screens/SpotifyScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Spotify';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
    <BottomTab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        tabBarIcon: ({ focused }) => <MaterialIcons focused={focused} name="add-to-queue" />,
      }}
    />
      <BottomTab.Screen
        name="Spotify"
        component={SpotifyScreen}
        options={{
          title: 'Spotify',
          tabBarIcon: ({ focused }) => <MaterialIcons focused={focused} name="add-to-queue" />,
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
