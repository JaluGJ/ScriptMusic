import React, { useState } from 'react'
import { SafeAreaView, View, ScrollView, Image, Dimensions } from 'react-native';
import styles from '../Styles/Carousel';

const { width } = Dimensions.get('window');
const height = width * 100 / 60

const images = [
  { images: 'https://i.postimg.cc/h42ngq1f/Volante-Horizontal-Promo-pollo-asado-Sencillo-Negro.png' },
  { images: 'https://i.postimg.cc/QMLp4wBM/Negro-y-Celeste-Cl-sico-Negro-y-Ne-n-Electr-nica-y-Electrodom-sticos-Banner.png' },
  {images: 'https://i.postimg.cc/GmKXxCty/Negro-y-Celeste-Cl-sico-Negro-y-Ne-n-Electr-nica-y-Electrodom-sticos-Banner-1.png'},
  
]


function MyCarousel() {

  return (
    <View style={{ marginTop: 65 }}>
      <ScrollView horizontal pagingEnabled>
        {/* <Image
            source={{ uri: 'https://cdn.soyunperro.com/wp-content/uploads/2017/06/cabeza-del-bull-terrier-ingles.jpg' }}
            style={styles.image}
          /> */}
        {
          images.map((img, i) => {
            return (
              <Image
                key={i}
                source={{ uri: img.images }}
                style={styles.image}
              />
            )

          })}
      </ScrollView>

    </View>
  )
}
export default MyCarousel