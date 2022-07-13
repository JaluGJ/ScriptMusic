import React from 'react'
import { View, Text, Image, StatusBar } from "react-native";
import styles from "../Styles/Cart.jsx";

const CardNav = ({productsCart}) => {
    return (
        <View style={styles.containerNav}>
            <Text style={styles.title}>CARRITO</Text>
            <View style={styles.navDetail}>
                {productsCart.length === 0 ?
                    <Text style={styles.navLength}>
                        
                    </Text>
                    :
                    <Text style={styles.navLength}>
                        {productsCart.length} items
                    </Text>
                }
            </View>
        </View>
    )
}

export default CardNav