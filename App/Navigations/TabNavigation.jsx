import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import BookingScreen from '../Screens/BookingScreen/BookingScreen'
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import Colors from '../Utils/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.PRIMARY
        }}
        >
          
        <Tab.Screen name="home" component={HomeNavigation} options={
          {tabBarLabel: ({color})=>(<Text style={{color:color, fontSize: 12, marginTop: -7 }} >Home</Text>),
          tabBarIcon: ({color, size})=>(<FontAwesome5 name="home" size={size} color={color} />)
          }} />

        <Tab.Screen name="booking" component={BookingScreen} options={
          {tabBarLabel: ({color})=>(<Text style={{color:color, fontSize: 12, marginTop: -7 }} >Booking</Text>),
          tabBarIcon: ({color, size})=>(<MaterialIcons name="cleaning-services" size={size} color={color} />)
          }} />

        <Tab.Screen name="profile" component={ProfileScreen} options={
          {tabBarLabel: ({color})=>(<Text style={{color:color, fontSize: 12, marginTop: -7 }} >Profile</Text>),
          tabBarIcon: ({color, size})=>(<AntDesign name="profile" size={size} color={color} />)
          }} />
          
      </Tab.Navigator>
    )
}