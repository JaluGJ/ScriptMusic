import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { cleanProducts, getAllFilterProducts } from '../../../redux/slices/products.js'
import bajo2 from '../../../../assets/instrumentos/bajo2.png'
import guitarra2 from '../../../../assets/instrumentos/guitarra2.png'
import percusion2 from '../../../../assets/instrumentos/percusion2.png'
import piano2 from '../../../../assets/instrumentos/piano2.png'
import ukelele2 from '../../../../assets/instrumentos/ukelele2.png'
import viento2 from '../../../../assets/instrumentos/viento2.png'
import violin2 from '../../../../assets/instrumentos/violin2.png'
import bajo1 from '../../../../assets/instrumentos/bajo3.png'
import guitarra1 from '../../../../assets/instrumentos/guitarra3.png'
import percusion1 from '../../../../assets/instrumentos/percusion3.png'
import piano1 from '../../../../assets/instrumentos/piano3.png'
import ukelele1 from '../../../../assets/instrumentos/ukelele3.png'
import viento1 from '../../../../assets/instrumentos/viento3.png'
import violin1 from '../../../../assets/instrumentos/violin3.png'
import { vh, vw } from "react-native-expo-viewport-units";
import styles from '../Styles/Categories.jsx'

const HomeCategories = ({botton}) => {
    const dispatch = useDispatch()
    const { category: category } = useSelector((state) => state.products);
    const navigation = useNavigation();

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        dispatch(cleanProducts())
      })
        return unsubscribe
    }, [])
    

    return (
        <View style={botton?styles.categoriesHome:styles.categories}>
            <ScrollView horizontal={botton?false:true} showsHorizontalScrollIndicator={false}>

                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Guitarra' }))
                        navigation.navigate('Products')
                    }}
                    style={botton?styles.buttonBottom:styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={botton?guitarra1:guitarra2}
                    />
                    <View>
                    {
                        botton? 
                        <Text style={{fontSize:18, marginRight:20, letterSpacing:3, color: '#DD8643',}}>
                            Guitarra
                        </Text>
                        :
                        <></>
                    }
                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Teclado' }))
                        navigation.navigate('Products')
                    }}
                    style={botton?styles.buttonBottom:styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={botton?piano1:piano2}
                    />
                    {
                        botton? 
                        <Text style={{fontSize:18, marginRight:20, letterSpacing:3,color: '#DD8643',}}>
                            Teclados
                        </Text>
                        :
                        <></>
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Bajos' }))
                        navigation.navigate('Products')
                    }}
                    style={botton?styles.buttonBottom:styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={botton?bajo1:bajo2}
                    />
                    {
                        botton? 
                        <Text style={{fontSize:18, marginRight:20, letterSpacing:3,color: '#DD8643',}}>
                            Bajos
                        </Text>
                        :
                        <></>
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Percusión' }))
                        navigation.navigate('Products')
                    }}
                    style={botton?styles.buttonBottom:styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={botton?percusion1:percusion2}
                    />
                    {
                        botton? 
                        <Text style={{fontSize:18, marginRight:20, letterSpacing:3,color: '#DD8643',}}>
                            Percusión
                        </Text>
                        :
                        <></>
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Viento' }))
                        navigation.navigate('Products')
                    }}
                    style={botton?styles.buttonBottom:styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={botton?viento1:viento2}
                    />
                    {
                        botton? 
                        <Text style={{fontSize:18, marginRight:20, letterSpacing:3,color: '#DD8643',}}>
                            Viento
                        </Text>
                        :
                        <></>
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Ukelele' }))
                        navigation.navigate('Products')
                    }}
                    style={botton?styles.buttonBottom:styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={botton?ukelele1:ukelele2}
                    />
                    {
                        botton? 
                        <Text style={{fontSize:18, marginRight:20, letterSpacing:3,color: '#DD8643',}}>
                            Ukelele
                        </Text>
                        :
                        <></>
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(getAllFilterProducts({ category: 'Arco' }))
                        navigation.navigate('Products')
                    }}
                    style={botton?styles.buttonBottom:styles.button}
                >
                    <Image
                        style={{
                            width: vw(10),
                            height: vh(5),
                            padding: 10
                        }}
                        resizeMode="contain"
                        source={botton?violin1:violin2}
                    />
                    {
                        botton? 
                        <Text style={{fontSize:18, marginRight:20, letterSpacing:3,color: '#DD8643',}}>
                            Arco
                        </Text>
                        :
                        <></>
                    }
                </TouchableOpacity>
            </ScrollView>
        </View>

    )
}

export default HomeCategories