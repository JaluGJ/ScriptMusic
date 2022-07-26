import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { cleanProducts, getAllFilterProducts } from '../../../redux/slices/products.js'
const bajo2 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658865002/script_music_img/bajo2_ts1gbx.png'
const guitarra2 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864992/script_music_img/guitarra2_oqnz5y.png'
const percusion2 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864993/script_music_img/percusion2_cmtece.png'
const piano2 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864994/script_music_img/piano2_dlzfpz.png'
const ukelele2 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864995/script_music_img/ukelele2_edxksc.png'
const viento2 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864995/script_music_img/viento2_j98nmz.png'
const violin2 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864996/script_music_img/violin2_ftaz5g.png'
const bajo1 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864992/script_music_img/bajo3_pferld.png'
const guitarra1 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864992/script_music_img/guitarra3_t1q4uu.png'
const percusion1 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864993/script_music_img/percusion3_ck2iwv.png'
const piano1 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864994/script_music_img/piano3_coilox.png'
const ukelele1 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864995/script_music_img/ukelele3_toyc58.png'
const viento1 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864995/script_music_img/viento3_myswnp.png'
const violin1 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864999/script_music_img/violin3_dy3oks.png'
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
                        source={botton?{uri:guitarra1}:{uri:guitarra2}}
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
                        source={botton?{uri:piano1}:{uri:piano2}}
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
                        source={botton?{uri:bajo1}:{uri:bajo2}}
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
                        source={botton?{uri:percusion1}:{uri:percusion2}}
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
                        source={botton?{uri:viento1}:{uri:viento2}}
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
                        source={botton?{uri:ukelele1}:{uri:ukelele2}}
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
                        source={botton?{uri:violin1}:{uri:violin2}}
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