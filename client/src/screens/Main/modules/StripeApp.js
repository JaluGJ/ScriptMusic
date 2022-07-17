import { Alert, Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import {CardField,useConfirmPayment,CardForm} from '@stripe/stripe-react-native';
import {fetchPaymentIntent,fetchStatusPayment} from "../helpers/payments.js";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { removeItems } from "../../../redux/slices/products.js";


const StripeApp = ({modal,setModal}) => {
  const [email, setEmail] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [body, setBody] = useState({});
  const {user} = useSelector(state => state.signin);
  const {confirmPayment, loading} = useConfirmPayment()
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("@shoppingCart").then(res => {
      setBody({
        items: JSON.parse(res),
        userId:user.id
      })
    }).catch(err => {
      console.log(err);
    });
  }, [])


  const handlerPayPress = async () => {
    if(!email || !cardDetails?.complete) {
      alert("Please enter email and card details");
      return;
    }
    try {
      const {clientSecret,error} = await fetchPaymentIntent(body);

      if(error) {
        alert(error);
        return;
      }else{
        const {paymentIntent,error } = await confirmPayment(clientSecret,{
          type: "Card",
          billing_details: {
            email,
          },
        })

        if(error) {
          const {err} = await fetchStatusPayment(body,'Failed');
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
          Alert.alert('Status Payment', 'Payment Successful',[{text: 'OK', onPress: () => {
            setModal(false) 
            dispatch(removeItems())
          }
          }]);
        }else{
          await fetchStatusPayment(body,'Failed');
          Alert.alert('Status Payment', 'Payment Failed',[{text: 'OK', onPress: () => console.log('OK Pressed')}]);
        }
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
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
      
      {/* <CardForm
   onFormComplete={(cardDetails) => {
   console.log('card details', cardDetails);
     setCard(cardDetails);
   }}
   style={{height: 200}}
 /> */}
     
      <Button title="Pay" onPress={handlerPayPress} disabled={loading} />
      </View>
   
        <View style={styles.containerButton}>
        <Button title="Close" onPress={()=>setModal(!modal)} />
      </View>
      </View>
  );
};

export default StripeApp;

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
  },
  containerInput:{
    paddingHorizontal: 5,
  },
  containerCard:{
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#efefef",
    borderRadius: 5,
    fontSize: 16,
    height: 50,
    padding: 10,
  },
  cardContainer: {
    height: 50,
    marginVertical:30
  },
  card:{
    backgroundColor: '#efefef',
  },
  containerButton:{
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  }
});
