import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {},
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 5,
    borderRadius: 20,
    elevation: 20,
    height: 300,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
  },
  cruz: {
    fontSize: 30,
    color: "red",
  },
  containerInput: {
    width: "100%",
    paddingVertical: 20,
  },
  input: {
    backgroundColor: "#d9d9d9",
    paddingLeft: 12,
    height: 35,
    borderRadius: 100,
    fontSize: 16,
  },
  containerButton: {
    width: "50%",
  },
  buttonErr: {
    backgroundColor: "#a9a9a9",
    height: 35,
    borderRadius: 100,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#DA952D",
    height: 35,
    borderRadius: 100,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
