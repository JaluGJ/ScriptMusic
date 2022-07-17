import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import userImage from "../../../assets/user.png";
import styles from "./Styles/MyProfile";

const MyProfile = () => {
  const { user } = useSelector((state) => state.signin);

  return (
    <View style={{ alignItems: "center" }}>
      <View>
        <Text style={styles.title}>MI PERFIL</Text>
      </View>
      <View>
        <Image source={userImage} style={styles.image} />
      </View>
      <View>
        <Text style={styles.name}>
          {user && user.firstName + " " + user.lastName}
        </Text>
      </View>
      <View>
        <Text style={styles.email}>{user && user.email}</Text>
      </View>
      <Text>Working on it...</Text>
    </View>
  );
};

export default MyProfile;
