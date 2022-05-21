import React from 'react';
import { View, Text, Image, FlatList, Dimensions } from 'react-native';
import { Badge, Card } from 'react-native-paper';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import EIcon from 'react-native-vector-icons/Entypo'
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MAIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FOIcon from 'react-native-vector-icons/Fontisto'
import { Vegetables } from '../../components/constants/MenuConstants';

export default function ProductDetails({ navigation }) {
        const renderItem = ( obj : any) => {
            return (
                <View style={{ flex : 1, maxHeight: 200, marginHorizontal : 5, alignItems : 'center' }} >
                    <Card style={{ 
                        flex : 1,
                        backgroundColor : 'white', 
                        shadowColor: '#7c7c7c',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.8,
                        shadowRadius: 1,
                        elevation : 8, 
                        borderColor: '#7c7c7c', 
                        borderWidth: 0.3
                    }}>
                        <Card.Content style={{ flex : 1, minWidth: 150 }}>
                            <View style={{ flex : 4, alignItems: 'center', justifyContent : 'center' }} >
                                <Image 
                                    source={{ uri: obj.item.image_url }} 
                                    style={{ resizeMode : 'contain', width : "100%", height : "100%" }}
                                />
                            </View>
                            <Text style={{ flex:1, color : '#7ac713', fontWeight : '600', textAlign : 'center' }}>{ obj.item.name }</Text>
                            <View style={{ flex:1, flexDirection:'row', justifyContent: 'center', marginVertical: 2, alignItems: 'center' }}>
                                <Text style={{  color:'black', fontWeight:'bold' }} >₹30</Text>
                                <Text style={{  textDecorationLine : 'line-through', marginLeft: 10 }} >₹50</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <AntIcon name="star" size={15} color='green' style={{ marginLeft: 1 }}/>
                                <AntIcon name="star" size={15} color='green' style={{ marginLeft: 1 }}/>
                                <AntIcon name="star" size={15} color='green' style={{ marginLeft: 1 }}/>
                                <AntIcon name="star" size={15} color='green' style={{ marginLeft: 1 }}/>
                                <AntIcon name="star" size={15} color='green' style={{ marginLeft: 1 }}/>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            )   
        } 

  return (            
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex : 4 }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 3, position: 'relative' }}>
                <Image
                    source={{ uri : "https://media.istockphoto.com/photos/bananas-picture-id174895068?k=20&m=174895068&s=170667a&w=0&h=NrFOzgp6S89K3Gs2SZopsOavBzf9-nty6_K5YDip3yI=" }}
                    style={{ width: "100%", minHeight: Dimensions.get("window").height / 1.8 }}
                />
                <View style={{ position: 'absolute', flexDirection: "row", width:'100%', justifyContent: "space-between", paddingHorizontal: 10 }}>
                    <TouchableOpacity style={{ marginTop: 10 }}><EIcon name='chevron-left' size={24} color='white'/></TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ position: 'relative', width : 32, marginTop: 10}}>
                            <FAIcon name='shopping-cart' size={24} color='white'/>
                            <Badge style={{ position: 'absolute', marginTop: -5 }}>3</Badge> 
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor:'white', height: 80 }}>
                <Card style={{ 
                    height: 115, 
                    width: 140, 
                    backgroundColor: 'white', 
                    marginTop: -50,
                    shadowColor: "#7c7c7c",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 1,
                    elevation : 8,
                    borderRadius: 6
                }}>
                    <View style={{ alignItems: 'center', justifyContent:'center', height:'100%' }}>
                        <Text style={{ fontSize: 24, color:'black', fontWeight:'bold', marginVertical: 2 }} >Banana</Text>
                        <View style={{ flexDirection:'row', justifyContent: 'center', marginVertical: 2 }}>
                            <Text style={{ fontSize: 17, color:'black', fontWeight:'bold' }} >₹30</Text>
                            <Text style={{ fontSize: 17, textDecorationLine : 'line-through', marginLeft: 10 }} >₹50</Text>
                        </View>
                        <Badge style={{ marginRight: 'auto', marginLeft: 'auto', marginVertical: 2, borderRadius: 5, fontWeight: "bold", paddingHorizontal: 5, backgroundColor: '#78be20', color: 'white' }}>20% OFF</Badge> 
                    </View>
                </Card>
                <View style={{ height: 45, flexDirection:'row' }}>
                    <Text style={{ height: "100%", width: 50, backgroundColor: '#878c0d', textAlign:'center', textAlignVertical: 'center', fontSize: 18, color:'white', fontWeight:'bold' }} >-</Text>
                    <Text style={{ height: "100%", width: 50, backgroundColor: '#7d820e', textAlign:'center', textAlignVertical: 'center', fontSize: 18, color:'white', fontWeight:'bold' }} >2</Text>
                    <Text style={{ height: "100%", width: 50, backgroundColor: '#878c0d', textAlign:'center', textAlignVertical: 'center', fontSize: 18, color:'white', fontWeight:'bold' }} >+</Text>
                </View>
            </View>
            <View style={{ flex: 2, backgroundColor: 'white' }}>
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ marginVertical: 5, color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec sapien dictum, mattis arcu suscipit.</Text>
                    <View style={{ backgroundColor: "#78be20", flexDirection: 'row', alignItems:'center', justifyContent: 'center', padding: 5, marginVertical: 5, width: 100, borderRadius: 5 }}>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>4.2</Text>
                        <AntIcon name="star" size={25} color='white' style={{ marginLeft: 10 }}/>
                    </View>
                </View>
                <View style={{ minHeight: 280, marginHorizontal: 10 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', marginVertical: 15 }}>Similar Products</Text>
                    <FlatList
                        data={Vegetables}
                        horizontal={true}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </ScrollView>
        <View style={{ maxHeight: 50, flexDirection: 'row' }}>
            <View style={{ flex: 1, borderColor: '#7c7c7c', borderWidth: 0.2 }}>
                <TouchableOpacity style={{ height: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor:'white' }}>
                        <MAIcon name='cart-plus' color="black" size={18}/>
                        <Text style={{ color: 'black', fontWeight:'bold', marginHorizontal: 5 }}>ADD TO CART</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, borderColor: '#fff', borderWidth: 0.2 }}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor:'#78be20' }}>
                        <FOIcon name='forward' color="white" size={12}/>
                        <Text style={{ color: 'white', fontWeight:'bold', marginHorizontal: 5 }}>BUY NOW</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View> 
    </View>
  );
}
