import { View, Text, ScrollView, Pressable } from "react-native";
import styles from "./styles/AboutUs";
import AboutUsCard from "../../components/AboutUsCard";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import hori from "../../../assets/aboutUs/hori.png";
import jalu from "../../../assets/aboutUs/jalu.png";
import gus from "../../../assets/aboutUs/gus.png";
import ivan from "../../../assets/aboutUs/ivan.png";
import jhey from "../../../assets/aboutUs/jheyson.png";
import machado from "../../../assets/aboutUs/machado.png";
import enzo from "../../../assets/aboutUs/enzo.jpg";
import facu from "../../../assets/aboutUs/facu.png";

const AboutUs = () => {
  const navigation = useNavigation();
  return (
    <View styles={styles.wrapper}>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={27} color="black" />
        </Pressable>
        <Text style={styles.title}>SOBRE NOSOTROS</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AboutUsCard
          name="HORACIO"
          stack="FRONT-END"
          image={hori}
          github="https://github.com/AngelRRand"
          linkedin="https://www.linkedin.com/in/horacio-rodriguez-460138238/"
        />
        <AboutUsCard
          name="GABRIEL"
          stack="BACK-END"
          image={jalu}
          github="https://github.com/JaluGJ"
          linkedin="https://www.linkedin.com/in/gabriel-jalil-b035b7108/"
        />
        <AboutUsCard
          name="FACUNDO"
          stack="FRONT-END"
          image={facu}
          github="https://github.com/FakuOrtiz"
          linkedin="https://www.linkedin.com/in/facundo-agustin-ortiz-gomez/"
        />
        <AboutUsCard
          name="ENZO"
          stack="BACK-END"
          image={enzo}
          github="https://github.com/EnzoDosSantos"
          linkedin="https://www.linkedin.com/in/enzo-facundo-dos-santos-2973b323a/"
        />
        <AboutUsCard
          name="CRISTIAN"
          stack="FRONT-END"
          image={machado}
          github="https://github.com/cmacha2"
          linkedin="https://www.linkedin.com/in/cristian-machado-%E2%9C%B0-0a2bba204/"
        />
        <AboutUsCard
          name="GUSBERLY"
          stack="BACK-END"
          image={gus}
          github="https://github.com/Gusberly"
          linkedin="https://www.linkedin.com/in/gusberly-morillo-b32545169/"
        />
        <AboutUsCard
          name="IVÁN"
          stack="FRONT-END"
          image={ivan}
          github="https://github.com/Broflotsky"
          linkedin="https://www.linkedin.com/in/ivan-reyes-7879b8216/"
        />
        <AboutUsCard
          name="JHEYSONN"
          stack="BACK-END"
          image={jhey}
          github="https://github.com/rennemetter"
          linkedin="https://www.linkedin.com/in/jheysonn-gil-646672237/"
        />
      </ScrollView>
    </View>
  );
};

export default AboutUs;
