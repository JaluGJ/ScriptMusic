import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    imgBackground:{
      padding:20,
      height:170,
      marginTop:-5
    },
    borderUser:{
      width: 95,
      height: 95,
      borderRadius: 50,
      marginBottom:20
    },
    userImage: {
      width: 88,
      height: 88,
      borderRadius: 50,
      // borderColor: "white",
      // borderWidth: 1,
      // marginBottom: 10,
      // marginLeft: 5,
      // marginTop: 25,
    },
    progressCircle:{
      position: "absolute",
      top: -1,
      right: 2.1,
      // backgroundColor: "green",
      width: 95,
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