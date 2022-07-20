import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putLastName } from "../../redux/slices/signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Styles/ModalLastName";

export default function ModalLastName({ modal, setModal }) {
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

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
                onChangeText={(value) => setLastName(value)}
                style={styles.input}
                placeholder="Nuevo apellido"
              />
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  setModal(!modal);
                  let token = await AsyncStorage.getItem("@token_id");
                  dispatch(putLastName(lastName, token));
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
