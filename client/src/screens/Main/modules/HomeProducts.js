import React from 'react'
import {
    View,
    FlatList,
    Text,
} from "react-native";
import Product from "./Product";
import styles from "../Styles/Home.jsx";
//import Pagination from '../../../components/Pagination';

const HomeProducts = ({statusCode, currentInstruments, allInstruments }) => {
    return (
        <View style={styles.cartonblanco}>
            {statusCode < 400 ?
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
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
           {/*  <Pagination allInstruments={allInstruments}></Pagination> */}
        </View>
    )
}

export default HomeProducts