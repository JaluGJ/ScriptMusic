import React from 'react'
import { View, Text, Image, TouchableOpacity,} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "../Styles/Favorites.jsx";
import { useNavigation } from '@react-navigation/native';
import { deleteFavourite } from '../../../redux/slices/favourites.js';
import { useDispatch, useSelector } from 'react-redux';


const FavProducts = ({ model, brand, price, image, id }) => {
    const {token} = useSelector((state) => state.signin);
    const navigation = useNavigation();
    const dispatch = useDispatch();

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
                    <TouchableOpacity onPress={() => { dispatch(deleteFavourite(token,id)) }}>
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