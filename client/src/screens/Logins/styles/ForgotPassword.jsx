import { StyleSheet } from "react-native";
import { vw } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  container: {
    width: vw(90),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.3)",
    backgroundColor: "white"
  },
  title: {
    fontSize: 20,
    letterSpacing: 6,
    padding: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    margin: 10,
  },
  input: {
    backgroundColor: "#d9d9d9",
    paddingLeft: 12,
    height: 35,
    borderRadius: 100,
    fontSize: 16,
    marginVertical: 10,
    width: 280,
  },
  buttonErr: {
    backgroundColor: "#a9a9a9",
    height: 35,
    borderRadius: 100,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    width: 100,
  },
  button: {
    backgroundColor: "#DA952D",
    height: 35,
    borderRadius: 100,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    width: 100,
  },
});

export default styles;
