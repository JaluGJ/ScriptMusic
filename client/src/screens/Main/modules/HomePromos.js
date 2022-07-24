import React from 'react'
import { promos } from '../../../../promo.js';
import { vh, vw } from "react-native-expo-viewport-units";
import { View, Text } from 'react-native';
import HomePromosItem from './HomePromosItem.js';

const HomePromos = () => {
    

  return (
    <>
        {
            promos?.forEach((p, i)=>{
                if(i > 3){
                    return
                }
                
                return(
                    <View 
                        key={i}
                        stylesImg={i === 0? promoOne:i===1? promoTwo: i===2? promoThree: promoFor}
                    >
                        <Text>{}</Text>
                    </View>
                )
            })
        }
    </>
  )
}

export default HomePromos