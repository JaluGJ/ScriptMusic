import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        shadowColor: "#00000076",
        shadowOffset: {
            width: 3,
            height: 1,
        },
        marginTop:20,
        shadowOpacity: 0.29,
        shadowRadius: 1.65,
        marginHorizontal:30,
        elevation: 3,
        borderRadius:30,
        marginVertical: 10,
        backgroundColor:'white'
    },
    firstText:{
        height: 35,
        justifyContent:'center',
        borderBottomColor:'#919191',
        borderBottomWidth:1,
        alignItems:'center',
    },
    secondText:{
        height: 40,
        padding: 3,
        borderTopColor:'black',
        flexDirection:'row',
        borderTopWidth:1,
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight:20,
        backgroundColor: "#000000",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },  
    Text:{
        color: '#DD8643',
        fontSize:15,
        letterSpacing:2,
        marginHorizontal:5,
    },
    image: {
        
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ rotate: "35deg" }],
    },
    textProduct:{
        padding: 10,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    model: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modelText: {
        fontSize:20,
        textAlign:'center'
    },
    brand: {
        marginVertical: 3,
    },
    textBrand: {
        opacity: .6,
    },
    priceFav: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    price: {
        transform: [{ rotate: "-35deg" }],
        position: 'absolute',
        left: '3%',
        top: 40,
        color: '#df7727',
        fontWeight: 'bold',
        fontSize: 30,
        letterSpacing: 2,
    },
})

export default styles 