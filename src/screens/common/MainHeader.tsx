import React from 'react';
import { Image, Platform, View } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MAIcon from 'react-native-vector-icons/MaterialIcons'

interface HeaderProps {
    label : any
}

export default function MainHeader({ label } : HeaderProps) {
  return (
    <View style={{ height :  Platform.OS === 'android' ? 55 : 70, alignItems : 'flex-end', flexDirection : 'row', marginHorizontal : 15 }}>
        {/* <MAIcon name="keyboard-backspace" color="black" size={26} style={{ marginTop : 12 }} /> */}
        <Text style={{ color : '#3d3a3a', fontSize : 26, fontWeight: 'bold', marginTop : 25 }}>{ label }</Text>
        <View style={{
            marginLeft: 'auto'
        }}>
        <TouchableOpacity>
            <Image
                style={{
                    height: 24,
                    width: 24,
                }}
                source={require('../../assets/Images/shopping-cart.png')}
            />
        </TouchableOpacity>
        </View>
    </View>
    );
}
