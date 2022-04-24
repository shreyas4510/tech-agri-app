import React from "react";
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { Badge } from 'react-native-paper';
import EIcon from 'react-native-vector-icons/Entypo'
import FAIcon from 'react-native-vector-icons/FontAwesome5'

interface HeaderProps {
    label : any,
    navigation : any
}

export default function MainHeader({ label } : HeaderProps) {
  return (
    <LinearGradient
        colors={['#0bab64', '#3bb78f']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{ flex: 1, maxHeight: 100 }}
    >
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 15, marginTop: 25 }}>
            <EIcon name='chevron-left' size={24} color='white'/>
            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>{label}</Text>
            <View style={{ position: 'relative', width : 32}}>
                <FAIcon name='shopping-cart' size={24} color='white'/>
                <Badge style={{ position: 'absolute', marginTop: -5 }}>3</Badge> 
            </View>
        </View>
  </LinearGradient>

    );
}
