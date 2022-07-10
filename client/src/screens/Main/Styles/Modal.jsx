import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: '100%',
        backgroundColor: '#1e1c1b',
    },
    containerNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    textNav: {
        fontSize: 20,
        letterSpacing: 6,
        color: '#fff6e8',
    },
    containerInstruments: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerbuttons: {
        flexDirection: 'row'
    },
    button: {
        margin: 5,
        width: 110,
        height: 100
    },
    container: {
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: 'gray',
        // backgroundColor: 'gray',
    },
    container2: {
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'gray',
    },
    name: {
        color: '#fff6e8',
    },
    image: {
        width: 70,
        height: 70,
        
    },
    containerPrice: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerLowerHigher: {
        flexDirection: 'row',
        width: '100%',
        justifyContent:'space-around'
    },
    buttonFilter:{
        flexDirection: 'row',
        width: '100%',
        justifyContent:'center'
        
    },
    textPrice: {
        fontSize:20,
        color: '#fff6e8',
        paddingTop: 15,
    },
    textButton: {
        marginTop:20,
        textAlign: 'center',
        color: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        color: '#fff',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        fontSize:15,
    },
    textButtonActive: {
        marginTop:20,
        textAlign: 'center',
        color: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        color: '#fff',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        fontSize:15,
        backkgroundColor: 'gray'
    }
})
export default styles