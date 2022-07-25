import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanErr, putPassword } from "../../redux/slices/signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Styles/ModalPassword";

export default function ModalPassword({ modal, setModal }) {
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");
  const [actualPass, setActualPass] = useState("");
  const dispatch = useDispatch();
  const { user, err } = useSelector((state) => state.signin);


  useEffect(() => {
    setErrors({ password: "Ingrese una contraseña válida." });
  }, []);

  let validate = (password) => {
    let errors = {};
    if (
      password === "" ||
      password === null ||
      password === undefined ||
      password.length < 1
    )
      errors.password = "Debes ingresar una contraseña.";
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password))
      errors.password =
        "Su contraseña debe incluir, al menos, 8 caracteres, una mayúscula, una minúscula y un número.";
    return errors;
  };

  let handleInputChange = (value) => {
    setPassword(value);
    setErrors(validate(value));
  };

  return (
    <Modal visible={modal} style={styles.modal} transparent>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <Pressable onPress={() => setModal(!modal)}>
                <Text style={styles.cruz}>╳</Text>
              </Pressable>
            </View>
            <View style={styles.containerInput}>
              <TextInput
                onChangeText={(value) => setActualPass(value)}
                style={styles.input}
                placeholder="Contraseña actual"
              />
            </View>
            {errors.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
            <View style={styles.containerInput}>
              <TextInput
                onChangeText={(value) => handleInputChange(value)}
                style={styles.input}
                placeholder="Nueva contraseña"
              />
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={errors.password ? styles.buttonErr : styles.button}
                disabled={errors.password}
                onPress={async () => {
                  setModal(!modal);
                  let token = await AsyncStorage.getItem("@token_id");
                  dispatch(putPassword(actualPass, password, user.email, token));
                  setErrors({ password: "Ingrese una contraseña válida." });
                  setTimeout(() => {
                    if (err) {
                      Alert.alert("Error", "Ingresa correctamente tu contraseña actual.");
                      setTimeout(() => {
                        dispatch(cleanErr());
                      }, 500);
                    }else{
                      Alert.alert("¡Contraseña actualizada!", "Tu contraseña ha sido cambiada con éxito.");
                    }
                  }, 900);
                }}
              >
                <Text>ACTUALIZAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
