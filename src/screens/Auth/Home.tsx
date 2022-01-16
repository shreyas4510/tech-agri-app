import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {homeStyle} from '../../styles/homeStyles';
import LoginModal from './LoginModal';
import Constants from './Constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function Home({ navigation } : Props) {
  const [loginState, setloginState] = useState({
    flag: '',
    status: false,
  });

  const resetLoginState = () => {
    setloginState({
      flag: '',
      status: false,
    });
  };

  const updateLoginState = (value : string) => {
    setloginState({
      flag: value,
      status: true,
    });
  }

  const onSuccess = () => {
    setloginState({
      flag: '',
      status: false,
    });
    navigation.navigate('Menu')
  }

  return (
    <ImageBackground
      source={require('../../assets/Images/home_background.png')}
      style={homeStyle.fullFlex}>
      <View style={homeStyle.logoContainer}>
        <Image
          source={require('../../assets/Images/home_screen_logo.png')}
          style={homeStyle.logoImages}></Image>
      </View>
      <View style={homeStyle.fullFlex}>
        <TouchableOpacity
          style={homeStyle.signupButtonContainer}
          onPress={() => {
            setloginState({
              flag: Constants.SIGNUP_STATE,
              status: true,
            });
          }}>
          <Text style={homeStyle.signupButton}>Let's Go...</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setloginState({
              flag: Constants.LOGIN_STATE,
              status: true,
            });
        }}>
          <Text style={homeStyle.loginText}>Already have account? Login</Text>
        </TouchableOpacity>
      </View>
      <LoginModal
        flag={loginState.flag}
        status={loginState.status}
        resetLoginState={resetLoginState}
        updateLoginState={updateLoginState}
        onSuccess={onSuccess}
      />
    </ImageBackground>
  );
}

type RootStackParamList = {
  Menu: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'Menu'>;
