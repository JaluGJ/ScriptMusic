import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

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
          }
        } else {
          AsyncStorage.setItem("@favorite", JSON.stringify([item]))
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }
        // AsyncStorage.getItem("@favorite").then(resultado=>setFavorite(resultado))
        // return favorite
      })
      .catch((error) => console.log(error));
  };

  const removeFromFavorite = async (id) => {
    try {
      let existingFav = await AsyncStorage.getItem("@favorite");
      if (existingFav !== null) {
        let favorites = JSON.parse(existingFav);
        let existingProduct = favorites.find((product) => {
          if (product.id === id) {
            return true;
          }
          return false;
        });

        if (existingProduct) {
          favorites.splice(favorites.indexOf(existingProduct), 1);
          await AsyncStorage.setItem("@favorite", JSON.stringify(favorites));
        }
      }
      // AsyncStorage.getItem("@favorite").then(resultado=>setFavorite(resultado))
      // return favorite
    } catch (e) {
      console.log(e);
    }
  };

  const getFavorite = async () => {
    try {
      let existingFav = await AsyncStorage.getItem("@favorite");
      if (existingFav !== null) {
        setFavorite(JSON.parse(existingFav));
        return favorite
      } else {
        return [];
      }
    } catch (e) {
      console.log(e);
    }
  };

  return { favorite, addToFavorite, removeFromFavorite , getFavorite};
};

export default useFavorites;