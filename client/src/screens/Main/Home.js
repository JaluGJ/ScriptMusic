import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "./Styles/Home.jsx";
import HomeCategories from "./modules/HomeCategories.js";
import ModalFilter from './ModalFilter.js';
import HomeNav from "./modules/HomeNav";
import MyCarousel from "./modules/HomeCarousel";
import HomeFavorites from "./modules/HomeFavorites";
import { vh, vw } from "react-native-expo-viewport-units";
import { useNavigation } from '@react-navigation/native'
import HomePromos from "./modules/HomePromos";
import {StylesPromos} from './helpers/HomeStylePromos'
import usePromotions from "../../customHooks/usePromotions.js";
const promo3 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864059/script_music_img/Imagen3_m58joz.png'
const cartel = 'https://i.postimg.cc/LXG86wPS/cartel.png'
const Home = () => {
  const [promotions] = usePromotions()
  /* console.log(promotions.length)  */
  const [modal, setModal] = useState(false);
  


  return (
    <View style={styles.wrapper}>

      <StatusBar />
      <View style={styles.container}>
        <ScrollView >
          <HomeNav
            modal={modal}
            setModal={setModal}
          />
          <MyCarousel promotions={promotions}/> 
          <HomeCategories/>
          <View style={styles.containerMain}>

            <TouchableOpacity>
              <View style={{
                width: vw(100),
                height: vh(47),
                alignItems:'center',
                marginVertical:20
              }}>
                <Image
                  source={{uri:promo3}}
                  style={{
                    width: vw(90),
                    height: vh(45),
                    borderRadius: 25,
                    borderWidth: 1,

                  }}
                  resizeMode='contain'
                />
              </View>
            </TouchableOpacity>


            <HomeFavorites />


            <HomePromos/>
            
            
            <View style={{
              marginHorizontal: 25,
              borderColor: 'white',
              borderWidth: 2,
              elevation: 1,
              borderRadius: 10,
              marginVertical:20
            }}>
              <TouchableOpacity>

                <Image
                  source={{ uri:cartel}}
                  style={{
                    width: '100%',
                    height: vh(30),
                    borderRadius: 10
                  }}
                />

              </TouchableOpacity>

            </View>
            <View style={styles.containerNewCartegories}>
              <View style={styles.containerTextCategories}>
                <Text style={styles.titleCategories}>Categorías</Text>
              </View>
              <View>
                <HomeCategories botton={true} />
              </View>
            </View>
          </View>
          <ModalFilter
            modal={modal}
            setModal={setModal}
          />
        </ScrollView>
      </View>

    </View>
  );
};

export default Home;
