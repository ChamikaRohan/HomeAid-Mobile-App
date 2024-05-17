import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'

export default function HomeScreen() {
  return (
    <View>
      {/* Header */}
      <Header/>
      <View style={{padding:20}}>
        {/* Slider */}
        <Slider/>

        {/* Categories */}
        <Categories/>

        {/* Business List */}
        <BusinessList/>
      </View>
    </View>
  )
}