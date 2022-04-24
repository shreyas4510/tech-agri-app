import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { Text } from 'react-native-elements';
import { CategoriesItems } from '../../components/constants/CategoriesConstant';
import { Card } from 'react-native-paper';
import MainHeader from '../common/MainHeader';

export default function ProductList({ navigation }) {
    const renderItem = (product: any) => {
        const {item} = product 
        return (
            <Card style={{ flex: 1, margin: 10, borderRadius: 10, height: 230, shadowColor: "#7c7c7c",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,
            elevation : 8 }}>
                    <View style={{ flex : 2, position :'relative'}}>
                        <Image 
                            source={{ uri: item.image_url }} 
                            style={{ 
                                position : 'absolute',
                                resizeMode : 'cover', 
                                width : "100%", 
                                height : "100%",
                                borderTopRightRadius: 10,
                                borderTopLeftRadius: 10,
                                alignSelf: 'center'
                            }}
                        />

                    {item.discount.status ?
                    <View style={{width: 50, height: 50, marginLeft: -10, marginTop: -10 }}>
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
                    </View> : <></>}
                </View>
                <View style={{ flex : 1, margin: 10 }}>
                        <Text style={{ fontWeight : '700', color: 'black' }}>{ item.name }( {item.available_quantity}{ item.unit } )</Text>
                        {
                            item.discount.status ?
                            <View style={{ flexDirection : 'row' }}>
                                <Text style={{ color : '#7c7c7c', textDecorationLine : 'line-through', fontStyle :'italic', marginRight : 5, fontWeight : '700' }}>{ item.original_price  }</Text>
                                <Text style={{ color : '#63b051', fontWeight : '700' }}>₹ { item.discount.discount_price }</Text>
                            </View> :
                            <Text style={{ color : '#63b051', fontWeight : '700' }}>₹ { item.original_price  }</Text>
                        }
                </View>
            </Card>
        )
    }

  return (
    <View style={{ flex: 1 }}>
        <MainHeader label={"Test"} navigation={navigation}/>
        <View style={{ flex: 4, borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -30, backgroundColor: 'white' }}>
            {
                CategoriesItems.length ? 
                    <FlatList
                        data={CategoriesItems}
                        renderItem={renderItem}
                        numColumns={2}
                        style={{ marginHorizontal: 10, marginVertical: 15, backgroundColor: 'white' }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                    />
                :
                    <></>
            }
        </View>
    </View>
  );
}
