import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useConfirmPayment } from '@stripe/stripe-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPaymentIntent, fetchStatusPayment } from '../helpers/payments';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from '../../../redux/slices/signin';
import { removeItems } from '../../../redux/slices/products';
import { useNavigation } from '@react-navigation/native';

const usePayment = ({setModal}) => {
    const [email, setEmail] = useState("");
    const [cardDetails, setCardDetails] = useState("");
    const [body, setBody] = useState({});
    const { user ,token } = useSelector(state => state.signin);
    const { confirmPayment, loading } = useConfirmPayment()
    const dispatch = useDispatch();
    const navigation = useNavigation();

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

      if(loading){
        setTimeout(() => {setModal(false)}, 2000);
       }
    
    
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
              dispatch(create(token))
              Alert.alert('Estado de pago', 'Exitoso', [{
                text: 'OK', onPress: () => {
                  // setModal(false)
                  dispatch(removeItems())
                  navigation.navigate('MyShopping')
                }
              }]);
            } else {
              await fetchStatusPayment(body, 'Failed');
              Alert.alert('Estado de pago', 'Fallido', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
            }
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      }
    return { handlerPayPress, setEmail, setCardDetails, loading }
}

export default usePayment

