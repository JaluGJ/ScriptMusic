import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import emptyFav from "../../../assets/fav1.png";
import styles from "./Styles/Favorites.jsx";
import { useNavigation } from "@react-navigation/native";

export default function EmptyFavs() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <StatusBar />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>FAVORITOS</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={emptyFav} style={styles.image} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text}>Aún no tienes productos favoritos.</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>¡Explora nuestros</Text>
          <View style={styles.containerTextLinked}>
            <Text style={styles.text}>productos</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.textLinked}> aquí</Text>
            </TouchableOpacity>
            <Text style={styles.text}>!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
