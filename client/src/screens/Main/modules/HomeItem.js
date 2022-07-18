import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import styles from '../Styles/Item';

const HomeItem = ({ text, button, model, price, brand, image, id }) => {
    

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.firstText}>
                <Text style={styles.Text}>{text}</Text>
            </View>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Details', { itemId: id })
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
