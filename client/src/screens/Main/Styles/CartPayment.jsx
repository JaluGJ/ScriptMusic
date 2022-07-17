import { StyleSheet } from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";
let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    containerCard: {
        backgroundColor: '#f1f0f0',
        height: vh(30),
        justifyContent: 'space-around'
    },
    arrowAnimatedModal: {
        right: vw(45),
        top: vh(-5),
        position: 'absolute',
        backgroundColor: '#f1f0f0',
        borderRadius: 50,
    },
    input: {
        height: 50,
        width: vw(100), /* VERSATIL */
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
    cardContainer: {
        height: 50,
        width: vw(100), 
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
    buttoPage: {
        backgroundColor: '#DD8643',
        marginHorizontal: 30,
        padding: 8,
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
})
export default styles;