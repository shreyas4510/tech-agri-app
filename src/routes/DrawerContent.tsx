import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { View, Image } from 'react-native'
import { Text } from 'react-native-elements';
import { Avatar, Drawer } from "react-native-paper";
import IIcons from "react-native-vector-icons/Ionicons";
import AIcons from "react-native-vector-icons/AntDesign";
import { colors } from '../assets/colors';
import EIcon from 'react-native-vector-icons/FontAwesome';

const ICON_SIZE = 18;
export default function DrawerContent(props : any) {
    return (
        <View style={{ marginTop : 20, flex : 1 }}>
            <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props}>
                <View style={{ flex : 1 }}>
                    <Drawer.Section
                        style={{
                            flexDirection : 'row',
                            alignItems : 'center'
                        }}
                    >
                        <Avatar.Image
                            size={80}
                            source={{
                                uri : 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
                            }}
                            style={{ margin : 15 }}
                        />
                        <Text style={{
                            fontWeight : 'bold',
                            fontSize : 17
                        }}>Shreyas Deshmukh</Text>
                    </Drawer.Section>
                    <Drawer.Section title="Category">
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                    style={{
                                    height: ICON_SIZE,
                                    width: ICON_SIZE,
                                    }}
                                    source={require('../assets/Images/vegetable.png')}
                                />
                            )}
                            label="Vegetables"
                            onPress={() => {
                                props.navigation.navigate("Settings")
                            }}
                        />
                         <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                    style={{
                                    height: ICON_SIZE,
                                    width: ICON_SIZE,
                                    }}
                                    source={require('../assets/Images/fruit.png')}
                                />
                            )}
                            label="Fruits"
                            onPress={() => {
                                props.navigation.navigate("Settings")
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                    style={{
                                    height: ICON_SIZE,
                                    width: ICON_SIZE,
                                    }}
                                    source={require('../assets/Images/spices.png')}
                                />
                            )}
                            label="Spices"
                            onPress={() => {
                                props.navigation.navigate("Settings")
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                    style={{
                                    height: ICON_SIZE,
                                    width: ICON_SIZE,
                                    }}
                                    source={require('../assets/Images/pulses.png')}
                                />
                            )}
                            label="Pulses"
                            onPress={() => {
                                props.navigation.navigate("Settings")
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                    style={{
                                    height: ICON_SIZE,
                                    width: ICON_SIZE,
                                    }}
                                    source={require('../assets/Images/grain.png')}
                                />
                            )}
                            label="Grains"
                            onPress={() => {
                                props.navigation.navigate("Settings")
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                    style={{
                                    height: ICON_SIZE,
                                    width: ICON_SIZE,
                                    }}
                                    source={require('../assets/Images/home_made.png')}
                                />
                            )}
                            label="Home-Made"
                            onPress={() => {
                                props.navigation.navigate("Settings")
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                    style={{
                                    height: ICON_SIZE,
                                    width: ICON_SIZE,
                                    }}
                                    source={require('../assets/Images/other_crops.png')}
                                />
                            )}
                            label="Other Crops"
                            onPress={() => {
                                props.navigation.navigate("Settings")
                            }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Rental">
                        <DrawerItem
                                icon={({ color, size }) => (
                                    <Image
                                        style={{
                                        height: ICON_SIZE,
                                        width: ICON_SIZE,
                                        }}
                                        source={require('../assets/Images/vehicles.png')}
                                    />
                                )}
                                label="Vehicles"
                                onPress={() => {
                                    props.navigation.navigate("Settings")
                                }}
                            />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                    style={{
                                    height: ICON_SIZE,
                                    width: ICON_SIZE,
                                    }}
                                    source={require('../assets/Images/labour.png')}
                                />
                            )}
                            label="Labours"
                            onPress={() => {
                                props.navigation.navigate("Settings")
                            }}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                    style={{
                                    height: ICON_SIZE,
                                    width: ICON_SIZE,
                                    }}
                                    source={require('../assets/Images/cart.png')}
                                />
                            )}
                            label="Cart"
                            onPress={() => {
                                props.navigation.navigate("Settings")
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <EIcon 
                                    name="user-o" 
                                    color={color} 
                                    size={ICON_SIZE} 
                                />
                            )}
                            label="My Account"
                            onPress={() => {
                                props.navigation.navigate("Settings")
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <IIcons
                                    name="settings-outline"
                                    color={colors.muted_text}
                                    size={ICON_SIZE}
                                />
                            )}
                            label="Settings"
                            onPress={() => {
                                props.navigation.navigate("Settings")
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <AIcons
                                name="logout"
                                color={colors.muted_text}
                                size={ICON_SIZE}
                            />
                        )}
                        label="Sign Out"
                        onPress={() => {
                            props.navigation.navigate("Home")
                        }}
                    />
            </Drawer.Section>
        </View>
    )
}