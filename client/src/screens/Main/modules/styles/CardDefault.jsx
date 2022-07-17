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
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    alignItems: "center",
  },
  wrapper: {
    height: "100%",
    backgroundColor: "#000000",
    height: "100%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    alignItems: "center",
  },
});

export default styles;
