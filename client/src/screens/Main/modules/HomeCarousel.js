import React, { useState } from 'react'
import { SafeAreaView, View, ScrollView, Image, Dimensions } from 'react-native';
import styles from '../Styles/Carousel';

const { width } = Dimensions.get('window');
const height = width * 100 / 60

const images = [
  { images: 'https://www.trofeocaza.com/wp-content/uploads/2016/05/Dogo-ar-enf-1900x1145_c.jpg' },
  { images: 'https://cdn.soyunperro.com/wp-content/uploads/2017/06/cabeza-del-bull-terrier-ingles.jpg' },
  { images: 'https://t1.uc.ltmcdn.com/es/posts/6/1/8/es_importante_que_un_dogo_argentino_sea_puro_50816_0_600.jpg' }
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