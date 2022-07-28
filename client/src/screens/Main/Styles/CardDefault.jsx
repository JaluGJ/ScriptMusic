import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    letterSpacing: 6,
    padding: 20,
  },
  containerText: {
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    letterSpacing: 2,
    textAlign: "center",
  },
  containerTextLinked: {
    flexDirection: "row",
  },
  textLinked: {
    fontSize: 20,
    color: "#DD8643",
    letterSpacing: 2,
  },
  container: {
    height: "100%",
    alignItems: "center",
  },
});

export default styles;
