import React from 'react'
import { SafeAreaView, Text, View, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import { Image } from "@rneui/themed";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import styles from './Styles/Detail.jsx'
import { useSelector, useDispatch  } from 'react-redux'
import { getProductDetails } from '../../redux/slices/products.js';
import { useEffect } from 'react';

const Details = ({route}) => {
  const { itemId } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {details} = useSelector(state => state.products);
  // let detail = {
  //   "model": "1960 Les Paul Special Double Cut",
  //   "brand": "Gibson",
  //   "price": '3390,00',
  //   "type": "Guitarra Eléctrica",
  //   "categoria": "Guitarra",
  //   "stock": 14,
  //   "image": "https://images.squarespace-cdn.com/content/v1/56c240a0d51cd440f4c3f6ca/1554744430295-Z33A2QVJFZ8SL4FI1KN2/timThumb.php.png?format=500w",
  //   "description": "Si buscas todo lo que te ofrece una Les Paul Special DC original de 1960, apreciarás esta magnífica reproducción de Gibson. Desde un mástil y un diapasón pegados con pegamento de piel hasta afinadores Kluson cuya autenticidad se ha analizado hasta el nivel molecular, la atención de Gibson por los detalles hace que la Les Paul Special Double Cut Reissue de 1960 sea una de las recreaciones más precisas del mercado.",
  //   "id": 21
  // }
  useEffect(() => {
    dispatch(getProductDetails(itemId))
    return () => {
      dispatch(getProductDetails())
    }
  }, [])
  



  return (


    <ScrollView>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.containerNav}>
            <Pressable
              onPress={() =>
                navigation.navigate('Home')
              }>
              <AntDesign name="left" size={27} color="black" />
            </Pressable>
            <Text style={styles.textNav}>DETALLES</Text>
            <AntDesign name="hearto" size={27} color="black" />
          </View>
          <View style={styles.containerMain}>
            <Text style={styles.model}>{details.model}</Text>
            <View style={styles.containerImg}>
              <Image
                style={{
                  width: '100%',
                  height: 800,
                }}
                source={{ uri: details.image }}
              />
            </View>
            <Text style={styles.brand}>{details.brand}</Text>
            <View style={styles.containerDescription}>
              <Text style={styles.description}>{details.description}</Text>
            </View>
            <Text style={styles.price}>$ {details.price}</Text>


            <View style={styles.containerStockSum}>

              <View>
                <Text style={styles.stock}>{details.stock}u disponibles</Text>
              </View>

              <View style={styles.minumPlus}>
                <AntDesign name="minuscircleo" size={24} color="#000000e2" />
                <Text style={styles.num}>1</Text>
                <AntDesign name="pluscircleo" size={24} color="#000000e2" />
              </View>
            </View>

            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>AL CARRITO</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>COMPRAR</Text>
              </TouchableOpacity>
            </View>



          </View>
        </View>
      </SafeAreaView>
    </ScrollView>


  )
}

export default Details
