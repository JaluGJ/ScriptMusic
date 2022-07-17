import { Text, View } from "react-native";
import React, { useEffect } from "react";
import styles from "./Styles/MyShopping";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../redux/slices/signin";

const MyShopping = () => {
  const { user } = useSelector((state) => state.signin);

  console.log("user", user);

  return (
    <View style={{ alignItems: "center" }}>
      <View>
        <Text style={styles.title}>MIS COMPRAS</Text>
      </View>
      <Text>Working on it...</Text>
    </View>
  );
};

export default MyShopping;
