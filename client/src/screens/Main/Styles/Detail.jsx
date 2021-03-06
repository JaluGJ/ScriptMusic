import { StyleSheet } from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "#0000005e",
    flex: 1,
  },
  container: {
    backgroundColor: "#F9F9F9",
    height: "100%",
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
  modelDetail: {
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
  brandDetail: {
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
    borderRadius: 5,
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
  containerDetailComment: {
    backgroundColor: "white",
    marginVertical: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#00000053",
  },
  containerComment: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 1,
  },
  commentTitle: {
    fontSize: 20,
    letterSpacing: 2,
    padding: 20,
  },
  containerInfoComment: {
    flexDirection: "row",
    padding: 25,
  },
  containerImgComment: {
    borderRadius: 100,
    marginRight: 25,
  },
  commentText: {
    width: vw(50),
  },
  nameComment: {
    fontSize: 18,
  },
  rattingNum: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  containerImgPromo: {
    height: vh(25),
    width: "100%",
  },
  containerProductsDetails: {
    width: vw(100),
    height: vh(60),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    paddingBottom: 30,
  },
  containerProductDetails: {
    width: vw(80),
    height: vh(55),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    borderRadius: 20,
  },
  textNavPromos: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 3,
    padding: 20,
  },
  imageFav: {
    alignItems: "center",
    justifyContent: "center",
    width: vw(80),
  },
  promoText: {
    letterSpacing: 2,
    fontSize: 35,
    color: "#DD8643",
    fontWeight: "bold",
  },
  brand: {
    alignItems: "center",
    textAlign: "center",
  },
  modelBrand: {
    color: "#0000008b",
  },
  model: {
    alignItems: "center",
    textAlign: "center",
  },
  modelText: {
    letterSpacing: 2,
    fontSize: 15,
  },
  containerSendComment: {
    backgroundColor: "#DD8643",
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop:10,
  },
  containerSendCommentDisabled: {
    backgroundColor: "#a9a9a9",
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop:10,
  },
  textButtonDisableComment: {
    color: "#14100b",
    textAlign: "center",
    shadowColor: "#171717",
    fontSize: 16,
    letterSpacing: 2,
    
  },
  textButtonComment:{
    color: "#FFC680",
    textAlign: "center",
    shadowColor: "#171717",
    fontSize: 16,
    letterSpacing: 2,
    
  }
});

export default styles;
