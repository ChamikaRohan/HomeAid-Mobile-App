import { View, Text, Image,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import NotificationBarSet from '../NotificationBar/NotificationBarSet'
import Colors from '../../Utils/Colors'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Header() {
const {user, isLoading} = useUser();
  return user&&(
    <View>
        <NotificationBarSet/>

        {/* Profile section */}
        <View style={styles.container}>
        <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
            <View>
                <Image source={{uri:user?.imageUrl}} style={styles.userImage}/>
            </View>
            <View>
                <Text style={{color:Colors.WHITE, fontFamily: 'Poppins-Light'}}>Welcome,</Text>
                <Text style={{color:Colors.WHITE, fontSize:20, fontFamily: 'Poppins-Medium'}}>{user?.fullName}</Text>
            </View>
        </View>
        <Entypo name="bookmarks" size={30} color={Colors.WHITE} />
    </View>
    
    {/* Search bar section */}
    <View style={styles.searchBarContainer}>
    <TextInput style={styles.textInput} placeholder='Search' />
    <Feather style={styles.searchButton} name="search" size={24} color={Colors.PRIMARY} />
    </View>  

    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    },
    profileContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    profileMainContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    textInput:{
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: '85%',
        fontSize: 16
    },
    searchBarContainer: {
        marginTop: 20,
        flexDirection: 'row',
        gap: 8 
    },
    searchButton: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8
    }
})