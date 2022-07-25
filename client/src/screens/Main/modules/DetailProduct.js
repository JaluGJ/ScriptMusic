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
import styles from "../Styles/Detail.jsx";
import { vh, vw } from "react-native-expo-viewport-units";
const DetailProduct = ({ item }) => {
  const { model, brand, image, price, description } = item
  return (
    <View style={styles.containerProductDetails}>

      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { itemId: fav.id })}
      >

        <View style={styles.imageFav}>
          <Image
            style={{
              width: vw(50),
              height: vh(45),
            }}
            resizeMode="contain"
            source={{ uri: image }}
          />
        </View>

        <View style={styles.textProduct}>
          <View style={styles.brand}>
            <Text style={styles.modelBrand}>{brand}</Text>
          </View>
          <View style={styles.model}>
            <Text style={styles.modelText}>{model}</Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>

  )
}

export default DetailProduct