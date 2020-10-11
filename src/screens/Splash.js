import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image,Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Logo from '../assets/logo.jpg'

const {width} = Dimensions.get('screen');
export default class Splash extends Component {
    render() {
        return (
            <View style = {{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                    <Image source = {Logo} style = {{width:300,height:300}} resizeMode = "center"/>
                
                <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('AppDrawer')}} 
                style = {{padding:20,alignItems:'center',justifyContent:'center',backgroundColor:'#ff7061',borderRadius:20,elevation:4,width:width-40}}>
                    <Text style = {{fontSize:20,color:'white'}}>Get Started</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({})
