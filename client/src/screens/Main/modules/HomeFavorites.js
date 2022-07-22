import React from 'react'
import useFavorites from "../../../customHooks/useFavorites";
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { vh, vw } from "react-native-expo-viewport-units";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import styles from "../Styles/Favorites.jsx";
export default function EmptyFavs() {
    const [favourites,loading] = useFavorites()

    return  favourites.length > 3 ? <FAVORITOS favorite={favourites} /> : <SINFAVORITOS />
}

export const FAVORITOS = ({ favorite }) => {

    return (
        <View style={{
            marginHorizontal: 20
        }}>
            <View style={styles.containerFavHome}>
                <Text style={styles.titleFavHome}>Tus favoritos</Text>
                <View style={styles.productsFavHome}>
                    {
                        favorite.map((fav, i) => {
                            if (i > 3) {
                                return
                            }

                            return (
                                <View key={i} style={styles.productFavHome}>
                                    <View style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'white'
                                    }}>
                                        <View style={{
                                            position: 'absolute',
                                            right: 100,
                                            bottom: 10,
                                            width: vw(15),
                                            height: vw(25),
                                            backgroundColor: "black",
                                            borderRadius: 90,
                                            transform: [{ rotate: "-15deg" }],
                                        }}></View>
                                        <View style={{
                                            position: 'absolute',
                                            right: 110,
                                            bottom: 5,
                                            width: vw(20),
                                            height: vw(25),
                                            backgroundColor: "black",
                                            borderRadius: 40,
                                            transform: [{ rotate: "-15deg" }],
                                        }}></View>
                                        <View style={{
                                            position: 'absolute',
                                            right: 10,
                                            top: 10,
                                        }}>
                                            <Fontisto name="heart" size={35} color="black" />
                                        </View>
                                        <View style={{
                                            width: vw(50),
                                            height: vh(20),
                                        }}>
                                            <Image
                                                style={{
                                                    width: vw(32),
                                                    height: vh(25),
                                                    transform: [{ rotate: "-10deg" }],
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 10,
                                                }}
                                                resizeMode='contain'
                                                source={{ uri: fav.image }}
                                            />
                                        </View>

                                    </View>
                                    <View style={{
                                        position: 'absolute',
                                        right: 10,
                                        bottom: 10,
                                        borderRadius: 10,
                                        marginHorizontal: 20,
                                        backgroundColor: 'white',
                                        shadowColor: "#DD8643",
                                        shadowOffset: {
                                            width: 5,
                                            height: 1,
                                        },
                                        marginHorizontal: 5,
                                        shadowOpacity: 0.25,
                                        shadowRadius: 3.84,
                                        elevation: 2,
                                    }}>
                                        <Text
                                            style={{
                                                color: "black",
                                                textAlign: 'center',
                                                alignItems: 'flex-end',
                                                paddingTop: 4
                                            }}
                                        >{fav.model}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={{
                    height: vh(7),
                    width: vw(90),
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    backgroundColor: 'black',
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: "#DD8643",
                        textAlign: 'center',
                        fontSize: 15,
                        letterSpacing: 6,
                    }}>Ver mas favoritos</Text>
                    <AntDesign name="right" size={30} color="#DD8643" />
                </View>
            </View>
        </View>
    )
}

export const SINFAVORITOS = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>
                ola
            </Text>
        </View>
    )
}