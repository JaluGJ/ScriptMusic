import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DD8643",
    borderRadius: 100,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginHorizontal: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 5,
    marginBottom: 10,
    width: 50,
  },
  containerButton: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff6e8",
  },
  buttonDisabled: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginHorizontal: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 5,
    marginBottom: 10,
    width: 50,
  },
  // buttonNumber: {
  //     alignItems: "center",
  //     justifyContent: "center",
  //     backgroundColor: "#DD8643",
  //     borderRadius: 100,
  //     paddingVertical: 10,
  //     shadowColor: "#000",
  //     shadowOffset: {
  //         width: 0,
  //         height: 2,
  //     },
  //     marginHorizontal: 5,
  //     shadowOpacity: 0.25,
  //     shadowRadius: 3.84,
  //     elevation: 5,
  //     marginTop: 5,
  //     marginBottom: 10,
  //     width: 40,
  // },
  // containerButtonNumber: {
  //     flexDirection: "row",
  //     justifyContent: "center"
  // }
});

export default styles;
