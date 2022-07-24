import React, { useRef, useState } from 'react'
import { SafeAreaView, View, ScrollView, Image, Dimensions, Animated } from 'react-native';
import { promos } from '../../../../promo.js';
import { vh, vw } from "react-native-expo-viewport-units";
import styles from '../Styles/Carousel';
import Carousel from 'react-native-snap-carousel';


const MyCarousel =()=>{
  return(
    <View style={styles.container}>
        <Carousel
          data={promos}
          sliderWidth={vw(100)}
          itemWidth={vw(80)}
          autoplay={true}
          loop={true}
          autoplayDelay={2000}
          autoplayInterval={5000}
          renderItem={({item, index})=>{
            return <Image 
              key={index}
              style={styles.image}
              source={{uri:item.image}}
            />
          }}
        />
      </View>
  )
}



export default MyCarousel;