import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import styles from '../Styles/Item';

const HomeItem = ({ text, button }) => {
    const item =
    {
        "model": " Clásica Natural",
        "brand": "Admira",
        "price": 95.99,
        "type": "Guitarra Clasica",
        "category": "Guitarra",
        "stock": 50,
        "image": "https://res.cloudinary.com/dzonjuriq/image/upload/v1657387337/script_music_img/alba_natural_natural-removebg-preview_pmhyla.png",
        "description": "Si quieres aprender a tocar y no sabes qué modelo comprar, la guitarra Admira Sara probablemente sea una de las mejores opciones. Es un modelo ideal para principiantes y de los más vendidos de la marca, a diferencia de la Fiesta, esta tiene la tapa en Pino.",
        "user": [],
        "id": "62c9e52f89ca48a583966a39"
    }

    const { model, image, price, brand } = item
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.firstText}>
                <Text style={styles.Text}>{text}</Text>
            </View>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Details', { itemId: item.id })
                }

            >
                <View style={styles.priceFav}>
                    <Text style={styles.price}>${price}
                        <Text style={{ color: '#68f14d', fontSize: 17, marginLeft: 15,  }}>%30 off</Text>
                    </Text>
                </View>
                <View style={styles.image}>
                    <Image
                        style={{
                            width: 250,
                            height: 300,

                        }}
                        resizeMode="contain"
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
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                
                <View style={styles.secondText}>
                    <Text style={styles.Text}>{button}</Text>
                    <AntDesign name="right" size={24} color="#DD8643" />
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default HomeItem
