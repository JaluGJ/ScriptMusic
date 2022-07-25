import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { putName } from "../../redux/slices/signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Styles/ModalName";

export default function ModalName({ modal, setModal }) {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setErrors({email: "Ingrese un nombre válido."})
  }, [])

  let validate = (name) => {
    let errors = {};
    if (name === "" || name === null || name === undefined || name.length < 1) errors.name = "Debes ingresar un nombre.";
    if (name.length > 15) errors.name = "Máximo 15 caracteres.";
    if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(name)) errors.name = "Ingrese un nombre válido"
    return errors;
  };

  let handleInputChange = (value) => {
    setName(value);
    setErrors(validate(value));
  }

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
            {errors.name && <Text style={{color: "red"}}>{errors.name}</Text>}
            <View style={styles.containerInput}>
              <TextInput
                onChangeText={(value) => handleInputChange(value)}
                style={styles.input}
                placeholder="Nuevo nombre"
              />
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={errors.name ? styles.buttonErr : styles.button}
                disabled={errors.name}
                onPress={async () => {
                  setModal(!modal);
                  let token = await AsyncStorage.getItem("@token_id");
                  dispatch(putName(name, token));
                  setErrors({email: "Ingrese un nombre válido."});
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
