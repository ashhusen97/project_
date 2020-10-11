import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Splash from '../screens/Splash.js'
import Profile from '../screens/Profile.js'
import AddProfile from '../screens/AddProfile.js'
import Projects from '../screens/Projects.js'
const Stack = createStackNavigator();   
const Drawer = createDrawerNavigator();
const AppDrawer = ()=>{
    return(
        <Drawer.Navigator >
        <Drawer.Screen name="Profile" component={Profile} />             
        <Drawer.Screen name="AddProfile" component={AddProfile} />
        <Drawer.Screen name="Projects" component={Projects} />
       </Drawer.Navigator>
    )
}

export default class Navigation extends React.Component {


    render() {
        return (
            <NavigationContainer>
            <Stack.Navigator screenOptions = {{headerShown:false}}>
              <Stack.Screen name="Splash" component={Splash}  />
              <Stack.Screen name="AppDrawer" component={AppDrawer} options = {{headerShown:false}} />
            </Stack.Navigator>
           
          </NavigationContainer>
        )
    }
}

