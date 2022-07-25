import React, { useRef, useState } from 'react'
import { View, Image, TouchableOpacityBase, Pressable } from 'react-native';
import { promos } from '../../../../promo.js';
import { vh, vw } from "react-native-expo-viewport-units";
import styles from '../Styles/Carousel';
import Carousel from 'react-native-snap-carousel';
import usePromotions from '../../../customHooks/usePromotions.js';
import { useNavigation } from '@react-navigation/native';
const MyCarousel = () => {
  const carousel = useRef(<Carousel />)
  const navigation = useNavigation();
  /* flatListRef?.current?.scrollToEnd(); */
  const [promotions] = usePromotions()
  //console.log(promotions)
  return (
    <View style={styles.container}>
      <Carousel
        data={promotions}
        sliderWidth={vw(100)}
        itemWidth={vw(80)}
        autoplay={true}
        loop={true}
        autoplayDelay={2000}
        autoplayInterval={7000}
        ref={carousel}
        renderItem={({ item, index }) => {
          /* console.log(index) */
          /* if(index>6){
            return
          } */
          return (
            <Pressable
            onPress={() =>
              navigation.navigate('PromoDetail', { itemId: id })
            }>
              <Image
                key={index}
                style={styles.image}
                source={{ uri: item.image }}
              />
            </Pressable>
          )
        }}
      />
    </View>
  )
}

export default MyCarousel;