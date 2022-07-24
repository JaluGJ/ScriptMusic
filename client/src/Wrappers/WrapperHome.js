import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Main/Home";
import Details from "../screens/Main/Details";
import Products from "../screens/Main/Products";
import PromoDetail from "../screens/Main/PromoDetail";
const HomeStack = createStackNavigator();
const WrapperHome = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
      <HomeStack.Screen name="Products" component={Products} />
      <HomeStack.Screen name="PromoDetail" component={PromoDetail} />
    </HomeStack.Navigator>
  );
};

export default WrapperHome;

const styles = StyleSheet.create({});
