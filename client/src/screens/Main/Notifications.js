import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notifications = () => {
  return (
    <View style={styles.wrapper}>
    <View style={styles.container}>
      <Text>User Information</Text>
    </View>
    </View>
    
  )
}

export default Notifications

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "#1e1c1b",
  },
  container: {
    backgroundColor:"white",
    // width: "100%",
    height: "100%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    alignItems: "center",
  }
})