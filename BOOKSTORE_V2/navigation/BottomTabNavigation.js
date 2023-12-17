import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { Home, Profile, Category } from '../screens';
import { themeColors } from '../constants/theme';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyBoard: true,
  headerShown: false,
  tabBarStyle:{
    position:'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen options={{tabBarIcon:({focused})=>{return <Ionicons name={focused ? 'home':'home-outline'} size={25} color={focused ? themeColors.primary: themeColors.grey_2}></Ionicons>}}}  name='Home' component={Home}></Tab.Screen>
      <Tab.Screen options={{tabBarIcon:({focused})=>{return <MaterialIcons name={'category'} size={25} color={focused ? themeColors.primary: themeColors.grey_2}></MaterialIcons>}}}  name='Category' component={Category}></Tab.Screen>
      <Tab.Screen options={{tabBarIcon:({focused})=>{return <Ionicons name={focused ? 'person':'person-outline'} size={25} color={focused ? themeColors.primary: themeColors.grey_2}></Ionicons>}}}  name='Profile' component={Profile}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation