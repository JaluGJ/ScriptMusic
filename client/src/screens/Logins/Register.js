import {
  View,
  Text,
  Image,
  TextInput,
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
import { Formik, useField } from "formik";
import { FormikInputValue } from "./validation/FormikInputValue.js";
import { FormikSubmit } from "./validation/FormikSubmit.js";
import { postUser, setToken } from "../../redux/slices/signup.js";
import { useDispatch, useSelector } from "react-redux";

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

  const token = useSelector((state) => state.signup.token);
  const err = useSelector((state) => state.signup.err);

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
            onSubmit={async (obj) => {
              dispatch(postUser(obj));
              // Alert.alert("¡Usuario creado correctamente!");
              // navigation.navigate("Login");
            }}
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

          <FormikSubmit name="Acá va registrarse con Google" />

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
