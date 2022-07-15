import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    marginVertical: 30,
  },
  title: {
    textAlign:'center',
    fontSize: 20,
    letterSpacing: 6,
    padding: 20
  },
  navDetail:{
    alignItems:'center'
  },
  navLength:{
    fontSize: 19,
    letterSpacing:2,
    color: '#DD8643'
  },
  containerText: {
    alignItems: "center",
    marginVertical: 20,
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
  container: {
    backgroundColor: "#F9F9F9",
    height: "100%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  wrapper: {
    backgroundColor: "#000000",
  },
  containerProducts:{
    // backgroundColor:"red",
    paddingTop:20,
    height: "100%",
    paddingHorizontal: 20,
  },
  containerProduct:{
    flexDirection:'row',
    height: 200,
    // backgroundColor: "green",
  },
  containerProductImage:{
    width:120,
    height:160,
  },
  productImage:{
    width:'70%',
    height:'70%',
  },
  containerProductInfo:{
    width:'70%',
    height:'100%',
  },
  productInfo:{
    flexDirection:'column',
    justifyContent:'space-between',
    height:'100%',
  },
  productName:{
    fontSize:20,
    letterSpacing:2,
    color:'#DD8643',
  },
  containerProductCount:{
    paddingTop:10,
    width:'40%',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  productCount:{
    fontSize:20,
    letterSpacing:2,
  },
  containerTrash:{
    // backgroundColor:'#DD8643',
    paddingRight:30,
    alignItems: 'flex-end',
  },
  modal:{
    height:'100%',
  }
});

export default styles;
