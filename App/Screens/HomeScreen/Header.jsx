import { View, Text, Image,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import NotificationBarSet from '../NotificationBar/NotificationBarSet'
import Colors from '../../Utils/Colors'
import { Entypo } from '@expo/vector-icons';

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
                <Text style={{color:Colors.WHITE}}>Welcome,</Text>
                <Text style={{color:Colors.WHITE, fontSize:20}}>{user?.fullName}</Text>
            </View>
        </View>
        <Entypo name="bookmarks" size={30} color={Colors.WHITE} />
    </View>
    
    {/* Profile section */}
    <View>
    <TextInput>Search</TextInput>
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
    }
})