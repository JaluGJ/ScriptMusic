import { View, Text, ScrollView } from "react-native";
import AboutUsCard from "../../components/AboutUsCard";
import styles from "./styles/AboutUs";

const AboutUs = () => {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>SOBRE NOSOTROS</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AboutUsCard
          name="HORACIO"
          stack="FRONT-END"
          image="https://res.cloudinary.com/dzonjuriq/image/upload/v1658699810/script_music_img/hori_ipkddy.png"
          github="https://github.com/AngelRRand"
          linkedin="https://www.linkedin.com/in/horacio-rodriguez-460138238/"
        />
        <AboutUsCard
          name="GABRIEL"
          stack="BACK-END"
          image="https://res.cloudinary.com/dzonjuriq/image/upload/v1658699811/script_music_img/jalu_unxh5x.png"
          github="https://github.com/JaluGJ"
          linkedin="https://www.linkedin.com/in/gabriel-jalil-b035b7108/"
        />
        <AboutUsCard
          name="FACUNDO"
          stack="FRONT-END"
          image="https://res.cloudinary.com/dzonjuriq/image/upload/v1658699808/script_music_img/facu_bfdtgf.png"
          github="https://github.com/FakuOrtiz"
          linkedin="https://www.linkedin.com/in/facundo-agustin-ortiz-gomez/"
        />
        <AboutUsCard
          name="ENZO"
          stack="BACK-END"
          image="https://res.cloudinary.com/dzonjuriq/image/upload/v1658699807/script_music_img/enzo_ka9bjv.jpg"
          github="https://github.com/EnzoDosSantos"
          linkedin="https://www.linkedin.com/in/enzo-facundo-dos-santos-2973b323a/"
        />
        <AboutUsCard
          name="CRISTIAN"
          stack="FRONT-END"
          image="https://res.cloudinary.com/dzonjuriq/image/upload/v1658699813/script_music_img/machado_dvrcdx.png"
          github="https://github.com/cmacha2"
          linkedin="https://www.linkedin.com/in/cristian-machado-%E2%9C%B0-0a2bba204/"
        />
        <AboutUsCard
          name="GUSBERLY"
          stack="BACK-END"
          image="https://res.cloudinary.com/dzonjuriq/image/upload/v1658699809/script_music_img/gus_wx3ty7.png"
          github="https://github.com/Gusberly"
          linkedin="https://www.linkedin.com/in/gusberly-morillo-b32545169/"
        />
        <AboutUsCard
          name="IVÁN"
          stack="FRONT-END"
          image="https://res.cloudinary.com/dzonjuriq/image/upload/v1658699810/script_music_img/ivan_gpsngj.png"
          github="https://github.com/Broflotsky"
          linkedin="https://www.linkedin.com/in/ivan-reyes-7879b8216/"
        />
        <AboutUsCard
          name="JHEYSONN"
          stack="BACK-END"
          image="https://res.cloudinary.com/dzonjuriq/image/upload/v1658699812/script_music_img/jheyson_f9edob.png"
          github="https://github.com/rennemetter"
          linkedin="https://www.linkedin.com/in/jheysonn-gil-646672237/"
        />
      </ScrollView>
    </View>
  );
};

export default AboutUs;
