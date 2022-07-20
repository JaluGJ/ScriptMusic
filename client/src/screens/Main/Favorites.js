import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, Alert } from "react-native";
import React from "react";
import emptyFav from "../../../assets/fav1.png";
import styles from "./Styles/Favorites.jsx";
import { useNavigation } from "@react-navigation/native";
import useFavorites from "./customHooks/useFavorites";
import FavProducts from "./modules/FavProducts";


export default function EmptyFavs() {
  const [favourites] = useFavorites();
  return favourites.length > 0 ? <FAVORITOS favourites={favourites}/> : <SINFAVORITOS />
}



export const FAVORITOS = ({favourites}) => {

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
            
            {favourites.map((item) => (
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