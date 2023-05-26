// NativeBase
import { NativeBaseProvider } from "native-base";
// React navigation
import { NavigationContainer } from '@react-navigation/native';

// Stacks
import AppStack from './src/navigation/AppStack';
import { SafeAreaView } from "react-native";

// Safe area
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
        <NativeBaseProvider>
          <AppStack />
        </NativeBaseProvider>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
