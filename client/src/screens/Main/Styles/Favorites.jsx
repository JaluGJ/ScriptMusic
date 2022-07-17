import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    marginVertical: 30,
  },
  title: {
    fontSize: 20,
    letterSpacing: 6,
    padding: 20
  },
  containerText: {
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    letterSpacing: 2,
    textAlign: "center"
  },
  containerTextLinked: {
    flexDirection: "row",
  },
  textLinked: {
    fontSize: 20,
    color: "#DD8643",
    letterSpacing: 2,
  },
  wrapper: {
    backgroundColor: "#000000",
  },
  container: {
    backgroundColor:"#F9F9F9",
    height: "100%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },

});

export default styles;
