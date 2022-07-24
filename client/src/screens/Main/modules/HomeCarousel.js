import React, { useRef, useState } from 'react'
import { SafeAreaView, View, ScrollView, Image, Dimensions, Animated } from 'react-native';
import { promos } from '../../../../promo.js';
import styles from '../Styles/Carousel';

const { width } = Dimensions.get('window');
const height = width * 100 / 60



function MyCarousel() {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ marginTop: 65 }}>
   <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>

        {
          promos.map((p, i) => {
            return (
              <Animated.View
              key={i} 
              style={{justifyContent:'center', alignItems:'center', width}}
              onScroll={
                Animated.event(
                  [{nativeEvent: {contentOffset: {x: scrollX}}}],
                  {useNativeDriver: true}
                )
              }
              >
                <Image
                  
                  source={{ uri: p.image }}
                  style={styles.image}
                />

              </Animated.View>
            )

          })}
      </ScrollView> 
      
    </View>
  )
}
export default MyCarousel