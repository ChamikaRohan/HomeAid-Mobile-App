import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalAPI from '../../Utils/GlobalAPI'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';
import {useNavigation} from '@react-navigation/native'

export default function Categories() {
  const navigations = useNavigation();

    const [category, setCategory]= useState([]);
    useEffect(()=>{
      getCategories();
    },[])
    const getCategories=()=>{
      setCategory(GlobalAPI.getCategories().categories)
    }

  return (
    <View>
      <Heading text={'Categories'} isViewAll={true}/>
      <FlatList
      data={category}
      numColumns={4}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={()=>{navigations.push('business-list', {category: item.name})}} style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={{uri:item.icon?.url}} style={{width:30, height: 30}}/>
            </View>
            <Text style={{fontFamily: 'Poppins-Light'}}>{item.name}</Text>
        </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    iconContainer: {
        backgroundColor: Colors.LIGHT_GRAY,
        padding: 17,
        borderRadius: 99
    }
})