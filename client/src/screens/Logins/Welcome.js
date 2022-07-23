import { View, Text, TouchableOpacity, Image, StatusBar, Platform } from "react-native";
import React from "react";
import styles from "./styles/Welcome.jsx";
import logo from "../../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";


export default function Welcome() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar />
      <View style={{ height: "100%" }}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.text}>¡Bienvenido a</Text>
          <View style={styles.containerTitle}>
            <Text style={styles.textLink}>SCRIPTMUSIC</Text>
            <Text style={styles.text}>!</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>INGRESAR</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>REGISTRARSE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerAboutUs}>
          <Text style={styles.textGrey}>Conoce</Text>
          <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
            <Text style={styles.textLinkGrey}> sobre nosotros.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
