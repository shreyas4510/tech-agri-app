import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Overlay, Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Snackbar, TextInput as PaperInput} from 'react-native-paper';
import {colors} from '../../assets/colors';
import {homeStyle} from '../../styles/home';
import Constants from './Constants';
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default function LoginModal(props: any) {
  const {flag, status, resetLoginState, updateLoginState} = props;
  const [phone, setphone] = useState('');
  const [error, seterror] = useState('');
  const [ otpCode, setotpCode ] = useState("");

  const onSignup = () => {
    console.log("Signup done");
    updateLoginState(Constants.VERIFY_OTP_STATE)
  }

  const onLogin = () => {
    console.log("Login Done");
  }

  const onVerifyOtp = () => {
    console.log("Verfication Done");
    
  }

  const Signup = (
    <PaperInput
      mode="outlined"
      label="Phone"
      keyboardType="numeric"
      style={{width: '100%', fontWeight: 'bold'}}
      theme={{
        colors: {
          primary: colors.primary_green,
          background: colors.white,
          text: colors.black,
        },
      }}
      maxLength={10}
      onChangeText={text => {
        seterror('');
        setphone(text);
      }}
      editable={flag === Constants.SIGNUP_STATE || flag === Constants.LOGIN_STATE}
      right={
        <PaperInput.Icon
          name="phone"
          color={colors.white}
          style={{backgroundColor: colors.dark_green}}
        />
      }
      left={
        <PaperInput.Icon
          name={() => <Text style={homeStyle.text_input_style}>+91</Text>}
        />
      }
    />
  );

  const VerifyOtp = (
    <>
    <OTPInputView 
        style={homeStyle.otp_style}
        pinCount={6}
        codeInputFieldStyle={homeStyle.code_input_field_style}
        code={otpCode}
        onCodeChanged={(code) => {
            seterror("")
            setotpCode(code)
        }}              
        codeInputHighlightStyle={homeStyle.code_input_field_highlight}
    />
        <View style={homeStyle.otp_view}>
            <Text style={homeStyle.resend_text}>
                Didn't receive the verification OTP ?
            </Text>
            <TouchableOpacity onPress={onSignup} >
                <Text style={homeStyle.resend_style}>  Resend otp</Text>
            </TouchableOpacity>
        </View>
    </>
  )

  return (
    <Overlay
      isVisible={status}
      onBackdropPress={() => {
          setphone('')
          seterror('')
          setotpCode('')
          resetLoginState()
      }}
      overlayStyle={homeStyle.login_register_modal}>
      <Card
        wrapperStyle={homeStyle.login_card_wrapper_style}
        containerStyle={homeStyle.login_card_container}>
        <Image
          source={require('../../assets/Images/logo.png')}
          style={homeStyle.login_logo_style}></Image>
      </Card>
      <View style={homeStyle.login_text_view}>
        <Text style={homeStyle.login_text}>
          {flag === Constants.LOGIN_STATE ? 'Sign In' : 'Sign Up'}
        </Text>
        {flag === Constants.SIGNUP_STATE || flag === Constants.LOGIN_STATE ? ( Signup ) : ( VerifyOtp )}
      </View>
      <Text style={homeStyle.error_state}>{error}</Text>
      <Text style={homeStyle.slogan_style}>
        {
          'To be a farmer is to be a student forever, for each day brings somethingnew. \n - John Connell'
        }
      </Text>

      <TouchableOpacity
        disabled={((flag === Constants.SIGNUP_STATE || flag === Constants.LOGIN_STATE ) && phone.length < 10 ) || ( flag === Constants.VERIFY_OTP_STATE && otpCode.length < 6 ) }
        style={
            ((flag === Constants.SIGNUP_STATE || flag === Constants.LOGIN_STATE ) && phone.length < 10 ) || ( flag === Constants.VERIFY_OTP_STATE && otpCode.length < 6 ) 
            ? homeStyle.disable_signup_button
            : homeStyle.enabled_signup_button
        }
        onPress={() => {
            switch (flag) {
                case Constants.SIGNUP_STATE:
                    onSignup()
                    break;
                case Constants.LOGIN_STATE:
                    onLogin()
                    break;
                case Constants.VERIFY_OTP_STATE:
                    onVerifyOtp()
                    break;
                default:
                    break;
            }
        }}>
        <LinearGradient
          colors={
            ( flag === Constants.SIGNUP_STATE || flag === Constants.LOGIN_STATE )
              ? [colors.login_button_primary, colors.login_button_secondary]
              : [colors.verify_button_primary, colors.verify_button_secondary]
          }
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={homeStyle.signup_button_style}>
          <Text style={homeStyle.signup_button_text_style}>
            {flag === Constants.SIGNUP_STATE ? 'Send Otp' : flag === Constants.LOGIN_STATE ? 'login' : 'Verify Otp'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </Overlay>
  );
}
