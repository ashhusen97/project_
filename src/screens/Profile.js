import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button } from 'react-native'
import Card from '../components/Card'
import ProflePic from '../assets/good-pic.png'
import Header from '../components/Header'
export default class Profile extends Component {
    render() {
        return (
            <View style = {{flex:1}}>
                <Header title = "Profile" action = {()=>{this.props.navigation.toggleDrawer()}}/>
            <View style= {{flex:1,paddingHorizontal:20,paddingVertical:30,alignItems:'center'}}>
                <Image source = {ProflePic} resizeMode = "center" style = {{width:200,height:200}}/>
               <Card>
                   
                   <Text>My name is _____________ i m a student of Computer Science Dept batch 2018</Text>
             
               </Card>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
