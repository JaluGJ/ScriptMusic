import React, { useState } from 'react'
import { SafeAreaView, Text, View, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import { Image } from "@rneui/themed";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import styles from './Styles/Detail.jsx'
import { useSelector, useDispatch  } from 'react-redux'
import { getProductDetails } from '../../redux/slices/products.js';
import { useEffect } from 'react';
import { postProductsCart, setTotalPrice } from '../../redux/slices/shoppingCart.js';

const Details = ({route}) => {
  const { itemId } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {details} = useSelector(state => state.products);
  const {productsCart, totalPrice} = useSelector(state => state.shoppingCart);
  console.log(totalPrice);
  const [countProducts, setCountProducts] = useState(1)
  useEffect(() => {
    dispatch(getProductDetails(itemId))
    return () => {
      dispatch(getProductDetails())
    }
  }, [])

  const addToCart = () => {
    const {model, price , id } = details;
    const product = {
      model,
      price,
      id,
      count: countProducts
    }
    dispatch(postProductsCart(product))
    dispatch(setTotalPrice(price * countProducts))
    navigation.goBack()
  }

  return (


    <ScrollView>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.containerNav}>
            <Pressable
              onPress={() =>
                navigation.navigate('Home')
              }>
              <AntDesign name="left" size={27} color="black" />
            </Pressable>
            <Text style={styles.textNav}>DETALLES</Text>
            <AntDesign name="hearto" size={27} color="black" />
          </View>
          <View style={styles.containerMain}>
            <Text style={styles.model}>{details.model}</Text>
            <View style={styles.containerImg}>
              <Image
                style={{
                  width: '100%',
                  height: "100%",
                }}
                resizeMode="contain"
                source={{ uri: details.image }}
              />
            </View>
            <Text style={styles.brand}>{details.brand}</Text>
            <View style={styles.containerDescription}>
              <Text style={styles.description}>{details.description}</Text>
            </View>
            <Text style={styles.price}>$ {details.price}</Text>


            <View style={styles.containerStockSum}>

              <View>
                <Text style={styles.stock}>{details.stock}u disponibles</Text>
              </View>

              <View style={styles.minumPlus}>
                <AntDesign onPress={()=>setCountProducts(countProducts>2?countProducts-1:1)} name="minuscircleo" size={24} color="#000000e2" />
                <Text style={styles.num}>{countProducts}</Text>
                <AntDesign onPress={()=>setCountProducts(countProducts+1)} name="pluscircleo" size={24} color="#000000e2" />
              </View>
            </View>

            <View>
              <TouchableOpacity style={styles.button} onPress={()=>addToCart()}>
                <Text style={styles.buttonText}>AL CARRITO</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>COMPRAR</Text>
              </TouchableOpacity>
            </View>



          </View>
        </View>
      </SafeAreaView>
    </ScrollView>


  )
}

export default Details
