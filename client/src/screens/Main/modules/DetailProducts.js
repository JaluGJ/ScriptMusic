import React, { useRef, useState } from 'react'
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Pressable,
    ActivityIndicator,
    Image,
} from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";
import Carousel from 'react-native-snap-carousel';
import styles from "../Styles/Detail.jsx";
import DetailProduct from './DetailProduct';
const DetailProducts = ({ data }) => {

    const carousel = useRef(<Carousel />)
    return (
        <View style={styles.containerProductsDetails}>
            <Carousel
                data={data}
                sliderWidth={vw(100)}
                itemWidth={vw(80)}
                autoplay={true}
                layout={'stack'}
                loop={true}
                autoplayDelay={2000}
                autoplayInterval={7000}
                ref={carousel}
                renderItem={({ item, index }) => {
                    return (
                        <DetailProduct
                            key={index}
                            item={item}
                        />
                    )
                }}
            />
        </View>
    )
}

export default DetailProducts 
/* export default class DetailProducts extends React.Component {
  
      render (props) {
        console.log(this.props.data)
          return (
          <View style={styles.container}>
              <Carousel
                data={this.props.data}
                sliderWidth={vw(100)}
                itemWidth={vw(70)}
                autoplay={true}
                loop={true}
                autoplayDelay={2000}
                autoplayInterval={7000}
                ref={(c) => { this._carousel = c; }}
                renderItem={({ item, index }) => {
                    return (

                        <DetailProduct
                            key={index}
                            item={item}
                        />
                    )
                }}
                
              />
              </View>
          );
      }
  } */