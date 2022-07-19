import { StyleSheet } from 'react-native'
import { vh, vw } from "react-native-expo-viewport-units";
const styles = StyleSheet.create({
    background:{
        alignItems:'center',
    },/* no tocar */
    container: {
        width: vw(100),
        height: vh(47),
        marginTop:20,
        alignItems:'center',
        
    },/* no tocar */ 
    
    price:{
        height: vh(6),
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:25,
        color: '#ffffff',
        paddingVertical:10,
        fontWeight:'bold'
    },/* no tocar */
    
    modelText:{
        textAlign:'center',
        fontSize:20,
        color: '#ffffff',
    },
    secondText:{
        width: vw(70),
        flexDirection:'row',
        justifyContent:'space-around',
    },
    Text:{
        fontSize:20,
        color: '#DD8643',
    },


    /* Primer promo cuadrado vacio */
    offcontainerInfo:{
        display: 'none'
    },




    /* Segunda promo doble circulo */
    containerInfo:{
        width: vw(100),
        marginTop:vh(10),
        flexDirection:'row',
        justifyContent:'center',
    },
    containerText:{

    },
    containerTitle:{
        textAlign:'center', 
        justifyContent:'center',
        width: vw(40),
        backgroundColor:'black',
        borderRadius:20,
        padding: 20,
    },



    /* Tercer promo circulo en medio*/
    containerInfoCircle:{
        width: vw(70),
        height: vh(25),
        marginTop:vh(10),
        justifyContent:'center',
        alignItems:'center',
    },
    containerTextCircle:{
        display: 'none',
        position: 'absolute',
        bottom:vh(-7),
    },
    containerImageCircle:{
        position: 'absolute',
    }
})

export default styles 