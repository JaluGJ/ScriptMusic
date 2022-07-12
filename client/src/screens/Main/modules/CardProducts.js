import React from 'react'
import { View } from 'react-native'
import styles from "../Styles/Cart.jsx";
const CardProducts = ({productsCart, totalPrice}) => {
    console.log(productsCart)
    console.log(totalPrice)
    const {model}= productsCart
  return (
    <View style={styles.containerProducts}>
        
    </View>
  )
}

export default CardProducts