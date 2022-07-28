import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '75%',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderRadius: 20,
      elevation: 20,
    },
      title: {
          fontSize: 25,
          textAlign: 'center',
          marginVertical: 5,
          fontWeight: 'bold',
      },
      subTitle: {
          fontSize: 18,
          textAlign: 'center',
          marginTop: 5,
          marginBottom: 15,   
      },
    bottom: {
      width: '100%',
      height: 50,
      // alignItems: 'flex-end',
      justifyContent: 'center',
      // backgroundColor: 'red',
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 20,
      paddingHorizontal: 40,
    },
    buttonClose: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DD8643',
      borderRadius: 20,
      width: '100%',
      height: '100%',
      paddingHorizontal: 50,
    },
    buttonGreen:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#01A601',
      borderRadius: 20,
      width: '100%',
      height: '100%',
      paddingHorizontal: 50,
    },
    buttonRed:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F70000',
      borderRadius: 20,
      width: '100%',
      height: '100%',
      paddingHorizontal: 50,
    },
      buttonText: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      },
  });

    export default styles;