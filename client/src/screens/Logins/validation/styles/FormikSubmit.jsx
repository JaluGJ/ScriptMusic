import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFC680",
    borderRadius: 100,
    marginHorizontal: 30,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#DD8643",
    textAlign: "center",
    shadowColor: "#171717",
    fontSize: 16,
    letterSpacing: 2,
  },
});

export default styles;
