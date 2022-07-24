import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 9,
        shadowColor: "#00000076",
        shadowOffset: {
            width: 3,
            height: 1,
        },
        shadowOpacity: 0.29,
        shadowRadius: 1.65,
        width: 220,
        paddingTop:30,
        elevation: 3,
        borderRadius:10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textProduct:{
        marginVertical:8,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    model: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modelText: {
        textAlign:'center'
    },
    brand: {
        marginVertical: 3,
    },
    textBrand: {
        opacity: .6,
    },
    priceFav: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: "center"
    },
    price: {
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 2,
    },
})

export default styles