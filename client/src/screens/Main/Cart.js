import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { useSelector, useDispatch } from 'react-redux'

import CardDefault from "./modules/CardDefault";
import CardNav from "./modules/CardNav";
import CardProducts from "./modules/CardProducts";
import styles from "./Styles/Cart.jsx";

export default function EmptyCart() {

  // const { productsCart, totalPrice } = useSelector(state => state.shoppingCart);
  /*   const { model } = productsCart */
  const [ productsCart, setProductsCart] = useState([]);
  console.log(productsCart);
  const { newItems } = useSelector((state) => state.products);
  useEffect(() => {
    AsyncStorage.getItem("@shoppingCart").then(res => {
      setProductsCart(JSON.parse(res))
    }).catch(err => {
      console.log(err);
    });
  }, [newItems]);

  return (
    <View style={styles.wrapper}>
      <StatusBar />
      <View style={styles.container}>

        <CardNav productsCart={productsCart} />

        <View style={styles.containerMain}>
          {
            productsCart.length === 0 ?
              <CardDefault />
              :
              <CardProducts productsCart={productsCart} />
          }

        </View>

      </View>
    </View>
  );
}
