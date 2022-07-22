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
import { postFavourite } from "../../redux/slices/favourites.js";
import useShoppingCart from "../../customHooks/useShoppingCart";
import useDetails from "../../customHooks/useDetails";
import useFavorites from "../../customHooks/useFavorites";
import CustomAlertComponent from "../../components/CustomAlert.js";
import { vh, vw } from "react-native-expo-viewport-units";
import { AirbnbRating } from '@rneui/themed';
const Details = ({ route }) => {
  const { itemId } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { token } = useSelector((state) => state.signin);
  const { details, statusCode } = useDetails({ itemId });
  const { addToCart, countProducts, setCountProducts } = useShoppingCart();
  const [showModal, setShowModal] = useState(false);
  const [flag, setFlag] = useState(false);
  const [favourites] = useFavorites();
  /* console.log(details.ratYCom) */

  let ratYCom = [
    {
      "ratting": 4,
      "comment": {
        "user": "machao",
        "img": 'https://i.postimg.cc/rwxFv4SF/machado.png',
        "text": "vamooo bocaaa"
      }
    },
    {
      "ratting": 5,
      "comment": {
        "user": "Orancio",
        "img": 'https://i.postimg.cc/fT3bfpyd/hori.png',
        "text": "re feas las alertasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
      }
    },
    {
      "ratting": 2,
      "comment": {
        "user": "Jorge Polo",
        "img": 'https://i.postimg.cc/FRtbh36W/unknown.png',
        "text": "jorge"
      }
    }
  ]

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
                <TouchableOpacity
                  onPress={() => {
                    const existente = favourites.find((item) => item.id === details.id);
                    if (existente) {
                      setFlag(true);
                    } else {
                      dispatch(postFavourite(token, details.id));
                    }
                    setShowModal(true);
                  }}
                >
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
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      addToCart({ details });
                      navigation.goBack();
                    }}
                  >
                    <Text style={styles.buttonText}>AL CARRITO</Text>
                  </TouchableOpacity>
                </View>

              </View>
              <View style={styles.containerDetailComment}>
                <View >
                  <Text style={styles.commentTitle}>Opiniones de este producto:</Text>
                </View>
                <View>
                  {
                    ratYCom.map((c, i) => {
                      /* console.log(c.comment.img) */
                      return (
                        <View style={styles.containerComment} key={i}>
                          <View style={styles.containerInfoComment}>
                            <View style={styles.containerImgComment}>
                              <Image
                                source={{ uri: c.comment.img }}
                                style={{
                                  width: vw(10),
                                  height: vh(5),
                                  padding: 10,
                                  borderRadius:100,
                                }}
                              />
                            </View>
                            <View>
                              <Text style={styles.nameComment}>{c.comment.user}</Text>
                              <View style={styles.commentText}>
                                <Text>{c.comment.text}</Text>
                              </View>
                            </View>
                          </View>
                          {/* <AirbnbRating isDisabled={true}/>{c.ratting} */}
                          <View style={styles.rattingNum}>
                            <AirbnbRating 
                              defaultRating={c.ratting}
                              size={10}
                              isDisabled={true}
                              reviews={[
                                'Terrible',
                                'Malo',
                                'Aceptable',
                                'Bueno',
                                'Increible',
                              ]}
                              reviewSize={15}
                            />
                          </View>
                        </View>
                      )
                    })
                  }
                </View>
              </View>
            </View>
            <CustomAlertComponent
              visible={showModal}
              setVisible={setShowModal}
              setFlag={setFlag}
              flag={flag}
              title={!flag ? "¡Producto agregado!" : "¡Producto agregado anteriormente!"}
              message={"Revise su lista de favoritos"}
              color={"#DD8643"}
              iconName={"cards-heart"}
            />
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
