import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Image } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles/Detail.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addItems, getProductDetails } from "../../redux/slices/products.js";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFavorites from "./customHooks/useFavorites.js";

const Details = ({ route }) => {
  const { itemId } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { details, statusCode } = useSelector((state) => state.products);
  const [countProducts, setCountProducts] = useState(1);
  const { addToFavorite } = useFavorites()
  useEffect(() => {
    dispatch(getProductDetails(itemId));
    return () => {
      dispatch(getProductDetails());
    };
  }, []);

  const addToCart = async () => {
    const { price, id, image, model, brand } = details;
    const product = {
      priceOne: price,
      price: (price * countProducts).toFixed(2),
      image,
      id,
      model,
      brand,
      count: countProducts,
    };
    try {
      let existingCart = await AsyncStorage.getItem("@shoppingCart");
      if (existingCart !== null) {
        let cart = JSON.parse(existingCart);
        let existingProduct = cart.find((product) => {
          if (product.id === id) {
            product.count += countProducts;
            product.price = (product.priceOne * product.count).toFixed(2);
            return true;
          }
          return false;
        });

        if (!existingProduct) {
          cart.push(product);
        }
        await AsyncStorage.setItem("@shoppingCart", JSON.stringify(cart));
      } else {
        console.log("primera ves");
        await AsyncStorage.setItem("@shoppingCart", JSON.stringify([product]));
      }
    } catch (e) {
      console.log(e);
    }
    dispatch(addItems(1));
    navigation.goBack();
  };

  return (
    <>
      {statusCode ? (
        <ScrollView>
          <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
              <View style={styles.containerNav}>
                <Pressable onPress={() => navigation.goBack()}>
                  <AntDesign name="left" size={27} color="black" />
                </Pressable>
                <Text style={styles.textNav}>DETALLES</Text>
                <TouchableOpacity onPress={()=>addToFavorite(item)}>
                <AntDesign name="hearto" size={27} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.containerMain}>
                <Text style={styles.model}>{details.model}</Text>
                <View style={styles.containerImg}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode="contain"
                    source={{ uri: details.image }}
                  />
                </View>
                <Text style={styles.brand}>{details.brand}</Text>
                <View style={styles.containerDescription}>
                  <Text style={styles.description}>{details.description}</Text>
                </View>
                <Text style={styles.price}>$ {details.price}</Text>

                <View style={styles.containerStockSum}>
                  <View>
                    <Text style={styles.stock}>
                      {details.stock}u disponibles
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
                      onPress={() => setCountProducts(countProducts + 1)}
                      name="pluscircleo"
                      size={24}
                      color="#000000e2"
                    />
                  </View>
                </View>

                <View>
                  <TouchableOpacity style={styles.button} onPress={addToCart}>
                    <Text style={styles.buttonText}>AL CARRITO</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>COMPRAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  );
};

export default Details;
