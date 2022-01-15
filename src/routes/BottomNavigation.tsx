import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Test3 from '../screens/Test3';
import React, { useMemo } from "react";
import Test2 from '../screens/Test1';
import AIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = ({ navigation, route  } : any) => {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      activeColor={ '#7ac713' }
      inactiveColor={ "#6a6a6a" }
      barStyle={{ backgroundColor: '#ffffff' }}
    >
      <Tab.Screen
        name="Menu"
        component={Test3}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AIcon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Sell"
        component={Test2}
        options={{
          tabBarLabel: 'Sell',
          tabBarIcon: ({ color }) => (
            <Image
              style={{
                height: 26,
                width: 26,
                tintColor : color
              }}
              source={require('../assets/Images/vegetable&fruit.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Test2}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <EIcon name="user-o" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator