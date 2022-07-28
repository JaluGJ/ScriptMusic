import {
  Alert,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles/ForgotPassword.jsx";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const apiUrl = "https://sm.up.railway.app/";

const ForgotPassword = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    setErrors({ email: "Ingrese un email válido." });
  }, []);

  let validate = (email) => {
    let errors = {};
    if (
      email === "" ||
      email === null ||
      email === undefined ||
      email.length < 1
    )
      errors.email = "Debes ingresar un email.";
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email))
      errors.email = "Ingrese un email válido.";
    return errors;
  };

  let handleInputChange = (value) => {
    setEmail(value);
    setErrors(validate(value));
  };

  return (
    <View style={{ alignItems: "center", backgroundColor: "#f9f9f9" }}>
      <View style={{ backgroundColor: "#f9f9f9" }}>
        <Text style={styles.title}>RECUPERA TU CONTRASEÑA</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>
            Introduce tu email para recibir instrucciones sobre cómo establecer una nueva contraseña.
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          {errors.email && <Text style={{ color: "red" }}>{errors.email}</Text>}
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleInputChange(value)}
            placeholder="script.music22@gmail.com"
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={async () => {
              try {
                await axios.post(`${apiUrl}user/forgotPassword`, { email });
                Alert.alert(
                  "Email enviado",
                  "Revisa tu bandeja de entrada para continuar con la recuperación de tu contraseña."
                );
                navigation.goBack();
              } catch (error) {
                Alert.alert(
                  "Error",
                  "El email ingresado no se encuentra registrado en ScriptMusic."
                );
              }
            }}
            disabled={errors.email}
            style={errors.email ? styles.buttonErr : styles.button}
          >
            <Text>ENVIAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
