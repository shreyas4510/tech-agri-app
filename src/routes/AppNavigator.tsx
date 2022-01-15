import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from "react";
import Home from '../screens/Auth/Home';
import Menu from '../screens/Home/Menu';

const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}

export default AppNavigator