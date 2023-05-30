import React from "react";

// React navigation imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens names
import screen from "../utils/screenNames";

// Screens imports
import AuthenticatedScreen from "../screens/AuthenticatedScreen";
import StartScreen from "../screens/StartScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen"
import HomeStackNavigator from "./HomeStack";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screen.start}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={screen.start} component={StartScreen} />
      <Stack.Screen name={screen.signUp} component={SignUpScreen} />
      <Stack.Screen name={screen.login} component={LoginScreen} />
      <Stack.Screen
        name={screen.authenticated}
        component={AuthenticatedScreen}
      />

      <Stack.Screen
        name={screen.homestack}
        component={HomeStackNavigator}
      />

    </Stack.Navigator>
  );
};

export default AppStack;
