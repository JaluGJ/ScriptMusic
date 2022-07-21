import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import emptyFav from "../../../assets/fav1.png";
import styles from "./Styles/Favorites.jsx";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import FavProducts from "./modules/FavProducts";
import useFavorites from "../../customHooks/useFavorites";

export default function EmptyFavs() {
  const [favourites,loading] = useFavorites()

  return  favourites.length > 0 ? <FAVORITOS favorite={favourites} /> : <SINFAVORITOS />
}

export const Loading = () =>{
  return (
    <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
    </View>
  )
}


export const FAVORITOS = ({ favorite }) => {
  
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <StatusBar />
        <ScrollView >
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>FAVORITOS</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image source={emptyFav} style={styles.image} />
          </View>
          <View>
            
            {favorite.map((item) => (
              <FavProducts 
                key={item.id}
                id={item.id}
                model={item.model}
                brand={item.brand}
                price={item.price}
                image={item.image}
                />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export const SINFAVORITOS = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
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
            <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
              <Text style={styles.textLinked}> aquí</Text>
            </TouchableOpacity>
            <Text style={styles.text}>!</Text>
          </View>
        </View>
      </View>
    </View>
  )
}