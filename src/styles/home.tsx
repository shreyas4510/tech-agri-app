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
    }
})