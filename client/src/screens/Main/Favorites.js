import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./Styles/Favorites.jsx";
import { useNavigation } from "@react-navigation/native";
import FavProducts from "./modules/FavProducts";
import useFavorites from "../../customHooks/useFavorites";
import Loading from "../../components/Loading.js";
const emptyFav = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658861360/script_music_img/fav1_zrbowc.png'

export default function EmptyFavs() {
  const [favourites,loading] = useFavorites()
  return loading ? <Loading/> : favourites.length > 0 ? <Favourites favourites={favourites} /> : <NoFavourites />
}


export const Favourites = ({ favourites }) => {
  
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <StatusBar />
        <ScrollView >
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>FAVORITOS</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image  source={{uri:emptyFav}} style={styles.image} />
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

export const NoFavourites = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>FAVORITOS</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={{uri:emptyFav}} style={styles.image} />
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