import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import styles from "./styles/AboutUsCard";

export default function AboutUsCard({ name, stack, image, github, linkedin }) {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={name === "JHEYSONN" ? styles.lastContainer : styles.container}
      >
        <Image style={styles.image} source={{ uri: image }} />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.stack}>{stack}</Text>
        </View>
        <View style={styles.containerICO}>
          <TouchableOpacity onPress={() => Linking.openURL(github)}>
            <Image
              style={styles.ico}
              source={{
                uri: "https://res.cloudinary.com/dzonjuriq/image/upload/v1658699808/script_music_img/github_orbit0.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(linkedin)}>
            <Image
              style={styles.ico}
              source={{
                uri: "https://res.cloudinary.com/dzonjuriq/image/upload/v1658699813/script_music_img/linkedin_sx0oyn.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
