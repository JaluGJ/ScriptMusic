import { StyleSheet } from 'react-native'
import { vh, vw } from "react-native-expo-viewport-units";
const styles = StyleSheet.create({
    wrapper: {
        height: "100%",
    },
    container: {
        flex: 1,
        height: 600,
        backgroundColor: "#000000",
        borderRadius:40,
    },
    containerMain:{
        flex: 1,
        backgroundColor: "#F9F9F9",
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
    },
    containerNav: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:15,
        height: 65,
        backgroundColor: "#000000",
    }, 
    textNav: {
        fontSize: 20,
        letterSpacing: 6,
    },
    input: {
        backgroundColor: "#F9F9F9",
        borderRadius: 5,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 0,
        padding: 10,
        width: vw(55),
        height:40,
        letterSpacing: 2,
    },
    containerNoProducts:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
    },
    notProducts:{
        fontSize: 20,
        letterSpacing: 2,
        color: "#DD8643",
    },
    offTitle:{
        opacity: 1,
    },
    textCategories:{
        fontSize: 20,
        letterSpacing: 2,
        color: "#DD8643",
        textAlign:'center'
    },
    containerNewCartegories:{
        marginBottom:15,
    },
    containerTextCategories:{
        padding: 20,
    },
    titleCategories:{
        fontSize:20,
        letterSpacing: 2,
        fontWeight:'bold'
    },
    containerNewCartegories:{
        backgroundColor:'white',
        marginVertical:35,
        marginHorizontal:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        borderRadius:10
    }
})

export default styles