import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements';
import { Avatar, Drawer } from "react-native-paper";
import IIcons from "react-native-vector-icons/Ionicons";
import AIcons from "react-native-vector-icons/AntDesign";

export default function DrawerContent(props : any) {
    return (
        <View style={{ marginTop : 20, flex : 1 }}>
            <DrawerContentScrollView {...props}>
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
                                <IIcons
                                    name="settings-outline"
                                    size={18}
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
                                size={18}
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