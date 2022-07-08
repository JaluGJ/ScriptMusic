import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategoriesFilter = ({item}) => {

  return (
    <View style={styles.container}>
        <Text>{item.name}</Text>
        <Image  source={{uri:item.imageDark}} style={styles.image} />
    </View>
  )
}

export default CategoriesFilter

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        // backgroundColor:'red'
    }
})