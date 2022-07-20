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
import { putName } from "../../redux/slices/signin";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ModalName({ modal, setModal }) {
  const [name, setName] = useState("");
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
          <Text>NOMBRE</Text>
        </View>
      </Pressable>
      <TextInput
        onChangeText={(value) => setName(value)}
        style={{ backgroundColor: "blue", color: "white" }}
      />
      <Text>{name}</Text>
      <TouchableOpacity
        style={{ height: 110, width: 110, backgroundColor: "yellow" }}
        onPress={async () => {
          let token = await AsyncStorage.getItem("@token_id");
          dispatch(putName(name, token));
        }}
      >
        <Text>ENVIAR</Text>
      </TouchableOpacity>
    </Modal>
  );
}
