import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, Alert} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import emptyFav from "../../../assets/fav1.png";
import styles from "./Styles/Favorites.jsx";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import useFavorites from "./customHooks/useFavorites";

export default function EmptyFavs() {
  const { favorite , getFavorite } = useFavorites();

  useEffect(()=>{
    getFavorite()
  })

  return favorite.length > 0 ? <FAVORITOS favorite={favorite} /> : <SINFAVORITOS />
}



export const FAVORITOS =({favorite}) => {
  const {removeFromFavorite} = useFavorites();

  return (
    <ScrollView >
      <View >
        <Text style={styles.headerText}>Favoritos</Text>
      </View>
      <View>
        {favorite.map((item) => (
          <View key={item.id}>
            <Text >{item.model}</Text>
            <Text >{item.brand}</Text>
            <Text >{item.price}</Text>
            <Image  style={styles.image} source={{ uri: item.image }} />
            <TouchableOpacity style={{width:20,height:20,backgroundColor:'red'}}>
              <Text style={styles.buttonText} onPress={()=> {
                removeFromFavorite(item.id)
                // Alert.alert('Removido de favoritos')
                }}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
  </ScrollView>
  )
}

export const SINFAVORITOS = () => {
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
          <TouchableOpacity onPress={() =>{navigation.navigate("Home")}}>
            <Text style={styles.textLinked}> aquí</Text>
          </TouchableOpacity>
          <Text style={styles.text}>!</Text>
        </View>
      </View>
    </View>
  </View>
  )
}