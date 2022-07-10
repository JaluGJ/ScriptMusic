import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import styles from '../Styles/Product.jsx';

const Product = ({ item }) => {
    const { model, image, price, brand } = item
    const navigation = useNavigation();

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() =>
                navigation.navigate('Details', { itemId: item.id })
            }
        >
            <View style={styles.image}>
                <Image
                    style={{
                        width: 150,
                        height: 150,
                    }}
                    source={{ uri: image }}
                />
            </View>


            <View style={styles.textProduct}>
                <View style={styles.model}>
                    <Text style={styles.modelText}>{model}</Text>
                </View>
                <View style={styles.brand}>
                    <Text style={styles.textBrand}>{brand}</Text>
                </View>
                <View style={windowHeight >= 680 ?  styles.priceFav2 : styles.priceFav}>
                    <AntDesign name="shoppingcart" size={windowHeight >= 680 ? 22 : 24} color="black" />
                    <Text style={windowHeight >= 680 ? styles.price2 : styles.price}>${price}</Text>
                    <AntDesign name="hearto" size={windowHeight >= 680 ? 22 : 24} color="black" />
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default Product
