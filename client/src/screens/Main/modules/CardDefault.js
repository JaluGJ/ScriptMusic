import React from 'react'
import { View, Text, Image, StatusBar } from "react-native";
import emptyCart from "../../../../assets/carrito1.png";
import styles from "../Styles/Cart.jsx";

const CardDefault = () => {
    return (
        <View style={styles.containerText}>
            <View style={{ alignItems: "center" }}>
                <Image source={emptyCart} style={styles.image} />
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Tu carrito está vacío.</Text>
            </View>

        </View>
    )
}

export default CardDefault