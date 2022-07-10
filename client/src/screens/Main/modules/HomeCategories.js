import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../Styles/Categories.jsx'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFilterProducts } from '../../../redux/slices/products.js'

const HomeCategories = () => {
    const dispatch = useDispatch()
    const { category: category } = useSelector((state) => state.products);

    return (
        <View style={styles.categories}>
            <ScrollView horizontal={true}> 
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Todos'}))} style={category==='Todos' ? styles.buttonActive : styles.button}>
                    <Text style={ category==='Todos' ? styles.buttonTextActive : styles.buttonText}>TOTAL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Guitarra'}))}  style={category==='Guitarra' ? styles.buttonActive : styles.button}>
                    <Text  style={ category==='Guitarra' ? styles.buttonTextActive : styles.buttonText}>GUITARRA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Teclado'}))}  style={category==='Teclado' ? styles.buttonActive : styles.button}>
                    <Text  style={ category==='Teclado' ? styles.buttonTextActive : styles.buttonText}>TECLADOS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Bajos'}))}  style={category==='Bajos' ? styles.buttonActive : styles.button}>
                    <Text  style={ category==='Todos' ? styles.buttonTextActive : styles.buttonText}>BAJOS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Percusión'}))}  style={category==='Percusión' ? styles.buttonActive : styles.button}>
                    <Text  style={ category==='Percusión' ? styles.buttonTextActive : styles.buttonText}>PERCUSION</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Viento'}))}  style={category==='Viento' ? styles.buttonActive : styles.button}>
                    <Text  style={ category==='Viento' ? styles.buttonTextActive : styles.buttonText}>VIENTO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Ukelele'}))}  style={category==='Ukelele' ? styles.buttonActive : styles.button}>
                    <Text  style={ category==='Ukelele' ? styles.buttonTextActive : styles.buttonText}>UKELELE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts({category:'Arco'}))}  style={category==='Arco' ? styles.buttonActive : styles.button}>
                    <Text  style={ category==='Arco' ? styles.buttonTextActive : styles.buttonText}>ARCO</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts(filters))}  style={category==='Todos' ? styles.buttonActive : styles.button}>
                    <Text  style={ category==='Todos' ? styles.buttonTextActive : styles.buttonText}>PLATISHO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts(filters))}  style={category==='Todos' ? styles.buttonActive : styles.button}>
                    <Text  style={ category==='Todos' ? styles.buttonTextActive : styles.buttonText}>TAMBORE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts(filters))}  style={category==='Todos' ? styles.buttonActive : styles.button}>
                    <Text  style={ category==='Todos' ? styles.buttonTextActive : styles.buttonText}>GUITARRA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts(filters))}  style={category==='Todos' ? styles.buttonActive : styles.button}>
                    <Text  style={ category==='Todos' ? styles.buttonTextActive : styles.buttonText}>PLATISHO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts(filters))}  style={category==='Todos' ? styles.buttonActive : styles.button}>
                    <Text  style={ category==='Todos' ? styles.buttonTextActive : styles.buttonText}>TAMBORE</Text>
                </TouchableOpacity> */}

            </ScrollView>
        </View>
    )
}

export default HomeCategories