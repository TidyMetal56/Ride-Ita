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
import SelectCountry from "../components/SelectCountry";

import { Alert } from 'react-native';

// Firebase imports
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from '../utils/firebaseConfig';
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseConfig);

// Screens names
import screen from "../utils/screenNames";

const SignUpScreen = ({ navigation }) => {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [control, setControl] = useState('')

  const [selectedValue, setSelectedValue] = useState('');

  const onValueChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    const auth = getAuth(firebaseConfig);

    onAuthStateChanged(auth, (user) => {
      if(user) {
        navigation.navigate(screen.homestack);
      }
    });
  }, [])

  const saveUser = async (data) => {
    const docUsersRef = doc(collection(db, "users"));
    await setDoc(docUsersRef, data);
  }

  const signup = () => {
    const data = {
      mail,
      password,
      phone,
      phoneCode: selectedValue,
      control,
      controlCode: selectedValue
    }

    console.log(data);
    const auth = getAuth(firebaseConfig);
    createUserWithEmailAndPassword(auth, mail, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      console.log(user.uid);

      saveUser(data);


      navigation.navigate(screen.authenticated);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);

      if (errorCode === "auth/email-already-in-use") {
        Alert.alert('Error', 'Email already in use', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      } else if (errorCode === "auth/network-request-failed") {
        Alert.alert('Error', 'Network request failed', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      } else if (errorCode === "auth/weak-password"){
        Alert.alert('Error', 'Password should be at least 6 characters', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      } else {
        console.log(errorCode);
        console.log(errorMessage);
        console.log(error);
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
            <Heading style={styles.headings}>Sign Up</Heading>
          </Box>

          <Heading style={styles.smallHeading}>
            Please, fill the fields:
          </Heading>

          <HStack flex={2} space={2}>
            <Box flex={1}>
              <FormControl.Label>Code</FormControl.Label>

              <SelectCountry 
                selectedValue={selectedValue}
                onValueChange={onValueChange}
              />
            </Box>

            <Box flex={3}>
              <FormControl>
                <FormControl.Label>Phone Number</FormControl.Label>
                <Input 
                  onChangeText={text => setPhone(text)}
                />
              </FormControl>
            </Box>
          </HStack>

          <HStack flex={2} space={2}>
            <Box flex={1}>
              <FormControl.Label>CAMPUS</FormControl.Label>
              <SelectCountry 
                selectedValue={selectedValue}
                onValueChange={onValueChange}
              />
            </Box>

            <Box flex={3}>
              <FormControl>
                <FormControl.Label>Control number</FormControl.Label>
                <Input type="text" 
                  onChangeText={text => setControl(text)}
                />
              </FormControl>
            </Box>
          </HStack>

          <Box flex={2}>
            <FormControl flex={1}>
              <FormControl.Label>Institute Mail</FormControl.Label>
              <Input width={"100%"} type="text" onChangeText={text => setMail(text)} />
            </FormControl>
          </Box>

          <Box flex={2}>
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
              onPress={signup}
            >
              Sign Up
            </Button>
          </Box>

          <Box flex={2} alignSelf={"center"}>
            <Link mt={60} onPress={() => navigation.navigate(screen.login)} colorScheme="cyan">
              Already have account? find It
            </Link>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};

export default SignUpScreen;
