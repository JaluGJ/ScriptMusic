import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCart from '../screens/Main/ShoppingCart';
import Details from '../screens/Main/Details';
const CartStack = createStackNavigator();

const WrapperCart = () => {
  return (
    <CartStack.Navigator screenOptions={{
      headerShown: false,
    }}>
        <CartStack.Screen name="ShoppingCart" component={ShoppingCart} />
        <CartStack.Screen name="Details" component={Details} />
    </CartStack.Navigator>
  )
}

export default WrapperCart

const styles = StyleSheet.create({})