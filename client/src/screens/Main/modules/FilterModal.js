import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Modal, FlatList, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from '../Styles/FilterModal'
import { useState } from 'react';
import instruments from './Instruments';
import CategoriesFilter from './CategoriesFilter';
import { useDispatch} from "react-redux";
import { getAllFilterProducts } from '../../../redux/slices/products';

const FilterModal = ({ modal, setModal }) => {
    const dispatch = useDispatch();
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

                    <Text style={styles.textNav}>FILTRAJE</Text>
                    <TouchableOpacity
                        onPress={() =>
                            setModal(!modal)
                        }>
                        <Ionicons name="filter-sharp" size={34} color="white" />
                    </TouchableOpacity>
                </View> 
                
                <View style={styles.containerInstruments}>
                 <FlatList
                        data={instruments}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>setFilters({...filters,category:item.name})} style={styles.button}>
                            <CategoriesFilter item={item}/>
                            </TouchableOpacity>

                        )}
                        keyExtractor={item => item.id}
                    /> 
                </View>
                <View style={styles.containerPrice}>
                    <Text style={styles.textPrice}>Ordenar por precio</Text>
                    <TouchableOpacity onPress={()=>setFilters({...filters,price:'lower'})} style={styles.button}>
                        <Text style={styles.textButton}>Menor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setFilters({...filters,price:'higher'})} style={styles.button}>
                        <Text style={styles.textButton}>Mayor</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>dispatch(getAllFilterProducts(filters))} style={styles.button}>
                        <Text style={styles.textButton}>Filtrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
        </Modal>
        
    )
}

export default FilterModal