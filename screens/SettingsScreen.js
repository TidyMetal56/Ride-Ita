import * as React from 'react';
import { Box, Heading, Image, Text, Center, Stack, NativeBaseProvider, ScrollView, Spacer } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
    return (
        <ScrollView>
            <Center>
                <Spacer height={5} />
                <Heading> Settings</Heading>
                <Spacer height={5} />
            </Center>            
            <Spacer height={5} />
        </ScrollView>
    );
}
export default () => {
    return (
        <NativeBaseProvider>
            <SettingsScreen />
        </NativeBaseProvider>
    );
};
