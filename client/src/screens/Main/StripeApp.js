import { Alert, Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import {CardField,useConfirmPayment,AdressFields, useStripe} from '@stripe/stripe-react-native';
import fetchPaymentIntentClientSecret from "../helpers/paymentIntent.js";
import { useSelector } from "react-redux";
import fetchStatusPayment from "../helpers/statusPayment.js";


const StripeApp = ({modal,setModal}) => {
  const [email, setEmail] = useState("");
  const [cardDetails, setCardDetails] = useState("");

  const {confirmPayment, loading} = useConfirmPayment();
  const { productsCart } = useSelector(state => state.shoppingCart);
  const body = productsCart;

  const handlerPayPress = async () => {
    if(!email || !cardDetails?.complete) {
      alert("Please enter email and card details");
      return;
    }

    try {
      const {client_secret,error} = await fetchPaymentIntentClientSecret(body);

      if(error) {
        alert(error);
        return;
      }else{
        const {paymentIntent,error } = await confirmPayment(client_secret,{
          type: "Card",
          billing_details: {
            email,
          },
        })

        if(error) {
          const {msg,err} = await fetchStatusPayment(body,'Failed');
          if(err) {
            console.log(err);
          }
          Alert.alert(`${error.message}`);
          return;
        }else if(paymentIntent) {
          const {msg,err} = await fetchStatusPayment(body,'Successful');
          if(msg){
            console.log('articulo pagado y agregado correctamente')
          }else if(err){
            console.log(err)
          }
          Alert.alert("Payment Successful");
        }else{
          await fetchStatusPayment(body,'Failed');
          Alert.alert("Payment Failed");
        }
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <Modal visible={modal} style={styles.container} animationType='slide'>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Enter your email"
        onChange={(event) => {
          setEmail(event.nativeEvent.text);
        }}
        style={styles.input}
      />
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
      <Button title="Pay" onPress={handlerPayPress} disabled={loading} />
      <Button title="Close" onPress={()=>setModal(!modal)} />
    </Modal>

  );
};

export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
  },
  input: {
    backgroundColor: "#efefef",
    borderRadius: 5,
    fontSize: 16,
    height: 50,
    padding: 10,
    // width: "100%",
  },
  cardContainer: {
    height: 50,
    marginVertical:30
  },
  card:{
    backgroundColor: '#efefef',
  }
});
