import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalAPI from '../../Utils/GlobalAPI'
import Heading from '../../Components/Heading';

export default function Slider() {
  const [slider, setSlider]= useState([]);
  useEffect(()=>{
    getSliders();
  },[])
  const getSliders=()=>{
    setSlider(GlobalAPI.getSlider().sliders)
  }
  print(slider)
  return (
    <View>
      <Heading text={'Offers For You'}/>
      <FlatList
      data={slider}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <View style={{marginRight: 20}}>
          <Image source={{uri:item.image?.url}} style={styles.sliderImage}/>
        </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  sliderImage:{
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: 'contain'
  }
})