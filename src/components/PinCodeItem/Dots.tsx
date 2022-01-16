import React from 'react'
import { View } from 'react-native'

interface AppProps {
    pin : number
}

export default function Dots({ pin } : AppProps) {
    return (
        <View style={{ flex : 1, flexDirection : 'row', alignItems : 'center', justifyContent : 'center', marginVertical : 30 }}>
            {
                [ 1, 2, 3, 4, 5, 6].map((obj) => (
                    <View key={obj} style={{ 
                        height : 12, 
                        width : 12, 
                        borderWidth : obj <= pin ? 5 : 1 , 
                        borderRadius : 100, 
                        borderColor : obj <= pin ? '#7ac713' : 'grey', 
                        marginHorizontal : 5, 

                        elevation : 10, 
                        shadowColor: obj <= pin ? '#7ac713' : 'white', 
                        shadowOffset: { width: 0, height: 1 }, 
                        shadowOpacity: 0.8, 
                        shadowRadius: 1

                    }}></View>
                ))
            }
        </View>
    )
}
