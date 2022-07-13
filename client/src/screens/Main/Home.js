import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, searchProducts } from "../../redux/slices/products";
import styles from "./Styles/Home.jsx";
import HomeCategories from "./modules/HomeCategories.js";
import ModalFilter from './ModalFilter.js';
import HomeNav from "./modules/HomeNav";
import MyCarousel from "./modules/HomeCarousel";

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
      <ScrollView>
        <HomeNav
          search={search}
          modal={modal}
          setSearch={setSearch}
          setModal={setModal}
          submitHandle={submitHandle}
        />
        <MyCarousel />
        <View style={styles.container}>



          <HomeCategories />
          {/* <HomeProducts
          statusCode={statusCode}
          currentInstruments={products}
          allInstruments={products.length}
          
        /> */}

          {/* <Pagination allInstruments={products.length} />  */}


          <ModalFilter
            modal={modal}
            setModal={setModal}
          />
        </View>
      </ScrollView>

    </View>
  );
};

export default Home;
