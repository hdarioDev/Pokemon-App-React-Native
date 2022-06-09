import { StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import Navigation from "./src/navigation/Navigation"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from "./src/context/AuthContenxt"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#FF4343" />
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  )
}