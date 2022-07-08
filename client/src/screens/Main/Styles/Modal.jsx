import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    background: {
        flex: 1,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerbuttons:{
        flexDirection:'row'
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
        backgroundColor: '#141413'
    },
    name: {
        color: '#fff6e8',
    },
    image: {
        width: 100,
        height: 100,
        // backgroundColor:'red'
    }
})
export default styles


