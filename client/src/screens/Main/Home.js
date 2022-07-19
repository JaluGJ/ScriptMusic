import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, searchProducts } from "../../redux/slices/products";
import styles from "./Styles/Home.jsx";
import HomeCategories from "./modules/HomeCategories.js";
import ModalFilter from './ModalFilter.js';
import HomeNav from "./modules/HomeNav";
import MyCarousel from "./modules/HomeCarousel";
import HomeItem from "./modules/HomeItem";
import { vh, vw } from "react-native-expo-viewport-units";
import { instruments } from './modules/HomePromos.js'
const Home = () => {
  const { list: products } = useSelector((state) => state.products);
  const { statusCode: statusCode } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState('');

  const { page } = useSelector((state) => state.pagination);
  const instrumentsPerPage = 12;

  const indexOfLastInstrument = page * instrumentsPerPage; //2 * 12
  const indexOfFirstInstrument = indexOfLastInstrument - instrumentsPerPage; //24 - 12 = 12
  const currentInstruments = products.slice(
    indexOfFirstInstrument,
    indexOfLastInstrument
  ); //12 - 24



  const submitHandle = (search) => {
    dispatch(searchProducts(search));
    setSearch('')
  }
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <View style={styles.wrapper}>

      <StatusBar />
      <View style={styles.container}>
        <ScrollView >
          <HomeNav

            search={search}
            modal={modal}
            setSearch={setSearch}
            setModal={setModal}
            submitHandle={submitHandle}
          />
          <MyCarousel />
          <HomeCategories />
          <View style={styles.containerMain}>









            <HomeItem
              promoimg={promoThree.image}
              containerInfo={promoThree.containerInfo}
              id={"62d4db06da220153870d77f3"}
              button={'Ver mas ofertas'}
            />

            <Image
              source={{ uri: 'https://i.postimg.cc/qvD87Mgj/Negro-y-Celeste-Cl-sico-Negro-y-Ne-n-Electr-nica-y-Electrodom-sticos-Banner-2.png' }}
              style={{ width: '100%', height: vh(30), marginVertical: 20, }}

            />
            {/* <HomeFav/>  */}
            <HomeItem
              promoimg={promoTwo.image}
              containerInfo={promoTwo.containerInfo}
              containerTitle={promoTwo.containerTitle}
              button={'Ver mas ofertas'}
              model={'ROCK A BILLY Negro'}
              price={129.99}
              image={"https://res.cloudinary.com/dzonjuriq/image/upload/v1657996173/script_music_img/STENTOR_ROCK_A_BILLY_Contrabajo_Negro_xy5u2y.png"}
              id={"62d4dad4da220153870d77e5"}
            />
            
            <HomeItem
              promoimg={promoOne.image}
              containerInfo={promoOne.containerInfo}
              containerText={promoOne.containerText}
              containerImage={promoOne.containerImage}
              button={'Ver mas ofertas'}
              image={"https://res.cloudinary.com/dzonjuriq/image/upload/v1658002388/script_music_img/Stomvi_Elite_Fliscorno_Sib_Pabell%C3%B3n_cobre_f2rzvx.png"}
              id={"62d4dab4da220153870d77dd"}
            />
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
