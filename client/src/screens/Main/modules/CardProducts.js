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

const CardProducts = ({productsCart}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);

  const handleRemove = async (id) => {
    const newProductsCart = productsCart.filter(product => product.id !== id);
    await AsyncStorage.setItem("@shoppingCart", JSON.stringify(newProductsCart));
    dispatch(addItems(-1));
    return true
  }

  
  const handleCount =(id,operation) => {
    productsCart.forEach(product => {
      if (product.id === id) {
        if(operation === 'add'){
          product.count += 1
          product.price = (product.priceOne * product.count).toFixed(2)
        }else{
          if(product.count === 1){
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

  if(modal){
    return (
      <Modal visible={modal} animationType='slide'>
        <StripeApp setModal={setModal} modal={modal}/>
      </Modal>
    )
  }

  return (
    <View style={styles.containerProducts}>
      <Button title="Comprar" onPress={() => {
        setModal(true)
      }} />
        <FlatList
          data={productsCart}
         
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {navigation.navigate('Details', { itemId: item.id })}}>
            <View style={styles.containerProduct}>
              <View style={styles.containerProductImage}>
                <Image source={{ uri: item.image }} resizeMode='contain' style={styles.productImage} />
              </View>
              <View style={styles.containerProductInfo}>
                <Text style={styles.productName}>{item.model}</Text>
                <Text style={styles.productPrice}>$ {item.price}</Text>

                <View style={styles.containerProductCount}>
                  {
                    item.count === 1 ? 
                    <TouchableOpacity onPress={() => {handleRemove(item.id)}}>
                    <Ionicons name="trash-outline" size={24} color="#000" />
                  </TouchableOpacity>
                  :
                <TouchableOpacity onPress={()=>handleCount(item.id,'subs')}>
                  <AntDesign name="minuscircleo" size={24} color="#000" />
                </TouchableOpacity>
                  }
                
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
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        
    </View>
  )
}

export default CardProducts