import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { removeItems } from "../redux/slices/products.js";
import { fetchPaymentIntent, fetchStatusPayment } from "../screens/Main/helpers/payments";
import { useDispatch, useSelector } from "react-redux";
import { useConfirmPayment } from "@stripe/stripe-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const usePayments = ({ modal, setModal }) => {
  const [email, setEmail] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [body, setBody] = useState({});
  const { user } = useSelector((state) => state.signin);
  const { confirmPayment, loading } = useConfirmPayment();
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("@shoppingCart")
      .then((res) => {
        setBody({
          items: JSON.parse(res),
          userId: user.id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handlerPayPress = async () => {
    if (!email || !cardDetails?.complete) {
      Alert.alert("Error", "Por favor, complete los datos requeridos");
      return;
    }
    try {
      const { clientSecret, error } = await fetchPaymentIntent(body);

      if (error) {
        alert(error);
        return;
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billing_details: {
            email,
          },
        });


        if (error) {
          const { err } = await fetchStatusPayment(body, "Failed");
          if (err) {
            console.log(err);
          }
          Alert.alert(`${error.message}`);
          return;
        } else if (paymentIntent) {
          setModal(false);
          dispatch(removeItems());
          const { msg, err } = await fetchStatusPayment(body, "Successful");
          if (msg) {
            console.log("articulo pagado y agregado correctamente");
          } else if (err) {
            console.log(err);
          }

          Alert.alert("Estado de pago", "Exitoso", [
            {
              text: "OK",
              onPress: () => {

              },
            },
          ]);

        } else {

          await fetchStatusPayment(body, "Failed");

          Alert.alert("Estado de pago", "Fallido", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return { setEmail, setCardDetails, handlerPayPress, loading };
};

export default usePayments;