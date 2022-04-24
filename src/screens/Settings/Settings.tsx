import React from 'react'
import { Text, View } from 'react-native'
import CategoryHeader from '../common/CategoryHeader'

export default function Settings({ navigation }) {
    return (
        <CategoryHeader style={{ flex : 1 }} label={'Settings'} navigation={navigation}>
            <View style={{ flex:4, borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -30, paddingTop: 10, backgroundColor: 'white' }}>
                <Text>Settings tab</Text>
            </View>
        </CategoryHeader>
    )
}
