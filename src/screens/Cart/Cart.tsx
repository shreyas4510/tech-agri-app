import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../assets/colors';
import { BagItems } from '../../components/constants/BagConstants';
import { CartStyle } from '../../styles/cartStyles';
import { Badge } from 'react-native-elements';

export default function Cart() {

    const renderItem = ( cartObject : any) => {
        const { item } = cartObject        
        return (
            <View key={item.id} style={{ flex : 1 }}>
                    <View style={{ flex : 1, height : 150, flexDirection : 'row', marginVertical : 10 }}>
                        <View style={{ flex : 1, position : 'relative' }}>
                            <Image 
                            source={{ uri: item.image_url }} 
                            style={{ position : 'absolute', resizeMode : 'contain', width : "100%", height : "100%", borderRadius : 7, marginLeft : 5, marginTop : 5 }}
                        />
                            <View style={{ flexDirection: 'row' }}>
                        {
                            item.discount.status ? 
                            <View style={{width: 60, height: 60 }}>
                            <Image 
                                source={require('../../assets/Images/discount_badge.png')} 
                                style={{ 
                                    position : 'absolute',
                                    resizeMode : 'cover', 
                                    width : '100%', 
                                    height : '100%',
                                    borderTopRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    alignSelf: 'flex-start',
                                }}
                            />
                            <Text style={{ color: 'white', fontWeight: 'bold', marginTop:'auto', marginBottom:'auto', alignSelf: 'center' }}>{item.discount.discount_percent}%</Text>
                        </View>:
                            <>
                            </>
                        }
                        </View>
                    </View>
                        <View style={{ flex : 2, paddingLeft : 20, marginTop : 10 }}>
                            <Text style={{ color : '#5b5b5b', fontSize : 20, fontWeight : '800' }}>{ item.name }</Text>
                            <Text style={{ color : '#5b5b5b', fontWeight: '600' }} >{ item.description }</Text>
                            <View style={{ flexDirection : 'row', alignItems : 'flex-end', marginBottom : 10, flex : 1 }}>
                                <View style={{ flex : 5 }}>
                                    <Text style={ item.discount.status ? CartStyle.unused_price_style : CartStyle.used_price_style } >₹ { item.original_price }/kg</Text>
                                    { item.discount.status ? <Text style={ item.discount.status && CartStyle.used_price_style } >₹ { item.discount.discount_price }/kg</Text> : <></> }
                                </View>
                                <View style={{ flex : 5, flexDirection: 'row', justifyContent :'space-between', alignItems : 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor : '#f95553', width : 35, height : 35, alignItems : 'center', justifyContent : 'center', borderRadius : 7 }}>
                                        <Text style={{ fontSize : 22, color: 'white' }}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize : 16, color : '#5b5b5b', fontWeight : '500' }}>{ item.amount }</Text>
                                    <TouchableOpacity style={{ backgroundColor : '#5cc500', width : 35, height : 35, alignItems : 'center', justifyContent : 'center', borderRadius : 7 }}>
                                        <Text style={{ fontSize : 22, color: 'white' }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex : 1, alignItems : 'center' }} >
                        <View style={{ height: 1, width: "100%", backgroundColor: "#e8e3e3" }}></View>
                    </View>
            </View>
        )   
    } 

    return (
        <>
            <View style={{ margin : 10, backgroundColor: 'white' }}></View>
            { 
                BagItems.length ? 
                    <FlatList
                        data={BagItems}
                        renderItem={renderItem}
                        style={{ marginHorizontal: 10 }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                    />   
                :
                    <View style={{ flex : 1, flexDirection : 'row', marginVertical : 100 }} >
                        <Text style={{ color : 'black', flex : 1, fontSize : 25, fontWeight : '500', textAlign : 'center', marginTop : 25 }}>
                            Your basket is empty
                        </Text>
                        <View style={{ flex : 1, alignItems : 'center' }}>
                            <Image 
                                source={require('../../assets/Images/empty_cart.gif')} 
                                style={{ resizeMode : 'contain', width : 100, height : 100 }}
                            />
                        </View>
                    </View>
            }
        </>
        );
}
