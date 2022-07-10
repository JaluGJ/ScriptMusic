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
        elevation: 3,
        borderRadius:30,
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
        width: 180,
        justifyContent: 'space-between'
    },
    priceFav2: {
        flexDirection: 'row',
        width: 130,
        justifyContent: 'space-between',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 2,
    },
    price2: {
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 1,
        marginTop: 2
    },
})

export default styles