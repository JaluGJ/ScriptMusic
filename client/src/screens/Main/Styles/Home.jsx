import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#000000",
    },
    container: {
        height: "100%",
        backgroundColor: "#ffffff",
        // width: "100%",
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
    },
    containerNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    
    },
    textNav: {
        fontSize: 20,
        letterSpacing: 6,
    },
    input: {
        backgroundColor: "#fff6e8",
        borderRadius: 100,
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
        width: 220,
        height:40,
        letterSpacing: 2,
    },
    cartonblanco: {
        height: 1000,
    }
})

export default styles