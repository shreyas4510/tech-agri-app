import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { homeStyle } from '../../styles/home';

export default function Home(props: any) {
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
          style={homeStyle.signupButtonContainer}>
          <Text
            style={homeStyle.signupButton}>
            Let's Go...
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={homeStyle.loginText}>
            Already have account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
