import { Text, View } from "react-native";
import React, { useEffect } from "react";
import styles from "./Styles/Addresses";
import { useDispatch, useSelector } from "react-redux";
import { getFavourites } from "../../redux/slices/favourites";

const Addresses = () => {
  const dispatch = useDispatch();
  const {  token } = useSelector((state) => state.signin);
  const { favourites } = useSelector((state) => state.favourites);

  useEffect(()=>{
    dispatch(getFavourites(token))
  },[])

  console.log("Direcciones", favourites) 

  return (
    <View style={{ alignItems: "center" }}>
      <View>
        <Text style={styles.title}>DIRECCIONES</Text>
      </View>
      <Text>Working on it...</Text>
    </View>
  );
};

export default Addresses;
