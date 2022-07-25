import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { create } from '../redux/slices/signin';
import axios from 'axios';
const apiUrl = "https://sm.up.railway.app/";

const useShopping = () => {
    const [bought, setBought] = React.useState([]);
    const navigation = useNavigation();
    const { token } = useSelector((state) => state.signin);

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus",async () => {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          };
          const {data} = await axios.get(`${apiUrl}profile`, config)
          setBought(data.user.bought);
        });
        return unsubscribe;
      }, [navigation]);

      return {bought} 
}

export default useShopping

