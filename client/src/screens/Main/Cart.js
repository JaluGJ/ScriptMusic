import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity, Animated } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';
import CardDefault from "./modules/CardDefault";
import CardNav from "./modules/CardNav";
import CardProducts from "./modules/CardProducts";
import styles from "./Styles/Cart.jsx";

export default function EmptyCart() {

  // const { productsCart, totalPrice } = useSelector(state => state.shoppingCart);
  /*   const { model } = productsCart */
  const [productsCart, setProductsCart] = useState([]);
  const [modal, setModal] = useState(false);
  const { newItems } = useSelector((state) => state.products);
  const { totalPrice } = useSelector((state) => state.shoppingCart);
  const [animation, setAnimation] = useState(false);
  /* const [total, setTotal] = useState(0) */


  useEffect(() => {
    AsyncStorage.getItem("@shoppingCart").then(res => {
      if (res !== null) {
        setProductsCart(JSON.parse(res));
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

  
  const position = useRef(new Animated.Value(0)).current
  const fateIn = () => {
    Animated.timing(position, {
      toValue: -210,
      useNativeDriver: true,
    }).start()

  }
  const fateOut = () => {
    Animated.timing(position, {
      toValue: -10,
      useNativeDriver: true,
    }).start()

  }
 
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


                <Animated.View style={{
                  position: 'absolute',
                  elevation: 4,
                  zIndex: 4,
                  top:'85%',
                  width: '100%',
                  backgroundColor: '#000000',
                  paddingBottom: 15,
                  transform:[{translateY:position}] 
                }}>

                  {
                    !animation ?
                      <TouchableOpacity onPress={() => {
                        fateIn()
                        setAnimation(!animation)
                      }}>
                        <View style={styles.arrowAnimated}>
                          <AntDesign name="up" size={54} color="white" />
                        </View>
                      </TouchableOpacity>
                      :
                      <TouchableOpacity onPress={() => {
                        fateOut()
                        setAnimation(!animation)
                      }}>
                        <View style={styles.arrowAnimated}>
                          <AntDesign name="down" size={54} color="white" />
                        </View>
                      </TouchableOpacity>
                  }
                  <View style={styles.textContainer}>
                    <Text style={styles.textCart}>Sub Total:</Text>
                    <Text style={styles.textPrice}>${totalPrice}</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.textCart}>Envio:</Text>
                    <Text style={styles.textPrice}>$0</Text>
                  </View>
                  <View style={styles.textContainerTotal}>
                    <Text style={styles.textCart}>Total:</Text>
                    <Text style={styles.textPrice}>${totalPrice}</Text>
                  </View>


                  <TouchableOpacity
                    onPress={() => {
                      setModal(true)
                    }}
                    style={styles.buttoPage}
                  >
                    <Text style={styles.buttoPageText}>PAGAR</Text>
                  </TouchableOpacity>
                </Animated.View>
              </>
          }

        </View>
      </View>
    </View>
  );
}
