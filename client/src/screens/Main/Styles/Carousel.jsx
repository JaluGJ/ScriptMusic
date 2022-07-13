import { StyleSheet } from 'react-native'
import { vh, vw } from "react-native-expo-viewport-units";
const styles = StyleSheet.create({

    container: {
        marginTop: 65,
        // width: "100%",
    },
    image: {
        width: vw(100),
        height: vh(25),
        resizeMode: 'cover'
    }

})

export default styles