import { StyleSheet } from 'react-native'
import { vh, vw } from "react-native-expo-viewport-units";
const styles = StyleSheet.create({

    container: {
        marginTop: 70,
        // width: "100%",
    },
    image: {
        width: vw(80),
        height: vh(25),
        resizeMode: 'contain',
        borderRadius:30,
        borderColor:'white',
        borderWidth:1
    }

})

export default styles