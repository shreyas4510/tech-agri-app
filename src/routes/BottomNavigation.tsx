import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from "react";
import AIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';
import Menu from '../screens/Home/Menu';
import Profile from '../screens/Profile/Profile';
import Sells from '../screens/Sells/Sell';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = ({ navigation, route  } : any) => {
  return (
    <Tab.Navigator
      initialRouteName="Menu_List"
      activeColor={ '#7ac713' }
      inactiveColor={ "#6a6a6a" }
      barStyle={{ backgroundColor: '#ffffff' }}
    >
      <Tab.Screen
        name="Menu_List"
        component={Menu}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AIcon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Sell"
        component={Sells}
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
        component={Profile}
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