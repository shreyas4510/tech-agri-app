import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../assets/colors";


const DIMENSIONS = {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
};
  
export const homeStyle = StyleSheet.create({
    fullFlex : {
        flex: 1
    },
    logoContainer : {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-end'
    },
    logoImages : {
        resizeMode: 'contain',
        width: DIMENSIONS.WIDTH - 100,
    },
    signupButtonContainer : {
        padding: 12,
        backgroundColor: colors.white,
        elevation: 8,
        borderRadius: 20,
        marginTop: 'auto',
        marginBottom: 10,
        width: '80%',
        alignSelf: 'center',
    },
    signupButton : {
        fontSize: 18,
        color: colors.dark_green,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    loginText : {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        color: colors.white,
    },
    login_register_modal : {
        width: '100%',
        backgroundColor: colors.white,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 24,
        borderColor : colors.primary_green,
        borderWidth : 2,
        borderBottomWidth : 0
    },
    login_card_container : {
        borderRadius : 20,
        padding : 10,
        alignSelf : 'center',
        position: 'absolute',
        marginTop : -35,
        borderColor : colors.primary_green,
        borderWidth : 2 
    },
    login_card_wrapper_style : { 
        alignSelf : 'flex-start' 
    },
    login_logo_style : {
        height : 60, 
        width : 60, 
        margin: 0, 
        padding : 0
    },
    login_text_view : {
        marginTop: 30,
        flex: 1,
        alignItems: 'center',
    },
    login_text : {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        color: colors.primary_green,
    },
    error_state : {
        color: colors.text_error, 
        width: '100%', 
        fontWeight: 'bold'
    },
    slogan_style : {
        margin: 20,
        fontStyle: 'italic',
        color: colors.muted_text,
        fontWeight: 'bold',
    },
    disable_signup_button : {
        elevation: 8,
        backgroundColor: colors.white,
        borderRadius: 5,
        margin: 20,
        marginBottom: 10,
        width: '100%',
        alignSelf: 'center',
        opacity: 0.7,
    },
    enabled_signup_button : {
        elevation: 8,
        backgroundColor: colors.white,
        borderRadius: 5,
        margin: 20,
        marginBottom: 10,
        width: '100%',
        alignSelf: 'center',
    },
    signup_button_style : {
        padding: 12, 
        borderRadius: 5
    },
    signup_button_text_style : {
        fontSize: 14,
        color: colors.white,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    text_input_style : {
        fontWeight: 'bold',
        marginTop: 'auto',
        fontSize: 15,
    },
    otp_style : { 
        height: 60, 
        width: '95%' 
    },
    code_input_field_style : {
        width: 30,
        height: 45,
        color: colors.black,
        borderColor: colors.dark_green,
        minWidth : 45,
        borderRadius : 5,
    },
    code_input_field_highlight : { 
        borderColor: colors.verify_button_primary 
    },
    resend_style : { 
        fontWeight: 'bold', 
        color: colors.primary_green
    },
    resend_text : { 
        color: colors.muted_text, 
        fontWeight : 'bold' 
    },
    otp_view : { 
        flexDirection: 'row', 
        margin : 5 
    }
})