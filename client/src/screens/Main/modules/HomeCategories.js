import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../Styles/Categories.jsx'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllFilterProducts } from '../../../redux/slices/products.js'

const HomeCategories = () => {
    const dispatch = useDispatch()
    return (
        <View style={styles.categories}>
            <ScrollView horizontal={true}>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Todos'}))} style={styles.button}>
                    <Text style={styles.buttonText}>TOTAL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Guitarra'}))}  style={styles.button}>
                    <Text style={styles.buttonText}>GUITARRA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Teclado'}))}  style={styles.button}>
                    <Text style={styles.buttonText}>TECLADOS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Bajos'}))}  style={styles.button}>
                    <Text style={styles.buttonText}>BAJOS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Percusión'}))}  style={styles.button}>
                    <Text style={styles.buttonText}>PERCUSION</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Viento'}))}  style={styles.button}>
                    <Text style={styles.buttonText}>VIENTO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Ukelele'}))}  style={styles.button}>
                    <Text style={styles.buttonText}>UKELELE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Arco'}))}  style={styles.button}>
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

export default HomeCategories