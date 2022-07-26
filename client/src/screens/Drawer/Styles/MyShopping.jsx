import { StyleSheet } from "react-native";
import { vw } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    letterSpacing: 6,
    padding: 20,
  },
  image: {
    width: 80,
    height: 80,
    margin: 5,
  },
  container: {
    marginVertical: 10,
    width: vw(95),
    borderRadius: 15,
    backgroundColor: "white",
  },
  containerDate: {
    flexDirection: "row",
    alignItems: "center",
  },
  lineaDate: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(0,0,0,.2)",
  },
  date: {
    textAlign: "center",
    margin: 8,
  },
  containerRest: {
    flexDirection: "row",
  },
  model: {
    fontSize: 15,
  },
  brand: {
    color: "rgba(0,0,0,.5)",
    fontSize: 13,
  },
  containerQuantity: {
    position: "absolute",
    width: vw(90),
    height: vw(25),
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  quantity: {
    fontSize: 13,
  },
});

export default styles;
