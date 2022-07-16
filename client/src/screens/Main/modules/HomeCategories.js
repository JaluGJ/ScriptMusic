import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFilterProducts } from '../../../redux/slices/products.js'
import bajo2 from '../../../../assets/instrumentos/bajo2.png'
import guitarra2 from '../../../../assets/instrumentos/guitarra2.png'
import percusion2 from '../../../../assets/instrumentos/percusion2.png'
import piano2 from '../../../../assets/instrumentos/piano2.png'
import ukelele2 from '../../../../assets/instrumentos/ukelele2.png'
import viento2 from '../../../../assets/instrumentos/viento2.png'
import violin2 from '../../../../assets/instrumentos/violin2.png'
import { vh, vw } from "react-native-expo-viewport-units";
import styles from '../Styles/Categories.jsx'

const HomeCategories = () => {
    const dispatch = useDispatch()
    const { category: category } = useSelector((state) => state.products);
    const navigation = useNavigation();

    return (
        <View style={styles.categories}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Guitarra' }))
                        navigation.navigate('Products')
                    }}
                    style={styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={guitarra2}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Teclado' }))
                        navigation.navigate('Products')
                    }}
                    style={styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={piano2}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Bajos' }))
                        navigation.navigate('Products')
                    }}
                    style={styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={bajo2}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Percusión' }))
                        navigation.navigate('Products')
                    }}
                    style={styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={percusion2}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Viento' }))
                        navigation.navigate('Products')
                    }}
                    style={styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={viento2}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Ukelele' }))
                        navigation.navigate('Products')
                    }}
                    style={styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={ukelele2}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Arco' }))
                        navigation.navigate('Products')
                    }}
                    style={styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={violin2}
                    />
                </TouchableOpacity>
            </ScrollView>
        </View>

    )
}

export default HomeCategories