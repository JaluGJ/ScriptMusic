import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableNativeFeedback,
  Modal,
} from "react-native";
import CardDefault from "./modules/CardDefault";
import CardNav from "./modules/CardNav";
import CardProducts from "./modules/CardProducts";
import styles from "./Styles/Cart.jsx";
import CartModalBotton from "./modules/CartModalBotton";
import CartModalTop from "./modules/CartModalTop";
import useShoppingCart from "../../customHooks/useShoppingCart";
import useDetailsPromotions from "../../customHooks/useDetailsPromotions";

export default function EmptyCart() {
  const [modal, setModal] = useState(false);
  const { productsCart, totalPrice } = useShoppingCart();
  console.log(productsCart)

  return (
    <View style={styles.wrapper}>
      <StatusBar />
      <View style={styles.container}>
        <CardNav productsCart={productsCart} />

        <View style={styles.containerMain}>
          {productsCart.length === 0 ? (
            <CardDefault />
          ) : (
            <>
              <CardProducts productsCart={productsCart} />

              <TouchableNativeFeedback
                onPress={() => {
                  setModal(true);
                }}
              >
                <View style={styles.arrowAnimated}>
                  <Text style={styles.title}>¡COMPRAR YA!</Text>
                </View>
              </TouchableNativeFeedback>

              <Modal visible={modal} transparent animationType={"slide"}>
                <View style={styles.modalPrueba}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <CartModalTop
                        setModal={setModal}
                        totalPrice={totalPrice}
                      />
                      <CartModalBotton
                        modal={modal}
                        setModal={setModal}
                        />
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
          )}
        </View>
      </View>
    </View>
  );
}
