import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Card } from 'react-native-paper'
import CategoryHeader from '../common/CategoryHeader'

export default function Settings({ navigation }) {
    return (
        <CategoryHeader style={{ flex : 1 }} label={'Settings'} navigation={navigation}>
            <View style={{ flex:4, borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -30, paddingTop: 30, backgroundColor: 'white' }}>
                <Card style={{ 
                    marginTop: 10, 
                    marginHorizontal: 10, 
                    borderRadius: 10, 
                    elevation : 7,
                    shadowColor: "#7c7c7c",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 1
                }}>
                    <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ flexDirection: 'row' , alignItems : 'center' }}>
                            <Image 
                                source={require('../../assets/Images/set-pin.png')}
                                style={{ height: 25, width: 25 }}
                            />
                            <Text style={{ marginLeft : 10, fontSize: 16, fontWeight: 'bold', color: 'black' }}>Set Pin</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>
                <Card style={{ 
                    marginTop: 10, 
                    marginHorizontal: 10, 
                    borderRadius: 10, 
                    elevation : 7, 
                    shadowColor: "#7c7c7c",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 1 
                }}>
                    <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ flexDirection: 'row' , alignItems : 'center' }}>
                            <Image 
                                source={require('../../assets/Images/language-logo.png')}
                                style={{ height: 25, width: 25 }}
                            />
                            <Text style={{ marginLeft : 10, fontSize: 16, fontWeight: 'bold', color: 'black' }}>Language</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>
            </View>
        </CategoryHeader>
    )
}
