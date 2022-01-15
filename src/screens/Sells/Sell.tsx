import React, { useState } from 'react'
import { ImageBackground, ScrollView, View } from 'react-native'
import { Card } from 'react-native-paper'
import { colors } from '../../assets/colors'
// import PatternLock from "react-pattern-lock";

export default function Sells() {

    // const [path, setpath] = useState([1,2,3])

    return (
        <View style={{ flex : 1 }}>
            <View style={{ flex : 1 }}>
                <ImageBackground 
                    source={{ uri : "https://www.livemorezone.com/wp-content/uploads/what-is-organic-farming.png" }} 
                    resizeMode="cover" 
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        flexDirection : 'row',
                        alignItems : 'flex-end'
                    }}
                >
                </ImageBackground>
            </View>
            <View 
                 style={{
                        flex : 2,
                        backgroundColor : 'white',
                        transform : [{ scaleX : 1.6 }],
                        borderTopStartRadius : 200,
                        borderTopEndRadius : 200, 
                        marginTop: -50
                    }}
            >
                <View style={{ flex : 1, transform : [{ scaleX : 0.65 }] }}>
                    <ScrollView>
                        <View style={{ margin : 25 }}>
                            <Card style={{ elevation : 25, shadowColor: colors.hint_grey, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 1, marginTop : 15, borderRadius : 25, borderWidth : 1, borderColor : '#eee' }}>
                                <Card.Content>
                                    {/* <PatternLock
                                        width={ 300 }
                                        pointSize={ 15 }
                                        size={ 3 }
                                        path={ path }
                                        onChange={ (pattern) => {
                                            setpath(pattern);
                                        }}
                                        onFinish={() => {
                                            // check if the pattern is correct
                                        }}
                                    /> */}
                                </Card.Content>
                            </Card>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}