import React from 'react'
import { View, Text, Image, StatusBar } from "react-native";
import styles from "../Styles/Cart.jsx";
import { vh, vw } from "react-native-expo-viewport-units";

const CardNav = ({ productsCart }) => {

    /* console.log(productsCart) */
    return (
        <>
            {
                productsCart.length === 0?
                    <View style={{
                        height: vh(10),
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 20,
                            letterSpacing: 6,
                            padding: 20,
                            color: 'black',
                        }}>CARRITO</Text>

                    </View>
                    :
                    <View style={{
                        height: vh(10),
                        backgroundColor: 'black',
                    }}>
                        <Text style={styles.title}>CARRITO</Text>
                        <View style={styles.navDetail}>
                            {productsCart.length === 0 ?
                                <Text style={styles.navLength}>

                                </Text>
                                :
                                <Text style={styles.navLength}>
                                    {productsCart.length === 1 ? `${productsCart.length} item` : `${productsCart.length} items`}
                                </Text>
                            }
                        </View>
                    </View>
            }

        </>
    )
}

export default CardNav