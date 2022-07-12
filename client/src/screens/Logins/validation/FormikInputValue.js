import { useField } from "formik";
import { Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles/FormikInputValue";

export const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      {meta.error && <Text style={styles.error}>{meta.error}</Text>}
      <TextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        style={meta.error ? styles.inputRed : props.estilo}
        {...props}
      />
    </>
  );
};
