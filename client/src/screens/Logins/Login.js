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
import { Formik } from "formik";
import loginSchema from "./validation/schemas/LoginSchema";
import { FormikInputValue } from "./validation/FormikInputValue";
import { FormikSubmit } from "./validation/FormikSubmit";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/signin";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  let [eye, setEye] = useState(true);
  const dispatch = useDispatch();
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
        <Formik
          validationSchema={loginSchema}
          initialValues={initialValues}
          onSubmit={(obj) => {
            dispatch(loginUser(obj));
          }}
        >
          {({ handleSubmit }) => {
            return (
              <>
                <FormikInputValue
                  estilo={styles.inputMail}
                  name="email"
                  placeholder="Email"
                />
                <View>
                  <FormikInputValue
                    estilo={styles.inputPass}
                    name="password"
                    placeholder="Contraseña"
                    secureTextEntry={eye}
                  />
                  <TouchableOpacity
                    onPress={() => setEye(!eye)}
                    style={styles.containerEye}
                  >
                    <Image
                      source={eye ? eyeHidden : eyeOpen}
                      style={styles.eye}
                    />
                  </TouchableOpacity>
                </View>
                <FormikSubmit onPress={handleSubmit} name="INGRESAR" />
              </>
            );
          }}
        </Formik>

        {/* <FormikSubmit name="Acá va ingresar con Google" /> */}

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
