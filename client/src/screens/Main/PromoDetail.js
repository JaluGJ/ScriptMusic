import React from 'react'
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  Image,
} from "react-native";
import styles from "./Styles/Detail.jsx";
import useDetailsPromotions from '../../customHooks/useDetailsPromotions';
import useShoppingCart from "../../customHooks/useShoppingCart";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
const PromoDetail = ({ route }) => {

  const navigation = useNavigation();
  const { id } = route.params;
  const [detailsPromotion]  = useDetailsPromotions({id})
  const { addToCart, countProducts, setCountProducts } = useShoppingCart();
  // console.log(detailsPromotion)

  return (
    <ScrollView>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.containerNav}>
            <Pressable onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={27} color="black" />
            </Pressable>
            <Text style={styles.textNav}>DETALLES</Text>
          </View>
          <View style={styles.containerMain}>
            <Text style={styles.model}>NOMBRE PRODUCTO</Text>
            <View style={styles.containerImg}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode="contain"
                source={{ uri: detailsPromotion.image }}
              /> 
            </View>
            <Text style={styles.brand}> {detailsPromotion.brand} </Text>
            <View style={styles.containerDescription}>
              <Text style={styles.description}> {detailsPromotion.description}</Text>
            </View>
            <Text style={styles.price}>$ {detailsPromotion.price} </Text>

            <View style={styles.containerStockSum}>
              <View>
                <Text style={styles.stock}>
                  {detailsPromotion.stock}u disponibles
                </Text>
              </View>

              <View style={styles.minumPlus}>
                <AntDesign
                  // onPress={() =>
                  //   setCountProducts(
                  //     countProducts > 2 ? countProducts - 1 : 1
                  //   )
                  // }
                  name="minuscircleo"
                  size={24}
                  color="#000000e2"
                />
                <Text style={styles.num}>{countProducts}</Text>
                <AntDesign
                  // onPress={() => {
                  //   if (details.stock > countProducts) {
                  //     setCountProducts(countProducts + 1)
                  //   }
                  // }}
                  name="pluscircleo"
                  size={24}
                  color="#000000e2"
                />
              </View>
            </View>

            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  addToCart({ details:PromoDetail });
                  navigation.goBack();
                }}
              >
                <Text style={styles.buttonText}>AL CARRITO</Text>
              </TouchableOpacity>
            </View>

          </View>
         {/* <DetailComment />  */}
        </View>
        {/* <CustomAlertComponent
          visible={showModal}
          setVisible={setShowModal}
          setFlag={setFlag}
          flag={flag}
          title={!flag ? "¡Producto agregado!" : "¡Producto agregado anteriormente!"}
          message={"Revise su lista de favoritos"}
          color={"#DD8643"}
          iconName={"cards-heart"}
        /> */}
      </SafeAreaView>
    </ScrollView>
  )
}

export default PromoDetail