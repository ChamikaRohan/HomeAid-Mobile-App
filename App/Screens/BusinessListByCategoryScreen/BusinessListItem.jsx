import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from "../../Utils/Colors"
import { Entypo } from '@expo/vector-icons';

export default function BusinessListItem({business}) {
  return (
    <View style={styles.container}>
    <Image source={{uri:business?.images?.url} } style={styles.image} />


    <View style={styles.subContainer}>
        <Text style={{fontFamily: "Poppins-Medium", color:Colors.GRAY,fontSize: 15}}>{business.contactPerson}</Text>
        <Text style={{fontFamily: "Poppins-SemiBold", fontSize:19  }}>{business.name}</Text>
        <Text style={{fontFamily: "Poppins-Medium", color:Colors.GRAY,fontSize: 13}}>
        <Entypo name="location-pin" size={14} color={Colors.PRIMARY} />
            {business.address}</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius:15,
        marginBottom: 15,
        display: "flex",
        flexDirection: "row",
        gap: 10
    },
    subContainer:{
        display: "flex",
        gap: 3,
        justifyContent: 'center'
    }
    ,    
    image: {
        width: 100,
        height: 100,
        borderRadius: 15
    }
})