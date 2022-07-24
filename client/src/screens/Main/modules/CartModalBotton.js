import {
  Alert,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  CardField,
  useConfirmPayment,
} from "@stripe/stripe-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import usePayment from "../../../customHooks/usePayment";
import styles from "../Styles/CartPayment.jsx";
import logo from "../../../../assets/instrumentos/logo2.png";
import { vh, vw } from "react-native-expo-viewport-units";
const CartModalBotton = ({ setModal }) => {

  const { handlerPayPress, setEmail, setCardDetails, loading } = usePayment({ setModal });


  return (
    <View style={styles.containerCard}>
      <Image
        style={{
          width: vw(70),
          height: vh(35),
          top: vh(5),
          right: vw(-20),
          padding: 10,
          position: "absolute",
          opacity: 0.7,
        }}
        resizeMode="contain"
        source={logo}
      />
      <View style={styles.containerInput}>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Ingresa tu email"
          onChange={(event) => {
            setEmail(event.nativeEvent.text);
          }}
          style={styles.input}
        />
      </View>
      <CardField
        postalCodeEnabled={true}
        AdressFieldsEnabled={true}
        placeholder="4242 4242 4242 4242"
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(card) => {
          setCardDetails(card);
        }}
      />

      <TouchableOpacity
        onPress={handlerPayPress}
        style={styles.buttoPage}
        disabled={loading}
      >
        <Text style={styles.buttoPageText}>PAGAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartModalBotton;
