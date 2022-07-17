import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView} from "react-native";
import React, { useEffect } from "react";
import emptyFav from "../../../assets/fav1.png";
import styles from "./Styles/Favorites.jsx";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorite } from "../../redux/slices/products";

export default function EmptyFavs() {
  const {favorite} = useSelector(state => state.products);
  const dispatch = useDispatch();

  if(favorite.length > 0){
    return <FAVORITOS favorite={favorite} />
  }
  return <SINFAVORITOS />
}


const FAVORITOS =({favorite}) => {
  const dispatch = useDispatch();
  return (
    <ScrollView >
      <View >
        <Text style={styles.headerText}>Favoritos</Text>
      </View>
      <View>
        {favorite.map((item) => (
          <View >
            <Text >{item.model}</Text>
            <Text >{item.brand}</Text>
            <Text >{item.price}</Text>
            <Image  style={styles.image} source={{ uri: item.image }} />
            <TouchableOpacity style={{width:20,height:20,backgroundColor:'red'}}>
              <Text style={styles.buttonText} onPress={()=>dispatch(removeFromFavorite(item.id))}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
  </ScrollView>
  )
}

const SINFAVORITOS = () => {
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
  )
}