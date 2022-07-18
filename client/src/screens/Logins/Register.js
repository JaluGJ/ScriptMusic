import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./styles/Register.jsx";
import logo from "../../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";
import { vh } from "react-native-expo-viewport-units";
import { registerSchema } from "./validation/schemas/RegisterSchema.js";
import { Formik } from "formik";
import { FormikInputValue } from "./validation/FormikInputValue.js";
import { FormikSubmit } from "./validation/FormikSubmit.js";
import { cleanCache, postUser } from "../../redux/slices/signup.js";
import { useDispatch, useSelector } from "react-redux";
import { errFalse } from "../../redux/slices/signup.js";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export default function Register() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { err, flag } = useSelector((state) => state.signup);

  let handleErrorCheck = (err, flag) => {
    if (err) {
      dispatch(errFalse(err));
      Alert.alert("Ups...", "Ya existe un usuario registrado con ese email, prueba con otro.");
    }
    if (flag) {
      Alert.alert("¡Usuario registrado correctamente!", "Te enviamos un correo para verificar que el email te pertenece.");
      navigation.navigate("Login");
    }
  };

  useEffect(() => {
    handleErrorCheck(err, flag);
    return dispatch(cleanCache())
  }, [err, flag]);

  return (
    <>
      <StatusBar />
      <ScrollView>
        <View style={{ height: vh(100) }}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <Text style={styles.text}>REGISTRARSE</Text>
          <Formik
            validationSchema={registerSchema}
            initialValues={initialValues}
            onSubmit={(obj) => dispatch(postUser(obj))}
          >
            {({ handleSubmit }) => {
              return (
                <>
                  <FormikInputValue
                    estilo={styles.input}
                    name="firstName"
                    placeholder="Nombre"
                  />
                  <FormikInputValue
                    estilo={styles.input}
                    name="lastName"
                    placeholder="Apellido"
                  />
                  <FormikInputValue
                    estilo={styles.input}
                    name="email"
                    placeholder="Email"
                  />
                  <FormikInputValue
                    estilo={styles.input}
                    name="password"
                    placeholder="Contraseña"
                    secureTextEntry={true}
                  />
                  <FormikInputValue
                    estilo={styles.input}
                    name="passwordConfirmation"
                    placeholder="Repetir contraseña"
                    secureTextEntry={true}
                  />
                  <FormikSubmit onPress={handleSubmit} name="REGISTRARSE" />
                </>
              );
            }}
          </Formik>

          {/* <FormikSubmit name="Acá va registrarse con Google" /> */}

          <View style={styles.containerLoginNow}>
            <Text style={styles.haveAccount}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginNow}> Inicia sesión.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
