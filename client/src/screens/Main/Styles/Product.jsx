import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 110,
        marginHorizontal: 9,
        shadowColor: "#00000076",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.29,
        shadowRadius: 1.65,
        elevation: 3,
        marginVertical: 10,
        flexDirection: 'row',
    },
    image: {
        marginHorizontal: 25,
        marginVertical:5,
        width: 60,
    },
    textProduct:{
        marginVertical:8,
    },
    model: {
        flex: 1,
        width: 230,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    modelText: {
        flex: 1,
        flexWrap: 'wrap'
    },
    brand: {
        marginVertical: 3,
    },
    textBrand: {
        opacity: .6,
    },
    priceFav: {
        flexDirection: 'row',
        width: 340,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 2,
    },
})

export default styles