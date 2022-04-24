import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigator from "./BottomNavigation";
import DrawerContent from "./DrawerContent";
import Settings from "../screens/Settings/Settings";
import Cart from "../screens/Cart/Cart";
import ProductList from "../screens/ProductList/ProductList";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator 
    screenOptions={({ navigation }) => ({
      drawerType: 'front',
      headerShown: false
    })}
    drawerContent={props => <DrawerContent { ...props }/>}>
      <Drawer.Screen
        name="BottomTabs"
        component={BottomNavigator}
      />
      <Drawer.Screen
        name="Categories"
        component={ProductList}
        options={{ drawerLabel: 'Vegetables' }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{ drawerLabel: 'My Bag' }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ drawerLabel: 'Settings' }}
      />
    </Drawer.Navigator>
  );
}