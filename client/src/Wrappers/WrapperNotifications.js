import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Details from '../screens/Main/Details'
import Notifications from '../screens/Main/Notifications'
const NotificationsStack = createStackNavigator()

const WrapperNotifications = () => {

  return (
    <NotificationsStack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <NotificationsStack.Screen name="Notifications" component={Notifications} />
      <NotificationsStack.Screen name="Details" component={Details} />
    </NotificationsStack.Navigator>
  )
}

export default WrapperNotifications

const styles = StyleSheet.create({})