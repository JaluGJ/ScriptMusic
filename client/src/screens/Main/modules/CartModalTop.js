import React from 'react'
import {Text, View, Pressable} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "../Styles/Cart.jsx";
const CartModalTop = ({setModal,totalPrice}) => {
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
                <Text style={styles.textCart}>Envio:</Text>
                <Text style={styles.textPrice}>-$2̶0̶</Text>
            </View>
            <View style={styles.textContainerTotal}>
                <Text style={styles.textCart}>Total:</Text>
                <Text style={styles.textPrice}>${totalPrice - 20}</Text>
            </View>
        </>
    )
}
export default CartModalTop