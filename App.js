import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider } from "native-base";

// Screens
import HomeScreen from './screens/HomeScreen';
import ScheScreen from './screens/ScheScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names
const homeName = "Home";
const scheName = "Schedule";
const profileName = "Profile";
const SettingsName = "Setting";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Schedule') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'person' : 'person-outline';
          } 

          return <Ionicons name={iconName} size={'20px'} color={color} />;
        },
        activeTintColor: '#0A9FAC',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 15 },
        style: { padding: 10, height: 70, }
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={scheName} component={ScheScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
      <Tab.Screen name={SettingsName} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MyTabs/>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}