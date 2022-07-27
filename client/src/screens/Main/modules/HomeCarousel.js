import React, { useRef, useState } from 'react'
import { View} from 'react-native';
import { vh, vw } from "react-native-expo-viewport-units";
import styles from '../Styles/Carousel';
import Carousel from 'react-native-snap-carousel';
import HomeCarouselImg from './HomeCarouselImg.js';
/* const MyCarousel = () => {
  const carousel = useRef(<Carousel />)
  const navigation = useNavigation();
  flatListRef?.current?.scrollToEnd();
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
          return (
            <Pressable
            onPress={() =>
              navigation.navigate('PromoDetail', { id: item.id })
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

export default MyCarousel; */

export default class MyCarousel extends React.Component {
  
  render (props) {
    /* console.log(this.props.data) */
      return (
      <View style={styles.container}>
          <Carousel
            data={this.props.promotions}
            sliderWidth={vw(100)}
            itemWidth={vw(80)}
            autoplay={true}
            loop={true}
            autoplayDelay={2000}
            autoplayInterval={7000}
            ref={(c) => { this._carousel = c; }}
            renderItem={({ item}) => {
                return (
                    <HomeCarouselImg
                      item={item}
                    />
                )
            }}
            
          />
          </View>

      );
  }
}