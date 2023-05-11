import * as React from 'react';
import { Box, Heading, Image, Text, Center, Stack, NativeBaseProvider, ScrollView, Spacer } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScheScreen = () => {
    return (
        <ScrollView>
            <Center>
                <Spacer height={5} />
                <Heading> Mi agenda</Heading>
                <Spacer height={5} />
            </Center>            
            <Box alignItems="center">
                <Box w="300" maxW="300" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Box>
                        <Center>
                            <Image source={require('../img/ManuelTurizo.png')} width={'100%'} height={170} alt="ManuelTurizo" />
                        </Center>
                        <Center bg="#0A9FAC" _dark={{
                            bg: "violet.400"
                        }} _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            29 de Abril
                        </Center>
                    </Box>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                Manuel Turizo
                            </Heading>
                            <Text fontSize="xs" _light={{
                                color: "#0A9FAC"
                            }} _dark={{
                                color: "#0A9FAC"
                            }} fontWeight="500" ml="-0.5" mt="-1">
                                Foro de las estrellas
                            </Text>
                            <Ionicons name='remove-circle-outline' size={25} color='#0A9FAC' />
                        </Stack>
                    </Stack>
                </Box>

                <Spacer height={5} />
                <Box w="300" maxW="300" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Box>
                        <Center>
                            <Image source={require('../img/biza.jpg')} width={'100%'} height={170} alt="Dimitri Vegas" />
                        </Center>
                        <Center bg="#0A9FAC" _dark={{
                            bg: "violet.400"
                        }} _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            6 de Mayo
                        </Center>
                    </Box>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                Bizarrap
                            </Heading>
                            <Text fontSize="xs" _light={{
                                color: "#0A9FAC"
                            }} _dark={{
                                color: "#0A9FAC"
                            }} fontWeight="500" ml="-0.5" mt="-1">
                                Foro de las estrellas
                            </Text>
                            <Ionicons name='remove-circle-outline' size={25} color='#0A9FAC' />

                        </Stack>
                    </Stack>
                </Box>

            </Box>
            <Spacer height={5} />
        </ScrollView>
    );
}
export default () => {
    return (
        <NativeBaseProvider>
            <ScheScreen />
        </NativeBaseProvider>
    );
};
