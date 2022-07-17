import React, { useState } from 'react'
import { Button, FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import styles from "../Styles/Cart.jsx";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { addItems } from '../../../redux/slices/products.js';
import StripeApp from './StripeApp.js';
import { useNavigation } from '@react-navigation/native';

const CardProducts = ({ productsCart, modal, setModal }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleRemove = async (id) => {
    const newProductsCart = productsCart.filter(product => product.id !== id);
    await AsyncStorage.setItem("@shoppingCart", JSON.stringify(newProductsCart));
    dispatch(addItems(-1));
    return true
  }


  const handleCount = (id, operation) => {
    productsCart.forEach(product => {
      if (product.id === id) {
        if (operation === 'add') {
          product.count += 1
          product.price = (product.priceOne * product.count).toFixed(2)
        } else {
          if (product.count === 1) {
            return
          }
          product.count -= 1
          product.price = (product.price - product.priceOne).toFixed(2)
        }
      }
    });
    AsyncStorage.setItem("@shoppingCart", JSON.stringify(productsCart));
    dispatch(addItems(1));
  }

  if (modal) {
    return (
      <Modal visible={modal} animationType='slide' transparent={true}>
        <StripeApp setModal={setModal} modal={modal} />
      </Modal>
    )
  }

  return (
    <View style={styles.containerProducts}>

      <FlatList
        data={productsCart}
        renderItem={({ item }) => (
          <TouchableOpacity onLongPress={() => { navigation.navigate('Details', { itemId: item.id }) }}>
            <View style={styles.containerProduct}>
              <View style={styles.containerProductImage}>
                <Image source={{ uri: item.image }} resizeMode='contain' style={styles.productImage} />
              </View>
              <View style={styles.containerProductInfo}>
                <View style={styles.containerNameTrash}>
                  <View style={styles.containerNameBrand}>
                    <Text style={styles.productName}>{item.model}</Text>
                    <Text style={styles.productBrand}>{item.brand}</Text>
                  </View>
                  <View style={styles.containerTrash}>
                    <TouchableOpacity onPress={() => { handleRemove(item.id) }}>
                      <AntDesign name="closecircleo" size={24} color="crimson" />
                    </TouchableOpacity>
                  </View>

                </View>
                <View style={styles.productPricePlus}>
                  <Text style={styles.productPrice}>$ {item.price}</Text>

                  <View style={styles.containerProductCount}>
                    <View style={styles.containerPlus}>
                      {
                        item.count === 1 ?
                          <TouchableOpacity onPress={() => { handleRemove(item.id) }}>
                            <Ionicons name="trash-outline" size={24} color="red" />
                          </TouchableOpacity>
                          :
                          <TouchableOpacity onPress={() => handleCount(item.id, 'subs')}>
                            <AntDesign name="minuscircleo" size={24} color="#000" />
                          </TouchableOpacity>
                      }

                      <Text style={styles.productCount}>{item.count}</Text>

                      <TouchableOpacity onPress={() => handleCount(item.id, 'add')}>
                        <AntDesign name="pluscircleo" size={24} color="#000" />
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>

  )
}

export default CardProducts