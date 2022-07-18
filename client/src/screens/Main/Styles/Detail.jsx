import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "#000000",
    flex: 1,
  },
  container: {
    backgroundColor: "#F9F9F9",
    height: "100%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  containerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textNav: {
    fontSize: 20,
    letterSpacing: 6,
    padding: 20,
  },
  model: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 10,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  containerMain: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  containerImg: {
    height: 500,
    width: "100%",
  },
  brand: {
    marginTop: 15,
    fontSize: 23,
    fontWeight: "bold",
  },
  containerDescription: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  description: {
    textAlign: "center",
    fontSize: 15,
    letterSpacing: 2,
    opacity: 0.7,
  },
  price: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 23,
    letterSpacing: 2,
  },
  containerStockSum: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 30,
    width: 300,
    justifyContent: "space-between",
  },
  minumPlus: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: 100,
  },
  num: {
    textAlign: "center",
    marginTop: 1,
    fontSize: 20,
    marginHorizontal: 14,
  },
  stock: {
    fontSize: 15,
    letterSpacing: 2,
  },
  button: {
    backgroundColor: "#DD8643",
    borderRadius: 100,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginHorizontal: 30,
    marginBottom: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 5,
    marginBottom: 10,
    width: 170,
  },
  buttonText: {
    color: "#FFC680",
    textAlign: "center",
    shadowColor: "#171717",
    fontSize: 16,
    letterSpacing: 2,
  },
});

export default styles;
