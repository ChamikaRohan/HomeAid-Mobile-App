import { View, Text, Image, StyleSheet,TouchableOpacity  } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer} >
        <Text style={styles.text_main}>
          Let's find 
            <Text style={styles.text_sub}> Professional cleaning and repair 
            </Text> services
        </Text>  
        <Text style={styles.text_sub_small}>Best app to find services near you which deliver you a professional service</Text>
        <TouchableOpacity style={styles.button} onPress={()=>{console.log("Hello world!")}}>
          <Text style={{textAlign: 'center', fontSize: 17, color: Colors.PRIMARY }}>Let's Get Strated</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    },
    loginImage:{
        width: 100,
        height: 100,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Colors.BLACK,
        borderRadius: 20
    },
    subContainer: {
      width: '106%',
      backgroundColor: Colors.PRIMARY,
      height: '70%',
      marginRight: 20,
      marginTop: 460,
      borderRadius: 40
    },
    text_main: {
      marginTop: 20,
      fontSize: 27,
      color: Colors.WHITE,
      textAlign: "center",
      paddingHorizontal: 12
    },
    text_sub:{
      fontWeight: 'bold'
    },
    text_sub_small: {
      fontSize: 17,
      color: Colors.WHITE,
      textAlign: 'center',
      marginTop: 20,
      paddingHorizontal: 12
    },
    button: {
      padding: 15,
      backgroundColor: Colors.WHITE,
      borderRadius: 99,
      marginTop: 40,
      marginHorizontal: 20
    }
})