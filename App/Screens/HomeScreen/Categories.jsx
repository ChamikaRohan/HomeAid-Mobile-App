import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalAPI from '../../Utils/GlobalAPI'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';

export default function Categories() {
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
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={{uri:item.icon?.url}} style={{width:30, height: 30}}/>
            </View>
            <Text style={{fontFamily: 'Poppins-Light'}}>{item.name}</Text>
        </View>
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