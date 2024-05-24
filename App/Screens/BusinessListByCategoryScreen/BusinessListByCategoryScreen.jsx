import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import {useNavigation, useRoute} from "@react-navigation/native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NavigationBar from "../NotificationBar/NotificationBarSet"
import GlobalAPI from '../../Utils/GlobalAPI'
import BusinessListItem from './BusinessListItem';

export default function BusinessListByCategoryScreen() {
  const params = useRoute().params;
  const navigation = useNavigation();
  const [businessListByCategory, setBusinessListByCategory] = useState([]);

  useEffect(()=>{
    params&&getBusinessListByCategory();
  },[params]);

  const getBusinessListByCategory = ()=>{
    setBusinessListByCategory(GlobalAPI.getBusinessListByCategory(params.category).businessLists);
  }

  
  return(
    <View style={{marginHorizontal: 20}}>
      <NavigationBar/>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{display:'flex', flexDirection: 'row', gap: 15, alignItems: "center"}}>
        <MaterialCommunityIcons name="keyboard-backspace" size={30} color="black" />
        <Text style={{fontSize: 30,fontFamily: "Poppins-SemiBold"}}>{params?.category}</Text>
      </TouchableOpacity>

      {businessListByCategory?.length > 0 ?
      <FlatList
      data={businessListByCategory}
      style={{marginTop: 15}}
      renderItem={({item, index})=>(
        <BusinessListItem business={item}/>
      )}
      />:
      <Text style={{fontFamily: "Poppins-Medium", fontSize: 20, textAlign: "center", marginTop: "20%"}}>No Business Found</Text>}
    </View>
  )
}