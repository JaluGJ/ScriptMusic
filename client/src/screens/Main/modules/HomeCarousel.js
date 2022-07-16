import React, { useRef, useState } from 'react'
import { SafeAreaView, View, ScrollView, Image, Dimensions, Animated } from 'react-native';
import styles from '../Styles/Carousel';

const { width } = Dimensions.get('window');
const height = width * 100 / 60

const images = [
  'https://i.postimg.cc/h42ngq1f/Volante-Horizontal-Promo-pollo-asado-Sencillo-Negro.png',
  'https://i.postimg.cc/QMLp4wBM/Negro-y-Celeste-Cl-sico-Negro-y-Ne-n-Electr-nica-y-Electrodom-sticos-Banner.png',
  'https://i.postimg.cc/GmKXxCty/Negro-y-Celeste-Cl-sico-Negro-y-Ne-n-Electr-nica-y-Electrodom-sticos-Banner-1.png'

]


function MyCarousel() {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ marginTop: 65 }}>
   <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>

        {
          images.map((img, i) => {
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
                  
                  source={{ uri: img }}
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