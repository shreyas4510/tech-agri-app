import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SplashScreen from "react-native-splash-screen";
import Home from './src/screens/Auth/Home';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, [])

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
