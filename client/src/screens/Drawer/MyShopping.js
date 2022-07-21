import { Text, View } from "react-native";
import React, { useEffect } from "react";
import styles from "./Styles/MyShopping";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../redux/slices/signin";
import { useNavigation } from "@react-navigation/native";

const MyShopping = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.signin);

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(create(token));
    })
    return unsubscribe;
  },[])
  console.log(user.bought);
  
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
