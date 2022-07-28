import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const useNotifications = () => {
 
  useEffect(() => {
    registerForPushNotificationsAsync()
    .then(async token => {
      await AsyncStorage.setItem('@pushToken1', token);
    })
    .catch(err => {
      console.log(err);
    });
  }, [])
  

  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        console.log(status);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('fail to get token');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      // console.log('this is the token', token);
    } else {
      return;
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    return token;
  }

    return
}

export default useNotifications

