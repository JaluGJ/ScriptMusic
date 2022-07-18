import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Modal, FlatList, Image, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles/Modal'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import ModalButtons from './modules/ModalButtons';
import { useDispatch, useSelector } from "react-redux";
import { getAllFilterProducts } from '../../redux/slices/products';


const ModalFilter = ({ modal, setModal }) => {
    const dispatch = useDispatch();
    // const { category } = useSelector(state => state.products);
    const navigation = useNavigation();
    const [filters, setFilters] = useState({
        category: '',
        price: '',
    })
    
    return (
        <Modal
            animationType='slide'
            visible={modal}>
            <View style={styles.background} >

                <View style={styles.containerNav}>

                    <Text style={styles.textNav}>FILTROS</Text>
                    <TouchableOpacity
                        onPress={() =>
                            setModal(!modal)
                        }>
                        <Ionicons name="filter-sharp" size={34} color="white" />
                    </TouchableOpacity>

                </View>



                <ModalButtons
                    setFilters={setFilters}
                    filters={filters}
                    category={filters.category}
                />




                <View style={styles.containerPrice}>

                    <Text style={styles.textPrice}>Ordenar por precio</Text>
                    <View style={styles.containerLowerHigher}>

                        <TouchableOpacity
                            onPress={() => setFilters({ ...filters, price: 'lower' })}
                            style={styles.buttonOrd}>
                            <Text style={filters.price==='lower'? styles.textButtonActive : styles.textButton}>Menor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setFilters({ ...filters, price: 'higher' })}
                            style={styles.buttonOrd}>
                            <Text style={filters.price==='higher'? styles.textButtonActive : styles.textButton}>Mayor</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.buttonFilter}>
                    <TouchableOpacity
                        onPress={() => {
                            if(!filters.category){
                                return Alert.alert('Por favor seleccione una de las categoria disponible')
                            }
                            dispatch(getAllFilterProducts(filters))
                            setModal(!modal)
                            navigation.navigate('Products')
                        }}

                        style={styles.buttonOrd}>
                        <Text style={styles.textButton}>Filtrar</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </Modal>

    )
}

export default ModalFilter