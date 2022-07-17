import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import styles from '../Styles/Product.jsx';
import { addToFavorite } from '../../../redux/slices/products.js';
import { useDispatch } from 'react-redux';

const Product = ({ item }) => {
    const { model, image, price, brand } = item
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            style={styles.container}
            onLongPress={() =>
                navigation.navigate('Details', { itemId: item.id })
            }
        >
            <View style={styles.image}>
                <Image
                    style={{
                        width: 150,
                        height: 150,
                    }}
                    resizeMode="contain"
                    source={{ uri: image }}
                />
                <TouchableOpacity style={{position:'absolute', top:3, right:-1}} onPress={()=>dispatch(addToFavorite(item))}>
                <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>
            </View>


            <View style={styles.textProduct}>
                <View style={styles.model}>
                    <Text style={styles.modelText}>{model}</Text>
                </View>
                <View style={styles.brand}>
                    <Text style={styles.textBrand}>{brand}</Text>
                </View>
                <View style={styles.priceFav}>
                    <Text style={styles.price}>${price}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default Product
