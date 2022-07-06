import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Favorites from '../screens/Main/Favorites';
import Details from '../screens/Main/Details';
const FavoritesStack = createStackNavigator();

const WrapperFavorites = () => {
  return (
    <FavoritesStack.Navigator   screenOptions={{
      headerShown: false,
    }}>
        <FavoritesStack.Screen name="Favorites" component={Favorites} />
        <FavoritesStack.Screen name="Details" component={Details} />
    </FavoritesStack.Navigator>
  )
}

export default WrapperFavorites

const styles = StyleSheet.create({})