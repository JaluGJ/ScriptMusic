import { StyleSheet } from 'react-native'
import { vh, vw } from "react-native-expo-viewport-units";
const styles = StyleSheet.create({
    categories: {
        flexDirection: 'row',
        paddingVertical: vh(3)
    },
    button: {
        backgroundColor: "#131010",
        borderRadius: 100,
        paddingVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        marginHorizontal: 5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        width: vw(16),
        height: vh(8),
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoriesHome:{
        marginHorizontal:10,
    },
    buttonBottom: {
        flexDirection: 'row',
        paddingVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        marginHorizontal: 5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        height: vh(8),
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export default styles