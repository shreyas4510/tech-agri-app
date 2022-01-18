import React from 'react'
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Card } from 'react-native-paper'
import { colors } from '../../assets/colors'
import MenuHeader from '../common/MenuHeader'

export default function Profile(props) {
    return (
        <View style={{ flex : 1 }}>
            <MenuHeader navigation={props.navigation} />
            <View 
                // style={{ backgroundColor : 'white', flex : 2, borderTopLeftRadius : 50, borderTopRightRadius : 50, marginTop: -50 }} 
                    style={{
                        flex : 2,
                        backgroundColor : 'white',
                        transform : [{ scaleX : 1.6 }],
                        borderTopStartRadius : 200,
                        borderTopEndRadius : 200, 
                        marginTop: -50
                    }}
            >
                <View style={{ flex : 1, transform : [{ scaleX : 0.65 }] }}>
                    <View style={{ alignItems : 'center' }}>
                        <Avatar.Image 
                            size={130} 
                            source={{ uri  : "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" }} 
                            style={{ marginTop : -50, elevation : 25 }}
                        />
                    </View>
                    <ScrollView>
                        <View style={{ margin : 25 }}>
                                <Text style={{ fontWeight : 'bold', color : '#7c7c7c' }}>MY DETAILS</Text>
                                <Card style={{ elevation : 25, shadowColor: colors.muted_text, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 1, marginTop : 15, borderRadius : 25, borderWidth : 1, borderColor : '#eee' }}>
                                    <Card.Content>
                                        <View style={{ marginVertical : 5 }}>
                                            <Text style={{ fontWeight : '500', color : colors.muted_text }}>User Name : </Text>
                                            <Text style={{ fontWeight : 'bold', color : colors.black, marginTop : 4 }}>Shreyas Deshmukh</Text>
                                        </View>
                                        <View style={{ height : 1, width: "95%", marginLeft : 'auto', marginRight : 'auto', marginVertical : 10, backgroundColor: "#eee" }}></View>
                                        <View style={{ marginVertical : 5 }}>
                                            <Text style={{ fontWeight : '500', color : colors.muted_text }}>Contact : </Text>
                                            <Text style={{ fontWeight : 'bold', color : colors.black, marginTop : 4 }}>9370806369</Text>
                                        </View>
                                        <View style={{ height : 1, width: "95%", marginLeft : 'auto', marginRight : 'auto', marginVertical : 10, backgroundColor: "#eee" }}></View>
                                        <View style={{ marginVertical : 5 }}>
                                            <Text style={{ fontWeight : '500', color : colors.muted_text }}>Address : </Text>
                                            <Text style={{ fontWeight : 'bold', color : colors.black, marginTop : 4 }}>Ghatshendra, tal : Kannad, dist : Aurangabad</Text>
                                        </View>
                                        <View style={{ height : 1, width: "95%", marginLeft : 'auto', marginRight : 'auto', marginVertical : 10, backgroundColor: "#eee" }}></View>
                                        <View style={{ marginVertical : 5 }}>
                                            <TouchableOpacity>
                                                <View style={{ flexDirection : 'row', alignItems : 'center', justifyContent: 'center' }}>
                                                    <Image
                                                        style={{ height: 28, width : 28 }}
                                                        source={require('../../assets/Images/orders.jpg')}
                                                    />
                                                    <Text style={{ fontWeight : 'bold', color : colors.black, marginLeft : 20, textTransform : 'uppercase' }}>My Orders</Text>    
                                                </View>    
                                            </TouchableOpacity>   
                                        </View>
                                        <View style={{ height : 1, width: "95%", marginLeft : 'auto', marginRight : 'auto', marginVertical : 10, backgroundColor: "#eee" }}></View>
                                        <View style={{ marginVertical : 5 }}>
                                            <TouchableOpacity>
                                                <View style={{ flexDirection : 'row', alignItems : 'center', justifyContent: 'center' }}>
                                                    <Image
                                                        style={{ height: 28, width : 28 }}
                                                        source={require('../../assets/Images/sales.png')}
                                                    />
                                                    <Text style={{ fontWeight : 'bold', color : colors.black, marginLeft : 20, textTransform: 'uppercase' }}>My Sales</Text>    
                                                </View>    
                                            </TouchableOpacity>   
                                        </View>
                                    </Card.Content>
                                </Card>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

