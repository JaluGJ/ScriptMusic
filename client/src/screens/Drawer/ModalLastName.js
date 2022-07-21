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
import { putLastName } from "../../redux/slices/signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Styles/ModalLastName";

export default function ModalLastName({ modal, setModal }) {
  const [errors, setErrors] = useState({});
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setErrors({lastName: "Ingrese un apellido válido"})
  }, [])

  let validate = (lastName) => {
    let errors = {};
    if (lastName === "" || lastName === null || lastName === undefined || lastName.length < 1) errors.lastName = "Debes ingresar un apellido.";
    if (lastName.length > 15) errors.lastName = "Máximo 15 caracteres";
    if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(lastName)) errors.lastName = "Ingrese un apellido válido"
    return errors;
  };

  let handleInputChange = (value) => {
    setLastName(value);
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
            {errors.lastName && <Text style={{color: "red"}}>{errors.lastName}</Text>}
            <View style={styles.containerInput}>
              <TextInput
                onChangeText={(value) => handleInputChange(value)}
                style={styles.input}
                placeholder="Nuevo apellido"
              />
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={errors.lastName ? styles.buttonErr : styles.button}
                disabled={errors.lastName}
                onPress={async () => {
                  setModal(!modal);
                  let token = await AsyncStorage.getItem("@token_id");
                  dispatch(putLastName(lastName, token));
                  setErrors({lastName: "Ingrese un nombre válido."});
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
