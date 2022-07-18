import { Image, Text, View } from 'react-native'
import React from 'react'
import styles from '../Styles/Modal'


const ModalItems = ({ item , category}) => {
  return (
    <View style={category===`${item.name}` ? styles.containerActive : styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Image source={{ uri: item.imageDark }} style={styles.image} />
    </View>
  )
}

export default ModalItems
