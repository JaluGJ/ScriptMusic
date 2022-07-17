import { Alert, Button, TouchableOpacity, TouchableNativeFeedback, Text, TextInput, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { CardField, useConfirmPayment, CardForm } from '@stripe/stripe-react-native';
import { fetchPaymentIntent, fetchStatusPayment } from "../helpers/payments.js";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { removeItems } from "../../../redux/slices/products.js";
import styles from '../Styles/CartPayment.jsx'
import logo from '../../../../assets/icon.png'
import { vh, vw } from "react-native-expo-viewport-units";
const StripeApp = ({ modal, setModal }) => {
  const [email, setEmail] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [body, setBody] = useState({});
  const { user } = useSelector(state => state.signin);
  const { confirmPayment, loading } = useConfirmPayment()
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("@shoppingCart").then(res => {
      setBody({
        items: JSON.parse(res),
        userId: user.id
      })
    }).catch(err => {
      console.log(err);
    });
  }, [])


  const handlerPayPress = async () => {
    if (!email || !cardDetails?.complete) {
      alert("Please enter email and card details");
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
        })

        if (error) {
          const { err } = await fetchStatusPayment(body, 'Failed');
          if (err) {
            console.log(err);
          }
          Alert.alert(`${error.message}`);
          return;
        } else if (paymentIntent) {
          const { msg, err } = await fetchStatusPayment(body, 'Successful');
          if (msg) {
            console.log('articulo pagado y agregado correctamente')
          } else if (err) {
            console.log(err)
          }
          Alert.alert('Status Payment', 'Payment Successful', [{
            text: 'OK', onPress: () => {
              setModal(false)
              dispatch(removeItems())
            }
          }]);
        } else {
          await fetchStatusPayment(body, 'Failed');
          Alert.alert('Status Payment', 'Payment Failed', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
        }
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <Image
          style={{
            width: vw(70),
            height: vh(35),
            top: vh(5),
            right: vw(-20),
            padding: 10,
            position: 'absolute',
            opacity: 0.3,

        }}
        resizeMode="contain"
        source={logo}
        />
        <View style={styles.containerButton}>
          <TouchableNativeFeedback onPress={() => {
            setModal(!modal)
          }}>
            <View style={styles.arrowAnimatedModal}>
              <AntDesign name="down" size={54} color="#DD8643" />
            </View>
          </TouchableNativeFeedback>

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
        <View style={styles.containerInput}>
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Enter your email"
            onChange={(event) => {
              setEmail(event.nativeEvent.text);
            }}
            style={styles.input}
          />
        </View>
        

        {/* <Button title="Pay" onPress={handlerPayPress} disabled={loading} /> */}
        <TouchableOpacity
          onPress={handlerPayPress}
          style={styles.buttoPage}
        >
          <Text style={styles.buttoPageText}>PAGAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StripeApp;
