import React, { useState } from 'react'
import { Button, FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import styles from "../Styles/Cart.jsx";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { addItems } from '../../../redux/slices/products.js';
import StripeApp from './StripeApp.js';

const CardProducts = ({productsCart}) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const handleRemove = async (id) => {
    const newProductsCart = productsCart.filter(product => product.id !== id);
    await AsyncStorage.setItem("@shoppingCart", JSON.stringify(newProductsCart));
    dispatch(addItems(-1));
  }

  
  const handleCount =(id,operation) => {
    productsCart.forEach(product => {
      if (product.id === id) {
        if(operation === 'add'){
          product.count += 1
          product.price = (product.priceOne * product.count).toFixed(2)
        }else{
          if(product.count === 1){
            console.log('no se puede quitar')
            return
          }
          product.count -= 1
          product.price = (product.price - product.priceOne).toFixed(2)
          console.log(product)
        }
      }
    });
    AsyncStorage.setItem("@shoppingCart", JSON.stringify(productsCart));
    dispatch(addItems(1));
  }

  return (
    <View style={styles.containerProducts}>
      <Button title="Comprar" onPress={() => {
        setModal(true)
      }} />
        <FlatList
          data={productsCart}
         
          renderItem={({ item }) => (
            <View style={styles.containerProduct}>
              <View style={styles.containerProductImage}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
              </View>
              <View style={styles.containerProductInfo}>
                <Text style={styles.productName}>{item.model}</Text>
                <Text style={styles.productPrice}>$ {item.price}</Text>

                <View style={styles.containerProductCount}>
                <TouchableOpacity onPress={()=>handleCount(item.id,'subs')}>
                  <AntDesign name="minuscircleo" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.productCount}>{item.count}</Text>
                <TouchableOpacity onPress={()=>handleCount(item.id,'add')}>
                  <AntDesign name="pluscircleo" size={24} color="#000" />
                </TouchableOpacity>
              </View>
              <View style={styles.containerTrash}>
                  <TouchableOpacity onPress={() => {handleRemove(item.id)}}>
                    <Ionicons name="trash-outline" size={24} color="#000" />
                  </TouchableOpacity>
                </View>
                </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        {
          modal ?
          <Modal visible={modal}>
            <View style={styles.modal}>
              <StripeApp/>
              
            </View>
          </Modal>
          : null
        }
    </View>
  )
}

export default CardProducts