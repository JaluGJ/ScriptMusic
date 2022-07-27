import React, { useDebugValue } from 'react'
import {Text, View, Pressable} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "../Styles/Cart.jsx";
import useShopping from '../../../customHooks/useShopping.js';
import useDiscount from '../../../customHooks/useDiscount.js';
const CartModalTop = ({setModal,totalPrice}) => {
    const [status, finalPrice , descuento] = useDiscount({totalPrice});

    return (
        <>
            <Pressable onPress={() => {
                setModal(false)
            }}>
                <View style={styles.arrowAnimatedModal}>
                    <AntDesign name="down" size={54} color="white" />
                </View>
            </Pressable>
            <View style={styles.textContainer}>
                <Text style={styles.textCart}>Sub Total:</Text>
                <Text style={styles.textPrice}>${totalPrice}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textCart}>{status}</Text>
                <Text style={styles.textPrice}>-{descuento}%</Text>
            </View>
            <View style={styles.textContainerTotal}>
                <Text style={styles.textCart}>Total:</Text>
                <Text style={styles.textPrice}>${finalPrice}</Text>
            </View>
        </>
    )
}
export default CartModalTop