import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView } from 'react-native'


const Home = () => {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
           <Text>HOME</Text>
      </SafeAreaView>
    </View>

  )
}

export default Home


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