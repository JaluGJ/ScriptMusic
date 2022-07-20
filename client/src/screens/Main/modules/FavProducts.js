import React from 'react'
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "../Styles/Favorites.jsx";
import useFavorites from "../customHooks/useFavorites";
import { useNavigation } from '@react-navigation/native';


const FavProducts = ({ model, brand, price, image, id }) => {
    const { removeFromFavorite } = useFavorites();
    const navigation = useNavigation();
    {/* <TouchableOpacity style={{ width: 60, height: 30, backgroundColor: 'red' }}>
        <Text style={styles.buttonText} onPress={() => {
            removeFromFavorite(id)
            // Alert.alert('Removido de favoritos')
        }}>Eliminar</Text>
    </TouchableOpacity> */}

    return (
        <TouchableOpacity onPress={() => { navigation.navigate('Details', { itemId: id }) }}>
            <View style={styles.containerProduct}>
              <View style={styles.containerProductImage}>
                <Image source={{ uri: image }} resizeMode='contain' style={styles.productImage} />
              </View>
              <View style={styles.containerProductInfo}>
                <View style={styles.containerNameTrash}>
                  <View style={styles.containerNameBrand}>
                    <Text style={styles.productName}>{model}</Text>
                    <Text style={styles.productBrand}>{brand}</Text>
                  </View>
                  <View style={styles.containerTrash}>
                    <TouchableOpacity onPress={() => { removeFromFavorite(id) }}>
                      <AntDesign name="closecircleo" size={30} color="crimson" />
                    </TouchableOpacity>
                  </View>

                </View>
                <View style={styles.productPricePlus}>
                  <Text style={styles.productPrice}>$ {price}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
    )
}

export default FavProducts