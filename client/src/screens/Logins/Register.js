import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
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
import {  postUser } from "../../redux/slices/signup.js";
import { useDispatch, } from "react-redux";
import useRegister from "../../customHooks/useRegister.js";
import useNotifications from "../../customHooks/useNotifications.js";



export default function Register() {
  useNotifications()
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {initialValues} = useRegister();

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
            onSubmit={(obj) =>{
               dispatch(postUser(obj))
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
