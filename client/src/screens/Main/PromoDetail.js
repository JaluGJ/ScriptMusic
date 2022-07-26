import React, { useRef, useState } from 'react'
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
import DetailProducts from './modules/DetailProducts.js';
const PromoDetail = ({ route }) => {
  
  const navigation = useNavigation();
  const { id } = route.params;
  const [detailsPromotion] = useDetailsPromotions({ id })
  const { addToCart, countProducts, setCountProducts } = useShoppingCart();
  // console.log(detailsPromotion)

  return (
    <ScrollView>
      < >
        <View style={styles.containerImgPromo}>
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            resizeMode="cover"
            source={{ uri: detailsPromotion.image }}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.containerNav}>

            <Pressable onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={27} color="black" />
            </Pressable>

            <Text style={styles.promoText}>{detailsPromotion.promo}</Text>

            <Pressable onPress={() => navigation.goBack()}>
              <AntDesign name="right" size={27} color="black" />
            </Pressable>
          </View>
          <View style={styles.containerMain}>
            <DetailProducts
              data={detailsPromotion.items}
            />
            <Text style={styles.textNavPromos}>{detailsPromotion.promoName}</Text>
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
                   onPress={() =>
                     setCountProducts(
                       countProducts > 2 ? countProducts - 1 : 1
                     )
                   }
                  name="minuscircleo"
                  size={24}
                  color="#000000e2"
                />
                <Text style={styles.num}>{countProducts}</Text>
                <AntDesign
                   onPress={() => {
                     if (detailsPromotion.stock > countProducts) {
                       setCountProducts(countProducts + 1)
                     }
                   }}
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
                  addToCart({ details: detailsPromotion });
                  navigation.goBack();
                }}
              >
                <Text style={styles.buttonText}>AL CARRITO</Text>
              </TouchableOpacity>
            </View>

          </View>
          {/* <DetailComment />  */}
        </View>
      </>
    </ScrollView>
  )
}

export default PromoDetail