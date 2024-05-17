import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';

export default function BusinessListItemSmall({business}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:business?.images?.url}} style={styles.image}/>
      <View style={styles.infoContainer}>
        <Text style={{fontSize:15, fontFamily: 'Poppins-Medium'}}>{business?.name}</Text>
        <Text style={{fontSize:12, fontFamily: 'Poppins-Light', color: Colors.GRAY}}>{business?.contactPerson}</Text>
        <Text style={{
          fontSize:10, 
          fontFamily: 'Poppins-Light', 
          padding: 3, 
          color: Colors.PRIMARY, 
          backgroundColor: Colors.LIGHT_GRAY, 
          borderRadius: 4, 
          alignSelf: 'flex-start', 
          paddingHorizontal: 7}}>{business?.category?.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: Colors.WHITE,
    borderRadius: 10
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10
  },
  infoContainer: {
    padding: 7,
    display: 'flex',
    gap: 3
  }
}
)