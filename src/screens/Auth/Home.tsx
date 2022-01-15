import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {homeStyle} from '../../styles/home';
import LoginModal from './LoginModal';
import Constants from './Constants';

export default function Home(props: any) {
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
      />
    </ImageBackground>
  );
}
