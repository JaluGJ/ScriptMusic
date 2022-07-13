import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFilterProducts } from '../../../redux/slices/products.js'
import styles from '../Styles/Categories.jsx'

const HomeCategories = () => {
    const dispatch = useDispatch()
    const { category: category } = useSelector((state) => state.products);
    const navigation = useNavigation();

    return (
        <View style={styles.categories}>
            <ScrollView scrollToOverflowEnabled={false} horizontal={true}>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Guitarra' }))
                        navigation.navigate('Products')
                    }}
                    style={category === 'Guitarra' ? styles.buttonActive : styles.button}
                >
                    <Text
                        style={category === 'Guitarra' ? styles.buttonTextActive : styles.buttonText}
                    >GUITARRAS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Teclado' }))
                        navigation.navigate('Products')
                    }}
                    style={category === 'Teclado' ? styles.buttonActive : styles.button}
                >
                    <Text
                        style={category === 'Teclado' ? styles.buttonTextActive : styles.buttonText}
                    >TECLADOS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Bajos' }))
                        navigation.navigate('Products')
                    }}
                    style={category === 'Bajos' ? styles.buttonActive : styles.button}
                >
                    <Text
                        style={category === 'Bajos' ? styles.buttonTextActive : styles.buttonText}
                    >BAJOS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Percusión' }))
                        navigation.navigate('Products')    
                    }}
                    style={category === 'Percusión' ? styles.buttonActive : styles.button}
                >
                    <Text
                        style={category === 'Percusión' ? styles.buttonTextActive : styles.buttonText}
                    >PERCUSIÓN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Viento' }))
                        navigation.navigate('Products')
                    }}
                    style={category === 'Viento' ? styles.buttonActive : styles.button}
                >
                    <Text
                        style={category === 'Viento' ? styles.buttonTextActive : styles.buttonText}
                    >VIENTO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Ukelele' }))
                        navigation.navigate('Products')
                    }}
                    style={category === 'Ukelele' ? styles.buttonActive : styles.button}
                >
                    <Text
                        style={category === 'Ukelele' ? styles.buttonTextActive : styles.buttonText}
                    >UKELELES</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Arco' }))
                        navigation.navigate('Products')
                    }}
                    style={category === 'Arco' ? styles.buttonActive : styles.button}
                >
                    <Text
                        style={category === 'Arco' ? styles.buttonTextActive : styles.buttonText}
                    >ARCO</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

export default HomeCategories