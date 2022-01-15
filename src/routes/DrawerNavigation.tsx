import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigator from "./BottomNavigation";
import DrawerContent from "./DrawerContent";
import { View } from "react-native";
import { colors } from "../assets/colors";
import IIcons from "react-native-vector-icons/Ionicons";
import FIcons from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native-elements";
import Settings from "../screens/Settings/Settings";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator 
    screenOptions={({ navigation }) => ({
      headerShown: false,
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: colors.white,
      },
      headerTitle: "Tech-Agri",
      headerRight: () => {
        return (
          <View style={{ flexDirection : 'row' }}>
            <TouchableOpacity 
              style={{ paddingLeft : 15, height : '100%', justifyContent : "center" }}
            >
              <FIcons name="search" size={20} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={{ paddingHorizontal : 15, height : '100%', justifyContent : "center" }}
              onPress={() => { }}>
              <Image
                style={{ height: 28, width : 28 }}
                source={require('../assets/Images/shopping-cart.png')}
              />
            </TouchableOpacity>
          </View>
        );
      },
      headerLeft: () => {
        return (
            <TouchableOpacity 
              style={{ paddingLeft : 15 }}
              onPress={() => {
                navigation.openDrawer()
            }}>
              <IIcons name="menu" size={24} />
            </TouchableOpacity>
        );
      },
    })}
    drawerContent={props => <DrawerContent { ...props }/>}>
      <Drawer.Screen
        name="Tech-agri"
        component={BottomNavigator}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ drawerLabel: 'Settings' }}
      />
    </Drawer.Navigator>
  );
}