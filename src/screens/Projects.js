import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import Card from '../components/Card'
import ProflePic from '../assets/good-pic.png'
import Header from '../components/Header'
export default class Projects extends Component {
    render() {
        return (
            <View style = {{flex:1}}>
                <Header title = "Projects" action = {()=>{this.props.navigation.toggleDrawer()}}/>
            <View style= {{flex:1,paddingHorizontal:20,paddingVertical:30,alignItems:'center'}}>
                
               <Card>Object Oriented</Card>
               <Card>Database</Card>
               <Card>Mobile Development</Card>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
