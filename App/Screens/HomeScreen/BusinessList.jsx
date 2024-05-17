import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalAPI from '../../Utils/GlobalAPI'
import Heading from '../../Components/Heading'
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessList() {
    const [businessList, setBusinessList]= useState([]);
    useEffect(()=>{
        getBusinessList();
    },[])
    const getBusinessList=()=>{
        setBusinessList(GlobalAPI.getBusinessList().businessLists)
    }
    print(businessList)
    return (
        <View style={{marginTop: 10}}>
        <Heading text={"Latest Business"}/>
        
        <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
            <View style={{marginRight: 20}}>
                <BusinessListItemSmall business={item}/>
            </View>
            )}
        />
        </View>
    )
}

const styles = StyleSheet.create({


})