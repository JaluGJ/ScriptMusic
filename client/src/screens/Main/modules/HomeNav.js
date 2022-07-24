import React from "react";
import { View, TextInput, Image, TouchableNativeFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/Home.jsx";
import userIMG from "../../../../assets/user.png";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { cleanProducts } from "../../../redux/slices/products.js";

const HomeNav = ({ search, setSearch, setModal, modal, submitHandle }) => {
  let { user } = useSelector((state) => state.signin);
  const { list: products } = useSelector((state) => state.products);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.containerNav}>
      <TouchableNativeFeedback
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
          }}
          source={user ? { uri: user.image } : userIMG}
        />
      </TouchableNativeFeedback>
      <TextInput
        style={styles.input}
        placeholder=" Buscar"
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={() => submitHandle(search)}
      />

      <Ionicons
        name="filter-sharp"
        size={36}
        color="#DD8643"
        onPress={() => {
          setModal(!modal);
        }}
      />
    </View>
  );
};

export default HomeNav;
