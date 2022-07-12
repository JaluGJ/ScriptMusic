
import { View ,Text} from "react-native"
import styles from "./Styles/CustomDrawer.jsx"


const AboutUs = () => {
  return (
    <View styles={styles.wrapper}>
      <View styles={styles.container}>
        <Text styles={styles.title}>Sobre nosotros</Text>
        <Text styles={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, nisi eu consectetur consectetur,  
          nisl nisl consectetur nisl, eget consectetur nisl nisl eget
          consectetur nisl nisl.
        </Text>
      </View>
    </View>
  )
}

export default AboutUs

