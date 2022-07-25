import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    imgBackground:{
      padding:20,
      height:170,
      marginTop:-5
    },
    userImage: {
      width: 83,
      height: 83,
      borderRadius: 50,
      // borderColor: "white",
      // borderWidth: 1,
      // backgroundColor: "red",
      // marginBottom: 10,
      // marginLeft: 5,
      // marginTop: 25,
      position: "absolute",
      top: 31,
      left: 21
    },
    progressCircle:{
      marginTop:10,
      // position: "absolute",
      // top: 20,
      // left: 20
      // backgroundColor: "green",
      width: 90,
      marginBottom: 15,
    },
    level:{
      position: "absolute",
      letterSpacing: 1,
      top: 60,
      right: 75,
      fontSize: 20,
    },
    levelSubtitle:{
      position: "absolute",
      letterSpacing: 1,
      top: 90,
      right: 35,
    },
    userName: {
      fontSize: 14,
      paddingLeft: 2,
      letterSpacing: 2,
      paddingBottom: 3,
    },
    containerItems: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: 10,
    },
    drawerFooter: {
      backgroundColor: "black",
    },
    containerFooter: {
      paddingLeft: 20,
      paddingBottom: 22,
      borderTopWidth: 1,
      borderTopColor: "#ccc",
      backgroundColor: "white",
      // borderBottomLeftRadius: 40,
    },
    containerAbout: {
      flexDirection: "row",
      alignItems: "center",
    },
    containerSignOff: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 25,
    },
    about: {
      fontSize: 14,
      marginLeft: 10,
      fontSize: 15,
      letterSpacing: 2,
    },
    signOff: {
      fontSize: 14,
      marginLeft: 10,
      fontSize: 15,
      letterSpacing: 2,
    },
  });
  
  export default styles;