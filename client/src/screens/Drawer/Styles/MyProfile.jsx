import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleMain: {
    fontSize: 20,
    letterSpacing: 6,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 25,
    letterSpacing: 6,
    marginVertical: 10,
    textAlign: "center",
  },
  email: {
    letterSpacing: 2,
    marginVertical: 5,
  },
  containerLapiz: {
    position: "absolute",
    width: 40,
    height: 40,
  },
  buttonLapiz: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  lapiz: {
    width: 20,
    height: 20,
  },
  containerTop: {
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  containerMid: {
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    marginVertical: 15,
  },
  container: {
    alignItems: "center",
    width: "100%",
    padding: 20,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "rgba(0,0,0,.5)",
  },
  text: {
    fontSize: 20,
  },
  containerBottom: {
    alignItems: "flex-start",
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  containerLogout: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textLogout: {
    fontSize: 20,
    paddingLeft: 5,
  },
  progressCircle:{
    position: 'absolute',
    elevation:6
  },
  level:{
    letterSpacing: 2,
    fontSize: 22,
    padding: 10,
  }
});

export default styles;
