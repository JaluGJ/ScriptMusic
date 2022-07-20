import { View, Text, Modal, Pressable } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function ModalLastName({ modal, setModal }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
    </Modal>
  );
}
