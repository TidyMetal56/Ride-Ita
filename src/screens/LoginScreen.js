import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  HStack,
  Link,
  View,
} from "native-base";
import styles from "../utils/styles";

import { Alert } from 'react-native';

// Firebase imports
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../utils/firebaseConfig';

// Screens names
import screen from "../utils/screenNames";

const LoginScreen = ({ navigation }) => {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    const auth = getAuth(firebaseConfig);
    signInWithEmailAndPassword(auth, mail, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log(user);

      navigation.navigate(screen.homestack);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);

      switch (error.code) {
        case "auth/wrong-password":
          Alert.alert('Error', 'Wrong Password', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          break;
    
        case "auth/user-not-found":
          Alert.alert('Error', 'User not found', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          break;
    
        case "auth/network-request-failed":
          Alert.alert('Error', 'Network Request Failed', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          break;
    
        case "auth/invalid-email":
          Alert.alert('Error', 'Invalid email', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          break;

        case "auth/internal-error":
          Alert.alert('Error', 'Internal error', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          break;
    
        default:
          break;
      }

    });
  }

  return (
    <Box style={styles.containerSign} safeArea>
      <Center alignSelf={"center"} width={"85%"} height="100%">
        <VStack style={styles.verticalStack}>
          <Box
            paddingBottom={5}
            flex={1}
            alignItems={"center"}
            marginBottom={"5"}
            justifyContent={"center"}
          >
            <Heading style={styles.headings}>Log in</Heading>
          </Box>

          <Box flex={1}>
            <FormControl flex={1}>
              <FormControl.Label>Institute Mail</FormControl.Label>
              <Input width={"100%"} type="text" onChangeText={text => setMail(text)} />
            </FormControl>
          </Box>

          <Box flex={1}>
            <FormControl flex={1}>
              <FormControl.Label>Password</FormControl.Label>
              <Input width={"100%"} type="password" onChangeText={text => setPassword(text)} />
            </FormControl>
          </Box>

          <Box flex={2} width="100%" alignItems="center">
            <Button
              alignSelf={"center"}
              style={styles.buttonCian}
              mt={2}
              onPress={login}
            >
              Log in
            </Button>
          </Box>

          <Box flex={2} alignSelf={"center"}>
            <Link mt={60} onPress={() => navigation.navigate(screen.signUp)} colorScheme="cyan">
              I'm a new user. Sing Up
            </Link>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};

export default LoginScreen;
