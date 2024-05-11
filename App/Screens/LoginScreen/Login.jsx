import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity  } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import Colors from '../../Utils/Colors'

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    console.log("Called")
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.loginImage} source={require('../../../assets/images/LoginImg.png')}></Image>
      <View style={styles.subContainer} >
        <Text style={styles.text_main}>
          Let's find 
            <Text style={styles.text_sub}> Professional cleaning and repair 
            </Text> services
        </Text>  
        <Text style={styles.text_sub_small}>Best app to find services near you which deliver you a professional service</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
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
        borderColor: Colors.BLACK,
        width:210, 
        height: 460,
        marginTop: 60
    },
    subContainer: {
      width: '100%',
      backgroundColor: Colors.PRIMARY,
      height: '70%',
      marginTop: 35,
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