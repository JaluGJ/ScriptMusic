import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, StatusBar, TouchableNativeFeedback, Modal, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';
import CardDefault from "./modules/CardDefault";
import CardNav from "./modules/CardNav";
import CardProducts from "./modules/CardProducts";
import styles from "./Styles/Cart.jsx";

export default function EmptyCart() {

  const [productsCart, setProductsCart] = useState([]);
  const [modal, setModal] = useState(false);
  const { newItems } = useSelector((state) => state.products);
  const [animation, setAnimation] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  console.log(animation)
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
                <CardProducts productsCart={productsCart} modal={modal} setModal={setModal} />


                <TouchableNativeFeedback style={{borderRadius:50, backgroundColor:'red'}} onPress={() => {
                  setAnimation(true)
                }}>
                  <View style={styles.arrowAnimated}>
                    <AntDesign name="up" size={54} color="white" />
                  </View>
                </TouchableNativeFeedback>


                <Modal visible={animation} transparent animationType={'slide'}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <TouchableNativeFeedback onPress={() => {
                        setAnimation(false)
                      }}>
                        <View style={styles.arrowAnimatedModal}>
                          <AntDesign name="down" size={54} color="white" />
                        </View>
                      </TouchableNativeFeedback>
                      <View style={styles.textContainer}>
                        <Text style={styles.textCart}>Sub Total:</Text>
                        <Text style={styles.textPrice}>${totalPrice}</Text>
                      </View>
                      <View style={styles.textContainer}>
                        <Text style={styles.textCart}>Envio:</Text>
                        <Text style={styles.textPrice}>-$2̶0̶</Text>
                      </View>
                      <View style={styles.textContainerTotal}>
                        <Text style={styles.textCart}>Total:</Text>
                        <Text style={styles.textPrice}>${totalPrice - 20}</Text>
                      </View>


                      <TouchableOpacity
                        onPress={() => {
                          setModal(true)
                        }}
                        style={styles.buttoPage}
                      >
                        <Text style={styles.buttoPageText}>PAGAR</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </>
          }

        </View>
      </View>
    </View>
  );
}
