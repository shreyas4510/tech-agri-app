import React, { useState } from 'react'
import { FlatList, FlatListProps, Image, Text, View, ViewProps } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card, TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../assets/colors'
import { Fruits, Grains, HomeMade, Pulses, Spices, Vegetables, Vehicles } from './constants'

interface ItemType {
    id : string;
    image_url: string;
    name: string;
}

export default function Menu() {
    const renderItem = ( obj : any) => {
        return (
            <View style={{ flex : 1, maxHeight: 160, marginHorizontal : 10, alignItems : 'center' }}>
                <Card style={{ 
                    flex : 1,
                    borderRadius : 40,
                    backgroundColor : 'white', 
                    shadowColor: colors.muted_text,
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 1,
                    elevation : 25
                }}>
                    <Card.Content style={{ flex : 1 }}>
                        <View style={{ flex : 1, alignItems: 'center', justifyContent : 'center' }} >
                            <Image 
                                source={{ uri: obj.item.image_url }} 
                                style={{ resizeMode : 'contain', width : 100, height : 100, borderRadius : 40 }}
                            />
                        </View>
                    </Card.Content>
                </Card>
                <Text style={{ marginTop: 10, color : '#7ac713', fontWeight : '600' }}>
                    { obj.item.name }
                </Text>
            </View>
        )   
    } 

    const renderListView = (data : Array<ItemType>, title : string) => (
        <View style={{ flex : 1, marginTop : 20, minHeight : 180 }}>
            <Text style={{ marginHorizontal : 30, marginBottom: 10, fontWeight : 'bold', color : '#7c7c7c' }}>{ title }</Text>
            <FlatList
                data={data}
                horizontal={true}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
            />
        </View>
    )

    return (
        <View style={{ flex : 1 }}>
            <View style={{ backgroundColor: 'black', flex : 1 }}>
                <Image 
                    source={{ uri : "https://www.livemorezone.com/wp-content/uploads/what-is-organic-farming.png" }} 
                    style={{ width: "100%", height : "100%"}}
                />
            </View>
            <View style={{ backgroundColor : 'white', flex : 2, borderTopLeftRadius : 50, borderTopRightRadius : 50, marginTop: -50 }} >
                <Card style={{ 
                    marginHorizontal : 60, 
                    marginTop : -80, 
                    borderRadius : 40, 
                    backgroundColor : 'white', 
                    minHeight: 180, 
                    shadowColor: colors.muted_text,
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 1,
                    elevation : 25
                }}>
                    <Card.Content style={{ flex : 1 }}>
                        <View style={{ flex: 1, flexDirection : 'row' }}>
                            <View style={{ flex : 4 }} >
                                <View style={{ flex : 3 }}>
                                    <Image 
                                            source={require('../../assets/Images/location.jpg') } 
                                            style={{ resizeMode : 'contain', width : '100%', height : '100%' }}
                                    />
                                </View>
                                <Text style={{ flex : 1, textAlign : 'center', fontWeight : 'bold', color : '#7c7c7c' }}>Ghatshendra, Aurangabad</Text>
                            </View>
                            <View style={{ flex : 1, alignItems : 'center' }} >
                                <View style={{ height: '100%', width: 1, backgroundColor: colors.muted_text }}></View>
                            </View>
                            <View style={{ flex : 4, alignItems : 'center', justifyContent : 'center' }} >
                                <View>
                                    <Image 
                                            source={require('../../assets/Images/weather_icon.jpg') } 
                                            style={{ resizeMode : 'contain', width : 70, height : 70 }}
                                    />
                                </View>
                                <Text style={{ textAlign : 'center', fontWeight : 'bold', color : '#7c7c7c' }}>Humidity : 85%</Text>
                                <Text style={{ textAlign : 'center', fontWeight : 'bold', color : '#7c7c7c' }}>Wind : 10km/h</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <View>
                    <TextInput
                        left={ <TextInput.Icon  name={() => <Icon name="search" color={colors.muted_text} size={20}/>}/> }
                        theme={{
                            colors : { text : '#7c7c7c' },
                            roundness : 50
                        }}
                        activeUnderlineColor="transparent"
                        underlineColor="transparent"
                        placeholder="Search your product"
                        style={{ 
                            marginHorizontal : 20, 
                            marginTop : 15,
                            marginBottom : 5,
                            paddingVertical : 0,
                            borderWidth : 1,
                            borderRadius : 50,
                            height : 40,
                            borderColor : '#f4f4f4',
                            backgroundColor : colors.white,
                            elevation : 7,
                            shadowColor: colors.muted_text,
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.8,
                            shadowRadius: 1,
                        }} 
                    />
                </View>
                <ScrollView 
                    style={{ flex : 1 }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}    
                >
                    { renderListView(Vegetables, "Vegetables") }
                    { renderListView(Fruits, "Fruits") }
                    { renderListView(Spices, "Spices") }
                    { renderListView(Grains, "Grains") }
                    { renderListView(Pulses, "Pulses") }
                    { renderListView(HomeMade, "Home Made") }
                    { renderListView(Vehicles, "Vehicles") }
                </ScrollView>
            </View>
        </View>
    )
}

