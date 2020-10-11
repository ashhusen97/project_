import React, { Component } from 'react'
import { Text, StyleSheet, View ,Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
const {width}= Dimensions.get('screen') 
export default class Header extends Component {
    render() {
        return (
            <View style = {styles.header} > 
                
                <View  >
                    <TouchableOpacity onPress = {this.props.action}>
                <Text>Open</Text>
                </TouchableOpacity>
                    </View>
                    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style = {styles.title}>{this.props.title}</Text>
                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        width,
        backgroundColor:'#fff',
        flexDirection:'row',
        elevation:4,
        paddingVertical:20,
        paddingHorizontal:14,

        alignItems:'center'
        
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center'
        
    }
})
