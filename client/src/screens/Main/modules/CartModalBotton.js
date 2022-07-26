import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React from "react";
import { CardField } from "@stripe/stripe-react-native";
import usePayment from "../../../customHooks/usePayment";
import styles from "../Styles/CartPayment.jsx";
import { vh, vw } from "react-native-expo-viewport-units";
import Loading from "../../../components/Loading";
const CartModalBotton = ({ setModal }) => {
  let logo = "https://res.cloudinary.com/dzonjuriq/image/upload/v1658864992/script_music_img/logo2_qh9fuc.png";
  const { handlerPayPress, setEmail, setCardDetails, loading } = usePayment({
    setModal,
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
            source={{uri:logo}}
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
      )}
    </>
  );
};

export default CartModalBotton;
