import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Details from '../screens/Main/Details'
import MyShopping from '../screens/Drawer/MyShopping'
const NotificationsStack = createStackNavigator()
const WrapperShopping = () => {

  return (
    <NotificationsStack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <NotificationsStack.Screen name="MyShopping" component={MyShopping} />
      <NotificationsStack.Screen name="Details" component={Details} />
    </NotificationsStack.Navigator>
  )
}

export default WrapperShopping
