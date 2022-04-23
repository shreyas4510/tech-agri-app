import { StyleSheet } from "react-native";
import { colors } from "../assets/colors";

export const CartStyle = StyleSheet.create({
    used_price_style : {
        fontSize : 24, 
        fontWeight : 'bold', 
        color: '#d36e23'
    },
    unused_price_style : {
        fontSize : 17,
        fontStyle : 'italic',
        textDecorationLine : 'line-through',
        color : '#7c7c7c'
    }
})