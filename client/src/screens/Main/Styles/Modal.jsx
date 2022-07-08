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
        margin: 3,
        width: 120,
        height: 145
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#1e1c1b',
        borderColor: '#fff',
        borderWidth: 1,
    },

    name: {
        color: '#fff6e8',
    },
    image: {
        width: 100,
        height: 100,
        // backgroundColor:'red'
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
    },
    textButton: {
        marginTop:20,
        textAlign: 'center',
        color: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        fontSize:15,
    }
})
