import React from "react";
import {
  VStack,
  Text,
  Box,
  Avatar,
  HStack,
  Heading,
  Button,
  Image,
  Center,
  View,
} from "native-base";
import styles from "../utils/styles";
import Ganzo from "../../assets/Ganzo.png";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screen from "../utils/screenNames";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Box alignSelf="center" flex={1} width="85%" height="100%" borderWidth={1}>
      <VStack space={2} alignItems="center">
        <Box alignItems="flex-start" marginBottom={5}>
          <Heading style={styles.headings}>Hola, Ganzo</Heading>
        </Box>

        <Box
          borderWidth={1}
          borderColor="red"
          borderRadius="full"
          overflow="hidden"
        >
          <Avatar size="2xl">
            <Image
              source={Ganzo}
              alt="Avatar"
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </Avatar>
        </Box>

        <Box
          flex={1}
          flexDirection="row"
          borderWidth={1}
          borderColor="red"
          borderRadius={10}
          p={5}
        >
          <VStack spacing={2} flex={1} justifyContent="center">
            <HStack justifyContent="center" mt={5}>
              <Button
                onPress={() => navigation.navigate(screen.ride)}
                borderWidth={1}
                borderColor="red"
                borderRadius={10}
                mr={2}
              >
                Quiero un viaje
              </Button>

              <Button
                onPress={() => navigation.navigate(screen.trip)}
                borderWidth={1}
                borderColor="red"
                borderRadius={10}
                ml={2}
              >
                Quiero un acompañante
              </Button>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default HomeScreen;
