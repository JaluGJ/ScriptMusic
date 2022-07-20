import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userImage from "../../../assets/user.png";
import styles from "./Styles/MyProfile";
import lapiz from "../../../assets/lapiz.png";
import * as imagePicker from "expo-image-picker";
import { logOut, updateIMG } from "../../redux/slices/signin";
import { ScrollView } from "react-native";
import { Icon } from "@rneui/themed";
import ModalName from "./ModalName";
import ModalLastName from "./ModalLastName";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyProfile = () => {
  const [modalName, setModalName] = useState(false);
  const [modalLastName, setModalLastName] = useState(false);
  const { user } = useSelector((state) => state.signin);
  const dispatch = useDispatch();

  let imgPicker = async () => {
    let permisoResult = await imagePicker.requestMediaLibraryPermissionsAsync();

    if (permisoResult.granted === false) {
      Alert.alert(
        "Error",
        "Para actualizar tu foto, debes aceptar los permisos requeridos."
      );
      return;
    }

    let pickerResult = await imagePicker.launchImageLibraryAsync({
      mediaTypes: imagePicker.MediaTypeOptions.Images,
      base64: true,
    });

    if (pickerResult.cancelled === true) return;

    imgUpload(pickerResult);
  };

  let imgUpload = (pickerResult) => {
    let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;

    let data = {
      file: base64Img,
      upload_preset: "iconUserIMG",
    };

    fetch("https://api.cloudinary.com/v1_1/dzonjuriq/image/upload", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then(async (res) => {
        let data = await res.json();
        let token = await AsyncStorage.getItem("@token_id");
        dispatch(updateIMG(data.url, token));
      })
      .catch((e) => console.log(e));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <ModalName modal={modalName} setModal={setModalName} />
        <ModalLastName modal={modalLastName} setModal={setModalLastName} />
        <View style={styles.containerTop}>
          <View>
            <Text style={styles.title}>MI PERFIL</Text>
          </View>
          <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
            <Image
              source={user ? { uri: user.image } : userImage}
              style={styles.image}
            />
            <View style={styles.containerLapiz}>
              <TouchableOpacity
                onPress={() => imgPicker()}
                style={styles.buttonLapiz}
              >
                <Image source={lapiz} style={styles.lapiz} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.name}>
              {user && user.firstName + " " + user.lastName}
            </Text>
          </View>
        </View>
        <View style={styles.containerMid}>
          <View style={styles.containerName}>
            <View>
              <Text style={styles.titleName}>Nombre</Text>
              <Text style={styles.textName}>{user.firstName}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalName(!modalName);
              }}
            >
              <Image source={lapiz} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerLastName}>
            <View>
              <Text style={styles.titleLastName}>Apellido</Text>
              <Text style={styles.textLastName}>{user.lastName}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalLastName(!modalLastName);
              }}
            >
              <Image source={lapiz} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerEmail}>
            <Text style={styles.titleEmail}>Email</Text>
            <Text style={styles.textEmail}>{user.email}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => dispatch(logOut())}>
          <View style={styles.containerBottom}>
            <View style={styles.containerLogout}>
              <Icon name="login-variant" type="material-community" size={24} />
              <Text style={styles.textLogout}>Cerrar sesión</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MyProfile;
