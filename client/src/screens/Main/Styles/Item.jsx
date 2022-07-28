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




    /* Primer promo doble circulo */
    containerTypePromoOne:{
        position: 'absolute',
        bottom: vh(3),
        left: vw(8),
    },  
    containerModel:{
        display: 'none',
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
        position: 'absolute',
        bottom: vh(3),
        left: vw(8),
    },
    containerModelUp:{
        display: 'none'
    },
    containerImageOne:{
        marginLeft:vw(15),
    },
    /* Segunda promo circulo en medio*/
    containerTypePromoTwo:{
        position: 'absolute',
        top: vh(10),
        right: vw(8),
        transform: [{ rotate: "25deg" }],
    },
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

    /* Tercer producto */
    containerTypePromoThree:{
        position: 'absolute',
        bottom: vh(3),
        right: vw(17),
    },
    containerModalThree:{
        display: 'none'
    },
    containerInfoThree:{
        marginTop:40,
        height: vh(40),
        justifyContent:'center',
        alignItems:'center',
        width: vw(75)
    },
    containerTextThree:{
        position: 'absolute',
        left: -10,
        transform: [{ rotate: "-25deg" }],
    },
    /* Cuarto producto */
    containerTypePromoFor:{
        position: 'absolute',
        right: vw(10),
        bottom:10,
    },
    containerInfoCenter:{
        justifyContent:'center',
        alignItems:'center',
        height: vh(45),
    },
    containerInfoOff:{
        position: 'absolute',
        bottom:0,
        display: 'none',
    },
    containerTextOff:{
        position: 'absolute',
        top:0,
    },
    containerImageCircleRotate:{
        position: 'absolute',
        top:45,
        transform: [{ rotate: "25deg" }],
    }
})

export default styles 