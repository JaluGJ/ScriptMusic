import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import axios from 'axios';
const apiUrl = "https://script-music.herokuapp.com/";

const useDiscount = ({totalPrice}) => {
    const [countBought, setCountBought] = useState(0);
    const navigation = useNavigation();
    const { token } = useSelector((state) => state.signin);
  
    useEffect(() => {
       let isMounted = true;
       if(isMounted){
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios.get(`${apiUrl}tickets`, config).then((res)=>{
          setCountBought(res.data.length);
        })
       }
       return () => {
        isMounted = false;
      };
    }, [navigation]);

    var status = countBought > 0 && countBought <= 2 ? "Level 1" : countBought > 2 && countBought <= 6 ? "Level 2" : countBought > 6 && countBought <= 10 ? "Level 3" : countBought > 10 && countBought <= 15 ? "Level 4" : countBought > 15 && countBought <= 20 ? "Level 5" : "Level 0";

    let descuento;
    if(status === "Level 0"){
        descuento = 0;
    }
    if(status === "Level 1"){
        descuento = 1;
    }
    if(status === "Level 2"){
        descuento = 2;
    }
    if(status === "Level 3"){
        descuento = 3;
    }
    if(status === "Level 4"){
        descuento = 4;
    }
    if(status === "Level 5"){
        descuento = 5;
    }
    let finalPrice = (totalPrice - (totalPrice * descuento / 100)).toFixed(2);

    return [status, finalPrice , descuento];
}

export default useDiscount
