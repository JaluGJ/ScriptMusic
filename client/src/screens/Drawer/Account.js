import { StyleSheet, Text,  View } from 'react-native'
import React from 'react'

const Account = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Account</Text>
      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "#000000",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white",
    // width: "100%",
    height: "100%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    alignItems: "center",
  }
})