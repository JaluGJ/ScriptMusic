import React from 'react'
import useFavorites from "../../../customHooks/useFavorites";
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { vh, vw } from "react-native-expo-viewport-units";
import styles from "../Styles/Favorites.jsx";
export default function EmptyFavs() {
    const [favourites] = useFavorites()
    return favourites.length > 3 ? <FAVORITOS favorite={favourites} /> : <SINFAVORITOS />
}

export const FAVORITOS = ({ favorite }) => {

    return (
        <View style={{
            marginHorizontal: 20
        }}>
            <View style={{
                width: vw(90),
                height: vh(45),
                borderRadius: 50,
                marginHorizontal: 20,
                backgroundColor: 'black',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                marginHorizontal: 5,
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 1,
                borderWidth: 2,
                borderColor: 'white'
            }}>
                <Text style={{
                    fontSize: 20,
                    letterSpacing: 6,
                    padding: 20,
                    color: 'white',
                }}>Tus favoritos</Text>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    {
                        favorite.map((fav, i) => {
                            if (i > 3) {
                                return
                            }
                            
                            return (
                                <View key={i} style={{
                                    width: '50%',
                                    height: vh(16),
                                    elevation: 5,
                                    borderWidth: 2,
                                    borderColor: 'white'
                                }}>
                                    <View style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>

                                        <Image
                                            style={{
                                                width: vw(20),
                                                height: vh(10),
                                            }}
                                            resizeMode="contain"
                                            source={{ uri: fav.image }}
                                        />
                                    </View>
                                    <View style={{

                                    }}>
                                        <Text
                                            style={{
                                                color: 'white',
                                                textAlign: 'center',
                                                alignItems: 'flex-end',
                                                paddingTop: 20
                                            }}
                                        >{fav.model}</Text>
                                    </View>
                                    {/* <View style={{
                                        width: vw(100),
                                    }}>
                                        <Text style={{
                                            color: 'white',
                                        }}>Ver mas favoritos</Text>
                                    </View> */}
                                </View>
                            )
                        })
                    }

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