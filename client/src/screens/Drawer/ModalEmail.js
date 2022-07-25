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
import { cleanErr, putEmail } from "../../redux/slices/signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Styles/ModalEmail";

export default function ModalEmail({ modal, setModal }) {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [actualEmail, setActualEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    setErrors({ email: "Ingrese un mail válido." });
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
      errors.email = "Ingrese un mail válido.";
    return errors;
  };

  let handleInputChange = (value) => {
    setEmail(value);
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
                onChangeText={(value) => setActualEmail(value)}
                style={styles.input}
                placeholder="Email actual"
              />
            </View>
            <View style={styles.containerInput}>
              <TextInput
                onChangeText={(value) => setPassword(value)}
                style={styles.input}
                placeholder="Contraseña actual"
              />
            </View>
            {errors.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
            <View style={styles.containerInput}>
              <TextInput
                onChangeText={(value) => handleInputChange(value)}
                style={styles.input}
                placeholder="Nuevo email"
              />
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={errors.email ? styles.buttonErr : styles.button}
                disabled={errors.email}
                onPress={async () => {
                  setModal(!modal);
                  let token = await AsyncStorage.getItem("@token_id");
                  dispatch(putEmail(actualEmail, email, password, token));
                  setErrors({ email: "Ingrese una contraseña válida." });
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
