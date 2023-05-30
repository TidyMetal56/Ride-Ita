import * as React from "react";
import BottomTabNavigator from "../navigation/BottomNavigator";
import { Button, VStack, Center, Box, Text } from "native-base";
import styles from "../utils/styles";


import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screen from '../utils/screenNames';

const Tab = createBottomTabNavigator();

import SettingsScreen from '../screens/SettingsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatsScreen from '../screens/ChatsScreen';

import HomeStackNavigator from "../navigation/HomeStack";


const AuthenticatedScreen = () => {
  return (
  <Box safeArea>

    {/* <BottomTabNavigator/>  */}

    

  </Box>
  );
};

export default AuthenticatedScreen;
