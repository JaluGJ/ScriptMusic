import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from '../Styles/Modal'
import { useSelector } from 'react-redux';


const ModalItems = ({ item }) => {
  const { category: category } = useSelector((state) => state.products);
  return (
    <View style={category===`${item.name}` ? styles.containerActive : styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Image source={{ uri: item.imageDark }} style={styles.image} />
    </View>
  )
}

export default ModalItems
