import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Alert } from "react-native";


const useFavorites = () => {
  const [favorite, setFavorite] = useState([]);

  const addToFavorite = (item) => {
    AsyncStorage.getItem("@favorite")
      .then((existingFav) => {
        if (existingFav !== null) {
          let favorites = JSON.parse(existingFav);
          let existingProduct = favorites.find((product) => {
            if (product.id === item.id) {
              return true;
            }
            return false;
          });
          if (!existingProduct) {
            favorites.push(item);
            AsyncStorage.setItem("@favorite", JSON.stringify(favorites))
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
              Alert.alert("Producto agregado a favoritos");
              return
          }
          Alert.alert("Este Producto ya está en favoritos");
        } else {
          AsyncStorage.setItem("@favorite", JSON.stringify([item]))
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
            Alert.alert("Producto agregado a favoritos");
        }
        // AsyncStorage.getItem("@favorite").then(resultado=>setFavorite(resultado))
        // return favorite
      })
      .catch((error) => console.log(error));
  };

  const removeFromFavorite = (id) => {
      AsyncStorage.getItem("@favorite").then(resultado=>{
        let favorites = JSON.parse(resultado);
        let newFavorites = favorites.filter((product) => {
          if (product.id === id) {
            return false;
          }
          return true;
        }
        );
        AsyncStorage.setItem("@favorite", JSON.stringify(newFavorites))
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }).catch((error) => console.log(error));
  };

  const getFavorite = () => {
    AsyncStorage.getItem("@favorite").then(resultado=>{
      if(resultado !== null){
        setFavorite(JSON.parse(resultado))
      }
    }).catch((error) => console.log(error));
  };

  return { favorite, addToFavorite, removeFromFavorite , getFavorite};
};

export default useFavorites;