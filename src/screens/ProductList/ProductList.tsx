import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { Text } from 'react-native-elements';
import { CategoriesItems } from '../../components/constants/CategoriesConstant';
import AIcons from "react-native-vector-icons/AntDesign";
import { Badge } from 'react-native-elements/dist/badge/Badge';

export default function ProductList() {

  const renderItem = (product : any) => {
        const {item} = product 
        return (
            <View style={{ flex: 1, margin : 10, borderWidth : 1, borderColor: '#e2dede', height: 200,
            borderBottomRightRadius : 20, 
            borderTopLeftRadius : 20, }}>
                <View style={{ flex : 2, position :'relative'}}>
                    <Image 
                        source={{ uri: item.image_url }} 
                        style={{ 
                            position : 'absolute',
                            resizeMode : 'cover', 
                            width : "100%", 
                            height : "100%",
                            borderTopLeftRadius : 20,
                            borderBottomRightRadius : 20
                        }}
                    />
                    {
                        item.discount.status ?
                            <Badge 
                                value={`${ item.discount.discount_percent } %`}
                                badgeStyle={{ backgroundColor : '#ffb93f', height : 50, width : 50, borderRadius : 100, borderWidth : 0, alignSelf : 'flex-start', marginTop : -10, marginLeft : -10 }}
                                textStyle={{ fontWeight : 'bold' }}
                            />
                            :
                            <></>
                    }
                    <View style={{ flex : 1, justifyContent : 'flex-end' }}>
                        <Badge
                            value={() => (
                                <>
                                    {
                                        item.discount.status ?
                                        <View style={{ flexDirection : 'row' }}>
                                            <Text style={{ fontWeight: 'bold', color : '#7c7c7c', textDecorationLine : 'line-through', fontStyle :'italic', marginRight : 5 }}>{ item.original_price  } rs</Text>
                                            <Text style={{ fontWeight: 'bold', color : 'white' }}>{ item.discount.discount_price } rs</Text>
                                        </View>
                                        :
                                            <Text style={{ fontWeight: 'bold', color : 'white' }}>{ item.original_price  } rs</Text>
                                    }
                                </>
                            )}
                            badgeStyle={{ backgroundColor : '#7ac713', marginBottom : -10, height : 25, paddingHorizontal : 10, borderRadius : 100, borderWidth : 0 }}
                            textStyle={{ fontWeight : 'bold' }} 
                        />
                    </View>
                </View>
                <View style={{ borderBottomRightRadius : 20, flex : 1, marginHorizontal : 10, justifyContent : 'flex-end' }}>
                        <Text style={{ fontWeight : 'bold', fontSize : 16 }} >{ item.name }</Text>
                        <View style={{ flexDirection : 'row', alignItems : 'center' }}>
                            <Text style={{ fontWeight : '800' }}>Available Quantity : { item.available_quantity }</Text>
                            <Text style={{ fontWeight : '800' }}> { item.unit }</Text>
                        </View>
                        <View style={{ flexDirection : 'row', alignItems : 'center', backgroundColor : '#7ac713', width : 50, borderRadius : 20, justifyContent : 'center', padding : 3 }}>
                            <Text style={{ fontWeight : '800', marginHorizontal : 5, color : 'white' }}>{ item.rating }</Text>
                            <AIcons name="star" color="gold" size={16} />
                        </View>
                </View>
            </View>
        )
    }

  return (
    <>
        {
            CategoriesItems.length ? 
                <FlatList
                    data={CategoriesItems}
                    renderItem={renderItem}
                    numColumns={2}
                    style={{ marginHorizontal: 10 }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                />   
            : 
                <></>
        }
    </>
  );
}
