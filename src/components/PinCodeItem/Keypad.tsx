import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';
import ADIcons from "react-native-vector-icons/AntDesign";
import IOIcons from "react-native-vector-icons/Ionicons";
import {KeypadStyles} from '../../styles/keypadStyles';


type PIN_ACTION = 'insert' | 'delete' | 'submit'
interface AppProps {
  pin : number;
  handlePinOnChange : (value : string, action : PIN_ACTION) => void;
}

export default function Keypad({pin, handlePinOnChange} : AppProps) {
  const Button = (value : string) => (
      <TouchableOpacity key={value} disabled={ pin >= 6 ? true : false } onPress={() => { handlePinOnChange(value, 'insert') }} style={KeypadStyles.touchableOpacityStyle}>
            <Card style={KeypadStyles.cardStyle}>
                <Card.Content>
                <View>
                    <Text style={KeypadStyles.textStyle}>{ value }</Text>
                </View>
                </Card.Content>
            </Card>
      </TouchableOpacity>
  )

  return (
    <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
      <View style={KeypadStyles.dividerView}>
        {
          [ '1', '2', '3' ].map((obj) => (
            Button(obj)
          ))
        }
      </View>
      <View style={KeypadStyles.dividerView}>
        {
          [ '4', '5', '6' ].map((obj) => (
            Button(obj)
          ))
        }
      </View>
      <View style={KeypadStyles.dividerView}>
        {
          [ '7', '8', '9' ].map((obj) => (
            Button(obj)
          ))
        }
      </View>
      <View style={KeypadStyles.dividerView}>
        <TouchableOpacity style={{
              marginVertical : 5,
              marginHorizontal : 13,
              height : 50,
              minWidth : 45
          }}
          onPress={() => {
            handlePinOnChange('', 'delete') 
          }}
          >
            <Card>
                <Card.Content>
                <View>
                    <IOIcons name="md-backspace-outline" color="black" size={18} />
                </View>
                </Card.Content>
            </Card>
        </TouchableOpacity>
        { Button('0') }
        <TouchableOpacity style={{
              marginVertical : 5,
              marginHorizontal : 13,
              height : 50,
              minWidth : 45
          }}
          onPress={() => {
            handlePinOnChange('', 'submit') 
          }}
          >
            <Card>
                <Card.Content>
                <View>
                    <ADIcons name="enter" color="black" size={18} />
                </View>
                </Card.Content>
            </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
}
