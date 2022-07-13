import React, { useState } from 'react'
import { View, Text, FlatList, StatusBar, Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HomeNav from './modules/HomeNav.js';
import Product from './modules/Product.js';
import ModalFilter from './ModalFilter.js';
import styles from "./Styles/Products";
import { searchProducts } from "../../redux/slices/products";

const Products = () => {
    const { list: products } = useSelector((state) => state.products);
    const { category } = useSelector((state) => state.products);
    const { statusCode: statusCode } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState('');
    const submitHandle = (search) => {
        dispatch(searchProducts(search));
        setSearch('')
    }
    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 65)
    const translateY = diffClamp.interpolate({
        inputRange: [0, 65],
        outputRange: [0, -65]
    })
    return (
        <View style={styles.wrapper}>
            <StatusBar />
            <View style={styles.container}>
                <Animated.View
                    style={{
                        transform: [
                            { translateY: translateY }
                        ],
                        elevation: 4,
                        zIndex: 4,
                    }}
                >
                    <HomeNav
                        search={search}
                        modal={modal}
                        setSearch={setSearch}
                        setModal={setModal}
                        submitHandle={submitHandle}
                    />
                </Animated.View>
                <View style={styles.categorieInfo}>
                    <Text style={styles.categorieInfoText}>{category}</Text>
                </View>
                <View style={styles.containerProducts}>
                    {statusCode < 400 ?
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            data={products}
                            key={(item) => item.id}
                            renderItem={({ item }) => {
                                return <Product item={item} />;
                            }}
                            onScroll={(e) => {
                                scrollY.setValue(e.nativeEvent.contentOffset.y)
                            }}
                        />
                        :
                        <View style={styles.containerNoProducts}>
                            <Text style={styles.notProducts}>No existen coincidencias.</Text>
                        </View>
                    }
                </View>
                {/*  <Pagination allInstruments={allInstruments}></Pagination> */}

                <ModalFilter
                    modal={modal}
                    setModal={setModal}
                />
            </View>
        </View>
    )
}

export default Products