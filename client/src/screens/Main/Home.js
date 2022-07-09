import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { getAllProducts, searchProducts } from "../../redux/slices/products";
import styles from "./Styles/Home.jsx";
import user from "../../../assets/user.png";
import Product from "./modules/Product";
import HomeCategories from "./modules/HomeCategories.js";
import Pagination from "../../components/Pagination";
import ModalFilter from './modules/ModalFilter.js';

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
  }
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <View style={styles.wrapper}>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.containerNav}>
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={user}
          />
          <TextInput
            style={styles.input}
            placeholder=" Buscar"
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={() => submitHandle(search)}
          />

          <Ionicons
            name="filter-sharp"
            size={34}
            color="#DD8643"
            onPress={() => setModal(!modal)}
          />
        </View>

        <HomeCategories />

        <Pagination allInstruments={products.length} />

        <View style={styles.cartonblanco}>
          {statusCode < 400 ? <FlatList
            data={currentInstruments}
            key={(item) => item.id}
            renderItem={({ item }) => {
              return <Product item={item} />;
            }}
          /> :
            <View style={styles.containerNoProducts}>
              <Text style={styles.notProducts}>No exiten coincidencias</Text>
            </View>
          }
        </View>

        <ModalFilter
          modal={modal}
          setModal={setModal}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;
