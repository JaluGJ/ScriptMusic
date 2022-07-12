import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { useSelector, useDispatch } from 'react-redux'

import CardDefault from "./modules/CardDefault";
import CardNav from "./modules/CardNav";
import CardProducts from "./modules/CardProducts";
import styles from "./Styles/Cart.jsx";

export default function EmptyCart() {

  const { productsCart, totalPrice } = useSelector(state => state.shoppingCart);
  /*   const { model } = productsCart */


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
              <CardProducts productsCart={productsCart} totalPrice={totalPrice} />
          }

        </View>

      </View>
    </View>
  );
}
