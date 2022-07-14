import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles/AboutUsCard";
import githubIMG from "../../assets/aboutUs/github.png";
import linkedinIMG from "../../assets/aboutUs/linkedin.png";

export default function AboutUsCard({ name, stack, image, github, linkedin }) {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={name === "JHEYSONN" ? styles.lastContainer : styles.container}
      >
        <Image style={styles.image} source={image} />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.stack}>{stack}</Text>
        </View>
        <View style={styles.containerICO}>
          <TouchableOpacity onPress={() => Linking.openURL(github)}>
            <Image style={styles.ico} source={githubIMG} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(linkedin)}>
            <Image style={styles.ico} source={linkedinIMG} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
