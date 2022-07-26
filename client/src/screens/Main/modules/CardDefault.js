import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../Styles/CardDefault.jsx";
const emptyCart = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658861360/script_music_img/carrito1_h3316r.png'

const CardDefault = () => {
    const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image source={{uri:emptyCart}} style={styles.image} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text}>Tu carrito está vacío.</Text>
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
  );
};

export default CardDefault;
