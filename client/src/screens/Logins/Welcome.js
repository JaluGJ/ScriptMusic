import { View, Text, TouchableOpacity, Image, StatusBar, Platform } from "react-native";
import React from "react";
import styles from "./styles/Welcome.jsx";
import logo from "../../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Welcome() {
  const navigation = useNavigation();

  

  function handlePress() {
    registerForPushNotificationsAsync()
      .then(async token => {
        await AsyncStorage.setItem('@pushToken', token);
        navigation.navigate("Register")
      })
      .catch(err => {
        console.log(err);
        navigation.navigate("Register")
      });
  }
  
 

  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('fail to get token');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      // console.log('this is the token', token);
    } else {
      return;
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    return token;
  }


  return (
    <>
      <StatusBar />
      <View style={{ height: "100%" }}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.text}>¡Bienvenido a</Text>
          <View style={styles.containerTitle}>
            <Text style={styles.textLink}>SCRIPTMUSIC</Text>
            <Text style={styles.text}>!</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>INGRESAR</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
          >
            <Text style={styles.buttonText}>REGISTRARSE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerAboutUs}>
          <Text style={styles.textGrey}>Conoce</Text>
          <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
            <Text style={styles.textLinkGrey}> sobre nosotros.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
