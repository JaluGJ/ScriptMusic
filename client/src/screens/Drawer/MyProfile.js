import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import userImage from "../../../assets/user.png";
import styles from "./Styles/MyProfile";
import { useNavigation } from "@react-navigation/native";
import lapiz from "../../../assets/lapiz.png";
import * as imagePiker from "expo-image-picker";

const MyProfile = () => {
  const { user } = useSelector((state) => state.signin);
  return (
    <View style={{ alignItems: "center" }}>
      <View>
        <Text style={styles.title}>MI PERFIL</Text>
      </View>
      <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
        <Image source={userImage} style={styles.image} />
        <View style={styles.containerLapiz}>
          <TouchableOpacity onPress={() => "hola"} style={styles.buttonLapiz}>
            <Image source={lapiz} style={styles.lapiz} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.name}>
          {user && user.firstName + " " + user.lastName}
        </Text>
      </View>
      <View>
        <Text style={styles.email}>{user && user.email}</Text>
      </View>
    </View>
  );
};

export default MyProfile;
