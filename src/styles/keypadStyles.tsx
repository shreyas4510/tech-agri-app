import { StyleSheet } from "react-native";
import { colors } from "../assets/colors";

export const KeypadStyles = StyleSheet.create({
    dividerView : {
        flex : 1,
        flexDirection : "row",
    },
    textStyle : {
        fontWeight : 'bold',  
        color : 'black' ,
        textAlign:  'center'
    },
    touchableOpacityStyle : {
        borderRadius : 10,
        backgroundColor : 'white', 
        shadowColor: colors.muted_text,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation : 25,
        marginVertical : 5,
        marginHorizontal : 13,
        height : 50,
        minWidth : 45
    },
    cardStyle : { 
        borderRadius : 10
    }
})