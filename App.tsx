import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import SplashScreen from "react-native-splash-screen";
import Home from './src/screens/Auth/Home';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, [])

  return (
    <SafeAreaView style={{ flex : 1 }} >
      <Home />
    </SafeAreaView>
  );
};

export default App;
