import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import SplashScreen from "react-native-splash-screen";

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, [])

  return (
    <SafeAreaView>
      <View>
        <Text>
          Hello World
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
