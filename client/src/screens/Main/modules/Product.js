import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import styles from "../Styles/Product.jsx";
import { useDispatch, useSelector } from "react-redux";
import { postFavourite } from "../../../redux/slices/favourites.js";
import CustomAlertComponent from "../../../components/CustomAlert.js";
import useFavorites from "../../../customHooks/useFavorites.js";

const Product = ({ item }) => {
  const { model, image, price, brand, id } = item;
  const { token } = useSelector((state) => state.signin);
  const [favourites] = useFavorites();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [flag, setFlag] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Details", { itemId: item.id })}
    >
      <View style={styles.image}>
        <Image
          style={{
            width: 150,
            height: 150,
          }}
          resizeMode="contain"
          source={{ uri: image }}
        />
        <TouchableOpacity
          style={{ position: "absolute", top: 3, right: -1 }}
          onPress={() => {
            const existente = favourites.find((item) => item.id === id);
            if (existente) {
              setFlag(true);
            } else {
              dispatch(postFavourite(token, id));
            }
            setShowModal(true);
          }}
        >
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.textProduct}>
        <View style={styles.model}>
          <Text style={styles.modelText}>{model}</Text>
        </View>
        <View style={styles.brand}>
          <Text style={styles.textBrand}>{brand}</Text>
        </View>
        <View style={styles.priceFav}>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
      <CustomAlertComponent
        visible={showModal}
        setVisible={setShowModal}
        setFlag={setFlag}
        flag={flag}
        title={
          !flag ? "¡Producto agregado!" : "¡Producto agregado anteriormente!"
        }
        message={"Revise su lista de favoritos"}
        color={"#DD8643"}
        iconName={"cards-heart"}
      />
    </TouchableOpacity>
  );
};

export default Product;
