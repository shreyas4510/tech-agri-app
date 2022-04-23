import { StyleSheet } from "react-native";
import { colors } from "../assets/colors";

export const CartStyle = StyleSheet.create({
    used_price_style : {
        fontSize : 20, 
        fontWeight : 'bold', 
        color: '#63b051'
    },
    unused_price_style : {
        fontSize : 15,
        fontWeight: 'bold', 
        fontStyle : 'italic',
        textDecorationLine : 'line-through',
        color : '#7c7c7c'
    }
})