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
        textAlign:'center',
        fontSize:35,
        color: '#ffffff',
        paddingVertical:10,
        fontWeight:'bold',
    },/* no tocar */
    
    absoluteTouchable:{
        marginBottom:10
    },

    /* Primer promo cuadrado vacio */
    offcontainerInfo:{
        display: 'none'
    },




    /* Segunda promo doble circulo */
    containerModel:{
        position: 'absolute',
        left: vw(10),
        height: vh(25),
    },
    containerInfo:{
        width: vw(90),
        marginTop:vh(10),
        flexDirection:'row',
        justifyContent:'center',
    },
    containerText:{
        justifyContent:'center',
    },
    containerModelUp:{
        position: 'absolute',
        top: vh(-10),
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
        position: 'absolute',
        bottom:vh(-7),
    },
    containerImageCircle:{
        position: 'absolute',
        bottom:5,
        transform: [{ rotate: "-25deg" }],
    },
    /* Quinto producto */
    containerImageCircleRotate:{
        position: 'absolute',
        bottom:5,
        transform: [{ rotate: "25deg" }],
    }
})

export default styles 