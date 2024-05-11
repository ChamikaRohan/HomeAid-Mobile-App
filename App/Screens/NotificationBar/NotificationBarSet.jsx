import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function NotificationBarSet() {
  return (
    <View style={styles.notifyBar} />
  )
}

const styles = StyleSheet.create({
    notifyBar:{
        marginTop: 50
    }
})