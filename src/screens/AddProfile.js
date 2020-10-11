import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
import Header from '../components/Header'

export default class AddProfile extends Component {
    render() {
        return (
            <View style = {{flex : 1}}>
                <Header title = "Add Profile" action = {()=>{this.props.navigation.toggleDrawer()}}/>
                <View style = {{flex : 1,paddingHorizontal:20,paddingVertical:30}}>
                    <Text style = {styles.title}>Add Profile</Text>
               
                    <View style = {styles.selection}>
                  
                        <TextInput placeholder = "Email here" style = {{flex:1,fontSize:20,marginLeft:10}}/>
                    </View>
                    <View style = {styles.selection}>
                
                        <TextInput placeholder = "Name here" style = {{flex:1,fontSize:20,marginLeft:10}}/>
                    </View>
                    <View style = {styles.selection}>
                   
                        <TextInput placeholder = "Roll No here" style = {{flex:1,fontSize:20,marginLeft:10}}/>
               
                    </View>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {{fontSize:20,color:'white'}}>Add Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        title:{
            fontSize:24,
            color:'rgba(0,0,0,0.5)',
        },
        selection:{
      
            borderRadius:20,
            borderColor:"rgba(0,0,0,0.5)",
            borderWidth:1,
            padding:10,
            alignItems:'center',
            marginTop:10,
            flexDirection:'row'
        },
        button:{
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'coral',
            borderRadius:10,
            padding:10,
            marginTop:10,
            height:60
        }
})
