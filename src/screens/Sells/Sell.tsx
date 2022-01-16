import React, { Component } from 'react'
import { ImageBackground, ScrollView, View } from 'react-native'
import { Card } from 'react-native-paper'
import { colors } from '../../assets/colors'
import Dots from '../../components/PinCodeItem/Dots'
import Keypad from '../../components/PinCodeItem/Keypad'

interface AppState {
    pincode : Array<string>;
}

type PIN_ACTION = 'insert' | 'delete' | 'submit'
class Sells extends Component<any, AppState>{
    constructor(props : any) {
        super(props);
        this.state = {
            pincode : []
        }
    }

    handlePinOnChange = (value : string, action : PIN_ACTION) => {
        switch (action) {
            case 'insert':
                if (this.state.pincode.length < 6) {
                    let data = { ...this.state }
                    data.pincode.push(value)
                    this.setState({
                        pincode : [ ...data.pincode ]
                    })
                }
                break;
            case 'delete':
                let data = { ...this.state }
                data.pincode.pop()
                this.setState({
                    pincode : [ ...data.pincode ]
                })
                break;
            case 'submit':
                console.log( this.state.pincode.toString() )
                break;
            default:
                break;
        }
    } 

    render() {
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
                            <View style={{ margin : 30, justifyContent : 'center' }}>
                                <Card style={{ elevation : 25, shadowColor: colors.muted_text, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 1, marginTop : 15, borderRadius : 25, borderWidth : 1, borderColor : '#eee' }}>
                                    <Card.Content>
                                        <Dots 
                                            pin={this.state.pincode.length}
                                        />
                                        <Keypad 
                                            pin={this.state.pincode.length}
                                            handlePinOnChange={this.handlePinOnChange.bind(this)}
                                        />
                                    </Card.Content>
                                </Card>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

export default Sells;