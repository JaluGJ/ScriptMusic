import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    marginTop: 70,
    marginBottom: 50,
  },
  logo: {
    height: 200,
    width: 200,
  },
  welcomeContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    letterSpacing: 2,
  },
  containerTitle: {
    flexDirection: "row",
    marginBottom: 50,
  },
  textLink: {
    color: "#DD8643",
    fontSize: 20,
    letterSpacing: 2,
  },
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
  containerAboutUs: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    position: "absolute",
    height: "100%",
    paddingBottom: 10,
  },
  textGrey: {
    opacity: 0.6,
    letterSpacing: 2,
  },
  textLinkGrey: {
    color: "#DD8643",
    opacity: 0.6,
    letterSpacing: 2,
  },
});

export default styles;
