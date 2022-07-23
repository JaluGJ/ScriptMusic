import React from 'react'
import useFavorites from "../../../customHooks/useFavorites";
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { vh, vw } from "react-native-expo-viewport-units";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import styles from "../Styles/Favorites.jsx";
import logo from '../../../../assets/icon.png'
export default function EmptyFavs() {
    const [favourites, loading] = useFavorites()

    return favourites.length > 3 ? <FAVORITOS favorite={favourites} /> : <SINFAVORITOS />
}

export const FAVORITOS = ({ favorite }) => {
    const navigation = useNavigation();
    return (
        <View style={{
            marginHorizontal: 20
        }}>
            <View style={styles.containerFavHome}>


                <View style={{
                    position: 'absolute',
                    backgroundColor:'black',
                    width: vh(10),
                    height: vh(60),
                    right: 0,
                    borderBottomRightRadius:50,
                    borderTopRightRadius:50,
                }}/>
                {/* <View style={{
                    position: 'absolute',
                    backgroundColor:'black',
                    width: vh(14),
                    height: vh(20),
                    right: 0,
                    bottom: 0,
                    borderBottomRightRadius:50,
                    borderTopRightRadius:50,
                }}/> */}
                {/* <Image
                    source={logo}
                    style={{
                        width: vw(90),
                        height: vh(55),
                        position: 'absolute',
                        left: 0,
                        bottom: 110,

                    }}
                    resizeMode="contain"
                /> */}
                <View style={styles.containerFavTitle}>
                    <Text style={styles.titleFavHome}>Tus favoritos</Text>
                </View>
                <View style={styles.productsFavHome}>
                    {
                        favorite.map((fav, i) => {
                            if (i > 3) {
                                return
                            }

                            return (
                                <View key={i} style={styles.productFavHome} blurRadius={1}>
                                    <View style={styles.imageFav}>
                                        <Image
                                            style={{
                                                width: vw(30),
                                                height: vh(15),
                                            }}
                                            resizeMode="contain"
                                            source={{ uri: fav.image }}
                                        />
                                        <View style={{ position: 'absolute', top: 3, right: 3 }}>
                                            <Fontisto name="heart" size={34} color="#DD8643" />
                                        </View>
                                    </View>

                                    <View style={styles.textProduct}>
                                        <View style={styles.model}>
                                            <Text style={styles.modelText}>{fav.model}</Text>
                                        </View>
                                        <View style={styles.priceFav}>
                                            <Text style={styles.price}>${fav.price}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                    {/* <TouchableOpacity
                        onPress={()=> navigation.navigate('Favorites')}
                    >
                        <View style={styles.containerFavTitle}>

                            <Text style={{
                                color: '#DD8643',
                                letterSpacing: 2,
                                fontSize: 15
                            }}>Ver mas favoritos</Text>
                            <AntDesign name="right" size={20} color="#DD8643" />

                        </View>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    )
}

export const SINFAVORITOS = () => {
    const navigation = useNavigation();

    return (
        <View style={{
            marginHorizontal: 25,
            borderColor: 'white',
            borderWidth: 2,
            elevation: 1,
            borderRadius: 30
        }}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Favorites")}
            >
                <Image
                    source={{ uri: 'https://i.postimg.cc/bJY9dk8q/favorites.png' }}
                    style={{
                        width: '100%',
                        height: vh(30),
                        borderRadius: 30
                    }}
                    resizeMode='cover'
                />
            </TouchableOpacity>
        </View>
    )
}