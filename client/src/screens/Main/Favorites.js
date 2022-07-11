import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import emptyFav from "../../../assets/fav1.png";
import styles from "./Styles/Favorites.jsx";

export default function EmptyFavs() {
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
          {/* <Text style={styles.text}>Aún no tienes productos favoritos.</Text> */}
          <Text style={styles.text}>Proximamente ....</Text>
        </View>
        {/* <View style={styles.containerText}>
          <Text style={styles.text}>¡Explora nuestros</Text>
          <View style={styles.containerTextLinked}>
            <Text style={styles.text}>productos</Text>
            <Text style={styles.textLinked}> aquí</Text>
            <Text style={styles.text}>!</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
}
