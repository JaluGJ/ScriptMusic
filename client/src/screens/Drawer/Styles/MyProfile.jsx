import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    letterSpacing: 6,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 25,
    letterSpacing: 6,
    marginVertical: 10,
    textAlign: "center",
  },
  email: {
    letterSpacing: 2,
    marginVertical: 5,
  },
  containerLapiz: {
    position: "absolute",
    width: 40,
    height: 40,
  },
  buttonLapiz: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  lapiz: {
    width: 20,
    height: 20,
  },
});

export default styles;
