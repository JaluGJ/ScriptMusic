import { Alert, TouchableOpacity, Text, TextInput, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { CardField, useConfirmPayment, CardForm } from '@stripe/stripe-react-native';
import { fetchPaymentIntent, fetchStatusPayment } from "../helpers/payments.js";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { removeItems } from "../../../redux/slices/products.js";
import styles from '../Styles/CartPayment.jsx'
import logo from '../../../../assets/instrumentos/logo2.png'
import { vh, vw } from "react-native-expo-viewport-units";
import { create } from "../../../redux/slices/signin.js";
import usePayment from "../customHooks/usePayment.js";
const CartModalBotton = ({setModal}) => {

  const { handlerPayPress, setEmail, setCardDetails, loading } = usePayment({setModal});
  

  return (
      <View style={styles.containerCard}>
        <Image
          style={{
            width: vw(70),
            height: vh(35),
            top: vh(5),
            right: vw(-20),
            padding: 10,
            position: 'absolute',
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
          placeholder='4242 4242 4242 4242'
          cardStyle={styles.card}
          style={styles.cardContainer}
          onCardChange={(card) => {
            setCardDetails(card);
          }}
        />
        
        <TouchableOpacity
          onPress={()=>handlerPayPress()}
          style={styles.buttoPage}
          disabled={loading}
        >
          <Text style={styles.buttoPageText}>PAGAR</Text>
        </TouchableOpacity>
      </View>
  );
};

export default CartModalBotton;
