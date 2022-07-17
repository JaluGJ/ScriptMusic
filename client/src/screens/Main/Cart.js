import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, StatusBar, TouchableNativeFeedback, Modal, TouchableOpacity, Pressable } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';
import CardDefault from "./modules/CardDefault";
import CardNav from "./modules/CardNav";
import CardProducts from "./modules/CardProducts";
import styles from "./Styles/Cart.jsx";
import CartModalBotton from "./modules/CartModalBotton";
import CartModalTop from "./modules/CartModalTop";

export default function EmptyCart() {

  const { newItems } = useSelector((state) => state.products);
  const [productsCart, setProductsCart] = useState([]);
  const [modal, setModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  /* console.log(animation) */
  useEffect(() => {
    AsyncStorage.getItem("@shoppingCart").then(res => {
      if (res !== null) {
        let products = JSON.parse(res);
        setProductsCart(products);
        let total = products.reduce((acc, cur) => {
          return acc + Number(cur.price);
        }, 0)
        setTotalPrice(total.toFixed(2));
      }
    }).catch(err => {
      console.log(err);
    });
    if (newItems === null) {
      AsyncStorage.setItem("@shoppingCart", JSON.stringify([]))
        .then(() => {
          setProductsCart([]);
        })
    }
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
              <>
                <CardProducts productsCart={productsCart} />



                <TouchableNativeFeedback
                  onPress={() => {
                    setModal(true)
                  }}>
                  <View style={styles.arrowAnimated}>
                    <Text style={styles.title}>COMPRAR YA!</Text>
                  </View>
                </TouchableNativeFeedback>



                <Modal visible={modal} transparent animationType={'slide'}>
                  
                    <View style={styles.modalPrueba}>
                      <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                          <CartModalTop setModal={setModal} totalPrice={totalPrice} />
                          <CartModalBotton modal={modal} setModal={setModal} />
                        </View>
                      </View>
                    </View>
                  {/* <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      
                      <CartModalTop setModal={setModal} totalPrice={totalPrice}/>
                      <CartModalBotton modal={modal} setModal={setModal}/>
                    </View>
                  </View> */}
                </Modal>

              </>
          }

        </View>
      </View>
    </View>
  );
}
