import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import logo from "../../../assets/icon.png";
import eyeOpen from "../../../assets/welcome/eye.png";
import eyeHidden from "../../../assets/welcome/hidden.png";
import styles from "./styles/Login.jsx";
import { useNavigation } from "@react-navigation/native";
import { vh } from "react-native-expo-viewport-units";
import AppStack from "../../Wrappers/AppStack.js";


export default function Login() {
  let [eye, setEye] = useState(true);

  const navigation = useNavigation();

  return (
    <>
        <StatusBar />
        <View style={{ height: vh(100) }}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.text}>INGRESAR</Text>
          </View>
          <View>
            <TextInput style={styles.inputMail} placeholder="Email" />
          </View>
          <View>
            <TextInput
              style={styles.inputPass}
              secureTextEntry={eye}
              placeholder="Contraseña"
            />
            <TouchableOpacity
              onPress={() => setEye(!eye)}
              style={styles.containerEye}
            >
              <Image source={eye ? eyeHidden : eyeOpen} style={styles.eye} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("AppStack")} style={styles.button}>
              <Text style={styles.buttonText}>INGRESAR</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Acá va ingresar con Google</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.forgotPass}>¿Olvidaste tu contraseña?</Text>
          </View>
          <View style={styles.containerRegisterNow}>
            <Text style={styles.notAccount}>¿No tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.registerNow}> Regístrate ahora.</Text>
            </TouchableOpacity>
          </View>
        </View>
    </>
  );
}
