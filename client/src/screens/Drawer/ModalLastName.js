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

export default function ModalLastName({ modal, setModal }) {
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  return (
    <Modal
      animationType="slide"
      visible={modal}
      style={{ flex: 1, justifyContent: "flex-end" }}
    >
      <Pressable onPress={() => setModal(!modal)}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            backgroundColor: "red",
          }}
        >
          <Text>APELLIDO</Text>
        </View>
      </Pressable>
      <TextInput
        onChangeText={(value) => setLastName(value)}
        style={{ backgroundColor: "blue", color: "white" }}
      />
      <Text>{lastName}</Text>
      <TouchableOpacity
        style={{ height: 110, width: 110, backgroundColor: "yellow" }}
        onPress={async () => {
          let token = await AsyncStorage.getItem("@token_id");
          dispatch(putLastName(lastName, token));
        }}
      >
        <Text>ENVIAR</Text>
      </TouchableOpacity>
    </Modal>
  );
}
