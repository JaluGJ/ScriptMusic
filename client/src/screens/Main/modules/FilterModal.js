import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from '../Styles/FilterModal'

const FilterModal = ({ modal, setModal }) => {
    return (
        <Modal
            animationType='slide'
            visible={modal}>
            <ScrollView style={styles.background} >
                <View style={styles.containerNav}>

                    <Text style={styles.textNav}>FILTRAJE</Text>
                    <TouchableOpacity
                        onPress={() =>
                            setModal(!modal)
                        }>
                        <Ionicons name="filter-sharp" size={34} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Modal>
    )
}

export default FilterModal