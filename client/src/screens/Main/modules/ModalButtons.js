import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Modal, FlatList, Image } from 'react-native'
import styles from '../Styles/Modal'
import ModalItems from './ModalItems';
import { instruments } from './ModalInstruments';
import { instrumentstwo } from './ModalInstruments';




const ModalButtons = ({ setFilters, filters }) => {


    return (
        <View style={styles.containerInstruments}>

            <View style={styles.instrumentsSix}>

            <FlatList
                numColumns={3}
                data={instruments}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => setFilters({ ...filters, category: item.name })}
                        style={styles.button}>

                        <ModalItems item={item} />

                    </TouchableOpacity>

                )}
                keyExtractor={item => item.id}
            />

            </View>
            <View style={styles.instrumentstwo}>

                <FlatList
                    numColumns={2}
                    data={instrumentstwo}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setFilters({ ...filters, category: item.name })}
                            style={styles.button}>

                            <ModalItems item={item} />

                        </TouchableOpacity>

                    )}
                    keyExtractor={item => item.id}
                />
            </View>



        </View>
    )
}
export default ModalButtons