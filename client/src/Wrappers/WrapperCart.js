import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../screens/Main/Cart";
import Details from "../screens/Main/Details";
import MyShopping from "../screens/Drawer/MyShopping";
import PromoDetail from "../screens/Main/PromoDetail";
const CartStack = createStackNavigator();

const WrapperCart = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Details" component={Details} />
      <CartStack.Screen name="MyShopping" component={MyShopping} />
      <CartStack.Screen name="PromoDetail" component={PromoDetail} />
    </CartStack.Navigator>
  );
};

export default WrapperCart;

const styles = StyleSheet.create({});
