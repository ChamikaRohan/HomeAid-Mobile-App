import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {useRoute} from "@react-navigation/native"

export default function BusinessListByCategoryScreen() {
  const params = useRoute().params;
  useEffect(()=>{
    console.log(params.category);
  },[])
  return(
    <View>
      <Text>BusinessListByCategoryScreen</Text>
    </View>
  )
}