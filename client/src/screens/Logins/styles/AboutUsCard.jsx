import { StyleSheet } from "react-native";
import { vh } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    marginVertical: 20,
    borderWidth: 1,
  },
  lastContainer: {
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 90,
  },
  image: {
    width: vh(45),
    height: vh(45),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containerICO: {
    flexDirection: "row",
    marginVertical: 10,
  },
  ico: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },
  name: {
    fontSize: 30,
    letterSpacing: 6,
  },
  stack: {
    fontSize: 20,
    letterSpacing: 2,
  },
});

export default styles;
