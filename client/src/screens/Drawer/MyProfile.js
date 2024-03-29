import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Styles/MyProfile";
import lapiz from "../../../assets/lapiz.png";
import * as imagePicker from "expo-image-picker";
import { logOut, updateIMG } from "../../redux/slices/signin";
import { ScrollView } from "react-native";
import { Icon } from "@rneui/themed";
import ModalName from "./ModalName";
import ModalLastName from "./ModalLastName";
import ModalPassword from "./ModalPassword";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useShopping from "../../customHooks/useShopping.js";
import ModalEmail from "./ModalEmail";
import * as Progress from 'react-native-progress';
const imageDefault = "https://res.cloudinary.com/dzonjuriq/image/upload/v1658861361/script_music_img/user_g8vdpj.png"

const MyProfile = () => {
  const { bought } = useShopping();
  const [modalName, setModalName] = useState(false);
  const [modalLastName, setModalLastName] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [modalEmail, setModalEmail] = useState(false)
  const { user } = useSelector((state) => state.signin);
  const dispatch = useDispatch();
  var progress = bought.length > 0 ? bought.length / 20 : 0;
  var status = bought.length > 0 && bought.length <= 2 ? "Level 1" : bought.length > 2 && bought.length <= 6 ? "Level 2" : bought.length > 6 && bought.length <= 10 ? "Level 3" : bought.length > 10 && bought.length <= 15 ? "Level 4" : bought.length > 15 && bought.length <= 20 ? "Level 5" : "Level 0";
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
        <ModalPassword modal={modalPassword} setModal={setModalPassword} />
        <ModalEmail modal={modalEmail} setModal={setModalEmail} />
        <View style={styles.containerTop}>
          <View>
            <Text style={styles.titleMain}>MI PERFIL</Text>
          </View>
          <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
            <Image
              source={user ? { uri: user.image } : { uri: imageDefault }}
              style={styles.image}
            />
            <View style={styles.progressCircle}>
              <Progress.Circle size={200} showsText={false} thickness={5} progress={progress} borderColor="#000000" color='orange' borderWidth={1} strokeCap='square'/>
            </View>
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
          <Text style={styles.level}>
            {status}
          </Text>
          <View style={styles.container}>

            <View>
              <Text style={styles.title}>Nombre</Text>
              <Text style={styles.text}>{user?.firstName}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalName(!modalName);
              }}
            >
              <Image source={lapiz} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>Apellido</Text>
              <Text style={styles.text}>{user?.lastName}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalLastName(!modalLastName);
              }}
            >
              <Image source={lapiz} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>Email</Text>
              <Text style={styles.text}>{user?.email.toLowerCase()}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalEmail(!modalEmail);
              }}
            >
              <Image source={lapiz} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>Contraseña</Text>
              <Text style={styles.text}>********</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalPassword(!modalPassword);
              }}
            >
              <Image source={lapiz} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
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
