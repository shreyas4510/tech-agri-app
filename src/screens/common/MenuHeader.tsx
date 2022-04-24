import { useNavigationContainerRef } from '@react-navigation/native'
import React from 'react'
import { ImageBackground, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FAIcon from 'react-native-vector-icons/EvilIcons'

export default function MenuHeader({ navigation, ...rest } : any) {
    return (
            <View style={{ flex : 1 }}>
                <ImageBackground 
                    source={{ uri : "https://www.livemorezone.com/wp-content/uploads/what-is-organic-farming.png" }} 
                    resizeMode="cover" 
                    style={{
                        flex: 2,
                        flexDirection : 'row'
                    }}
                >
                    <View style={{ maxHeight : 100, alignItems :'center', justifyContent:'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.openDrawer()
                            }}
                        >
                            <FAIcon name="navicon" color="white" size={26} style={{ margin : 12 }} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={{ flex: 3 }}>
                    { rest.children }
                </View>
            </View>
    )
}
