import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    categories: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: "#fff6e8",
        borderRadius: 100,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginHorizontal: 5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 5,
        marginBottom: 10,
        width: 110,
    },
    buttonActive: {
        backgroundColor: "#DD8643",
        borderRadius: 100,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginHorizontal: 5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 5,
        marginBottom: 10,
        width: 110,
    },
    buttonText: {
        color: "#DD8643",
        textAlign: "center",
        shadowColor: "#171717",
        fontSize: 16,
        letterSpacing:2,
    },
    buttonTextActive: {
        color: "#ffffff",
        textAlign: "center",
        shadowColor: "#171717",
        fontSize: 16,
        letterSpacing:2,  
    }
})

export default styles