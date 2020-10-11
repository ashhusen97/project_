import React, { Component } from 'react'
import { Text, StyleSheet, View ,Dimensions} from 'react-native'

const {width} = Dimensions.get('screen')
export default class Card extends Component {
    render() {
        return (
            <View style = {styles.card}>
                
                <Text style= {styles.title}>{this.props.children} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        width:width-40,
        backgroundColor:'#ff7061',
        elevation:4,
        borderRadius:15,
        paddingHorizontal:24,
        paddingVertical:30,
        marginTop:10
    },
    title:{
        color:'white',
        fontSize:20,
        letterSpacing:1.3
        
        
    }
})
