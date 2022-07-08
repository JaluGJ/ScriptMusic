import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../Styles/Categories.jsx'
import React from 'react'

const Categories = () => {
    return (
        <View style={styles.categories}>
            <ScrollView horizontal={true}>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts('Todos'))} style={styles.button}>
                    <Text style={styles.buttonText}>TOTAL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts('Guitarra'))}  style={styles.button}>
                    <Text style={styles.buttonText}>GUITARRA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts('Teclado'))}  style={styles.button}>
                    <Text style={styles.buttonText}>TECLADOS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts('Bajos'))}  style={styles.button}>
                    <Text style={styles.buttonText}>BAJOS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts('Percusión'))}  style={styles.button}>
                    <Text style={styles.buttonText}>PERCUSION</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts('Viento'))}  style={styles.button}>
                    <Text style={styles.buttonText}>VIENTO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts('Ukelele'))}  style={styles.button}>
                    <Text style={styles.buttonText}>UKELELE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts('Arco'))}  style={styles.button}>
                    <Text style={styles.buttonText}>ARCO</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts(filters))}  style={styles.button}>
                    <Text style={styles.buttonText}>PLATISHO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts(filters))}  style={styles.button}>
                    <Text style={styles.buttonText}>TAMBORE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts(filters))}  style={styles.button}>
                    <Text style={styles.buttonText}>GUITARRA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts(filters))}  style={styles.button}>
                    <Text style={styles.buttonText}>PLATISHO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts(filters))}  style={styles.button}>
                    <Text style={styles.buttonText}>TAMBORE</Text>
                </TouchableOpacity> */}

            </ScrollView>
        </View>
    )
}

export default Categories