import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StatusBar,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { getAllProducts, searchProducts } from "../../redux/slices/products";
import styles from "./Styles/Home.jsx";
import user from "../../../assets/user.png";
import Product from "./modules/Product";
import HomeCategories from "./modules/HomeCategories.js";
import Pagination from "../../components/Pagination";
import ModalFilter from './ModalFilter.js';
import HomeProducts from "./modules/HomeProducts";
import HomeNav from "./modules/HomeNav";

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

        <HomeNav
          search={search}
          modal={modal}
          setSearch={setSearch}
          setModal={setModal}
          submitHandle={submitHandle}
        />


        <HomeCategories />


        <HomeProducts
          statusCode={statusCode}
          currentInstruments={products}
          allInstruments={products.length}
        />


        {/* <Pagination allInstruments={products.length} />  */}


        <ModalFilter
          modal={modal}
          setModal={setModal}
        />
      </View>
    </View>
  );
};

export default Home;
