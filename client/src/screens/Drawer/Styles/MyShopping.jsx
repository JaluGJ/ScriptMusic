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
    height: vw(32),
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.79,
    shadowRadius: 1.65,
    elevation: 2,
  },
  containerDate: {
    marginLeft: vw(3),
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
  date: {
    margin: 2
  }
});

export default styles;
