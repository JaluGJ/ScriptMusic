import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import styles from '../Styles/Product.jsx';

const Product = ({ item }) => {
    const { model, image, price, brand } = item
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() =>
                    navigation.navigate('Details',{itemId: item.id})
                }
            >
                <View style={styles.image}>
                    <Image
                        style={{
                            width: 50,
                            height: 100,
                        }}
                        source={{ uri: image }}
                    />
                </View>


                <View style={styles.textProduct}>
                    <View style={styles.model}>
                        <TouchableOpacity
                            style={styles.model}
                        >
                            <Text style={styles.modelText}>{model}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.brand}>
                        <Text style={styles.textBrand}>{brand}</Text>
                    </View>
                    <View style={styles.priceFav}>
                        <Text style={styles.price}>$ {price}</Text>
                        <AntDesign name="hearto" size={24} color="black" />
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Product
