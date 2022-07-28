import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  logo: {
    height: 120,
    width: 120,
    marginVertical: 10
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    letterSpacing: 6,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFF6E8",
    borderRadius: 100,
    marginHorizontal: 30,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    paddingLeft: 18,
    zIndex: 0,
    paddingRight: 18,
    letterSpacing: 2,
  },
  containerLoginNow: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
    bottom: 10,
  },
  haveAccount: {
    opacity: 0.6,
    letterSpacing: 2,
  },
  loginNow: {
    color: "#DD8643",
    opacity: 0.6,
    letterSpacing: 2,
  },
});

export default styles;
