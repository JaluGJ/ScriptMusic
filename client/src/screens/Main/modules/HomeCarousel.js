import React, { useRef, useState } from 'react'
import { View} from 'react-native';
import { vh, vw } from "react-native-expo-viewport-units";
import styles from '../Styles/Carousel';
import Carousel from 'react-native-snap-carousel';
import HomeCarouselImg from './HomeCarouselImg.js';
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
                      img={item.image}
                    />
                )
            }}
            
          />
          </View>

      );
  }
}