import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    categories: {
        padding: 10,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
    },
    button: {
        backgroundColor: "#131010",
        borderRadius: 100,
        paddingVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginHorizontal: 5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 50,
        borderWidth:1,
        borderColor:'white'
    },
    buttonActive: {
        backgroundColor: "#DD8643",
        borderRadius: 100,
        paddingVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginHorizontal: 5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 50,
        borderWidth:1,
        borderColor:'#FFC680'
    },
})

export default styles