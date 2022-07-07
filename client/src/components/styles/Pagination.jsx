import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
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
    containerButton: {
        justifyContent: "space-around",
        // alignItems: "center",
        flexDirection: "row",
    },
    buttonText: {
        color: "#fff6e8"
    },
    buttonDisabled: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
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
    }
})

export default styles