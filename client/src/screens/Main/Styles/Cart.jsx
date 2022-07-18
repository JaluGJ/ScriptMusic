import { StyleSheet } from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";
let styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    marginVertical: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 6,
    padding: 5,
    color: 'white',
  },
  navDetail: {
    alignItems: 'center'
  },
  navLength: {
    fontSize: 19,
    letterSpacing: 2,
    color: '#DD8643'
  },
  containerText: {
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    letterSpacing: 2,
  },
  containerTextLinked: {
    flexDirection: "row",
  },
  textLinked: {
    fontSize: 20,
    color: "#DD8643",
    letterSpacing: 2,
  },
  containerNav: {
    height: vh(10),
    backgroundColor: '#000000',
    borderWidth: 1,
    shadowColor: "#00000076",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.79,
    shadowRadius: 1.65,
    elevation: 1,
  },



  /********* ESTILOS DE LA PARTE DEL TOTAL A PAGAR **************/
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  containerMain:{
    justifyContent:'center',
    alignItems: 'center',
  },
  modalContent: {
    height: vh(50),
    backgroundColor: '#000000',
    paddingBottom: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#00000076",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.79,
    shadowRadius: 1.65,
    elevation: 5,
  },
  modalPrueba:{
    flex: 1,
    backgroundColor: '#00000075',
  },
  arrowAnimated: {
    bottom: 15,
    position: 'absolute',
    backgroundColor: '#f09b59',
    borderRadius: 50,
  },
  arrowAnimatedModal: {
    right: vw(45),
    top: vh(-2),
    position: 'absolute',
    backgroundColor: '#000000',
    borderRadius: 50,
  },
  textContainer: {
    padding: '1%',
    marginHorizontal: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textContainerTotal: {
    padding: '1%',
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#d6d5d5'
  },
  textCart: {
    color: '#d6d5d5',
    letterSpacing: 3,
    fontSize: 19,
  },
  textPrice: {
    letterSpacing: 6,
    fontSize: 19,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold'
  },
  buttoPage: {
    backgroundColor: '#DD8643',
    marginHorizontal: 30,
    padding: 8,
    marginTop: 25,
    textAlign: 'center',
    color: '#DD8643',
    borderRadius: 30,
  },
  buttoPageText: {
    textAlign: 'center',
    color: '#ffffff',
    letterSpacing: 2,
    fontSize: 20,
  },

  /**************** ESTILOS DEL PRODUCTO **********************/
  containerProducts: {
    height: vh(84),
    backgroundColor: '#f1f0f0',
  },
  containerProduct: {
    flexDirection: 'row',
    height: 150,
    width: vw(95), /* VERSATIL */
    paddingLeft: 10,
    marginTop: 5,
    marginHorizontal: 5,
    shadowColor: "#00000076",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.79,
    shadowRadius: 1.65,
    elevation: 1,
    borderRadius: 30,
    backgroundColor: '#ffffff',
  },
  containerProductsOff: {
    height: vh(84),
    backgroundColor: '#0000006d',
  },
  containerProductInfo: {
    justifyContent: 'space-around',
    width: '70%',
    height: '100%',
  },
  containerProductImage: {
    width: vw(35),
    height: 160,
    justifyContent: 'center',
  },
  productName: {
    flexWrap: 'wrap',
    width: vw(50),
    fontSize: 15,
    letterSpacing: 2,
    color: '#000000',
  },
  productInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  productImage: {
    width: '70%',
    height: '70%',
  },
  productPrice: {
    fontSize: 15,
    letterSpacing: 2,
  },
  containerProductCount: {
    paddingTop: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productBrand: {
    color: "#777777",
  },
  containerPlus: {
    flexDirection: 'row',
  },
  productCount: {
    fontSize: 20,
    marginHorizontal: 15,
    letterSpacing: 2,
  },
  containerTrash: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  elimText: {
    color: 'crimson',
    fontSize: 20,
    textAlign: 'center',
  },
  containerNameTrash: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },




});

export default styles;
