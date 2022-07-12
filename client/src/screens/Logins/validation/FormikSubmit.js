import { useField } from "formik";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles/FormikSubmit";

export const FormikSubmit = ({ name, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};
