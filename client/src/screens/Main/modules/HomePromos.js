import React from 'react'
import { promos } from '../../../../promo.js';
import { vh, vw } from "react-native-expo-viewport-units";
import { View, Image, TouchableOpacity } from 'react-native';
import HomePromosItem from './HomePromosItem.js';
import styles from '../Styles/Item';
const HomePromos = () => {

    /* console.log(promoOne.img) */
    return (
        <>
            {
                promos.map((p, i) => {
                    if (i > 3) {
                        return
                    }
                    /* console.log(p) */
                    return (
                        <HomePromosItem
                            key={i}
                            items={p.items[0]}
                            img={i===0?promoOne.img:i===1?promoTwo.img:i===2?promoThree.img:promoFor.img}
                            containerInfo={i===0?promoOne.containerInfo:i===1?promoTwo.containerInfo:i===2?promoThree.containerInfo:promoFor.containerInfo}
                            containerModel={i===0?promoOne.containerModel:i===1?promoTwo.containerModel:i===2?promoThree.containerModel:promoFor.containerModel}
                            containerText={i===0?promoOne.containerText:i===1?promoTwo.containerText:i===2?promoThree.containerText:promoFor.containerText}
                            containerImage={i===0?promoOne.containerImage:i===1?promoTwo.containerImage:i===2?promoThree.containerImage:promoFor.containerImage}
                        />
                    )
                })
            }
        </>
    )
}

export default HomePromos