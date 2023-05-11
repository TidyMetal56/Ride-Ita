import * as React from 'react';
import { Box, Heading, Image, Text, Center, HStack, Stack, NativeBaseProvider, ScrollView,Spacer, Avatar, Button } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreen = () => {
    return <ScrollView>
        <Center>
            <Spacer height={5} />           
                <Avatar bg="green.500"  size="2xl" source={{
                     uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                 }}>
                    AJ
                </Avatar>
            <Spacer height={5} />
        </Center>
        <Box alignItems="center">
            <HStack space={2}>
            <Button>
                I can give a ride 
            </Button>
            <Button>
                I need a ride
            </Button>
            </HStack>
        </Box>
    </ScrollView> 
    
}
export default () => {
    return (
        <NativeBaseProvider>
            <HomeScreen />
        </NativeBaseProvider>
    );
};



