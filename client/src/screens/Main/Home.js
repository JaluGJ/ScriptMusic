import React, { useEffect, useState } from 'react'
import { View, FlatList, TextInput, SafeAreaView, StatusBar, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { getAllProducts } from '../../redux/slices/products'
import styles from './Styles/Home.jsx'
import user from '../../../assets/user.png'
import Product from './modules/Product';
import Categories from './modules/Categories';
//import FilterModal from './modules/FilterModal';

const Home = () => {

  const { list: products } = useSelector(state => state.products)
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts())

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
          <TextInput style={styles.input} placeholder='🔎 Buscar' />

          <Ionicons
            name="filter-sharp"
            size={34}
            color="#DD8643"
            onPress={() => setModal(!modal)}
          />
        </View>


        <Categories />

        <View>
          <FlatList
            data={products}
            key={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Product item={item} />
              )
            }} />
        </View>

        {/* <FilterModal
          modal={modal}
          setModal={setModal}
        /> */}
      </SafeAreaView>
    </View>

  )
}

export default Home

