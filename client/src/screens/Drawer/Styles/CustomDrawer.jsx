import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    imgBackground:{
      padding:20,
      marginTop:-5
    },
    userImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      borderColor: "white",
      borderWidth: 1,
      backgroundColor: "red",
      marginBottom: 10,
      marginLeft: 5,
      marginTop: 25,
    },
    userName: {
      fontSize: 14,
      paddingLeft: 5,
      letterSpacing: 2,
      paddingBottom: 5,
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