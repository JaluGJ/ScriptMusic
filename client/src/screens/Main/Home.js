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
              text={'PROMO DE LA SEMANA'}
              button={'Ver mas promociones'}
              model={'ACTION BASS PLUS LH BK'}  
              price={349.99} 
              brand={'CORT'}
              image={"https://res.cloudinary.com/dzonjuriq/image/upload/v1658006558/script_music_img/CORT_ACTION_BASS_PLUS_LH_BK_ieh0af.png"}
              id={"62d4db06da220153870d77f3"}
              />

            <Image
              source={{ uri: 'https://i.postimg.cc/qvD87Mgj/Negro-y-Celeste-Cl-sico-Negro-y-Ne-n-Electr-nica-y-Electrodom-sticos-Banner-2.png' }}

              style={{ width: '100%', height: vh(30), marginVertical: 20, }}

            />

            <HomeItem 
              text={'OFERTA IMPERDIBLE!'} 
              button={'Ver mas ofertas'}
              model={'Laud L 11Pa'}  
              price={129.99} 
              brand={'ALHAMBRA'}
              image={"https://res.cloudinary.com/dzonjuriq/image/upload/v1657995382/script_music_img/Alhambra_Laud_L_11Pa_con_Estuche_fucind.png"}
              id={"62d4d68bda220153870d76a1"}
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
