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
import CustomAlertPayment from "../../components/CustomAlertPayment";

export default function EmptyCart() {
  const [alert, setAlert] = useState(false);
  const [modal, setModal] = useState(false);
  const [flag, setFlag] = useState(1);
  const { productsCart, totalPrice } = useShoppingCart();

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
                        alert={alert}
                        setAlert={setAlert}
                        flag={flag}
                        setFlag={setFlag}
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
              <CustomAlertPayment
                flag={flag}
                setFlag={setFlag}
                alert={alert}
                setAlert={setAlert}
                title={
                  flag? "¡Su pago a sido exitoso!"
                    : "¡Su pago a sido denegado!"
                }
                message={
                  flag ?"Gracias por su compra" : "Por favor revise sus datos"
                }
                color={flag? "#01A601" : "#F70000"}
                iconName={flag? "check-decagram" : "alert-circle"}
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
}
