import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../Styles/Cart.jsx";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useShoppingCart from "../../../customHooks/useShoppingCart.js";
import useDiscount from "../../../customHooks/useDiscount.js";
import useShopping from "../../../customHooks/useShopping.js";

const CardProducts = () => {
  const navigation = useNavigation();
  const { productsCart, handleRemove, handleCount } = useShoppingCart();

  return (
    <View style={styles.containerProducts}>
      <FlatList
        data={productsCart}
        renderItem={({ item }) => (
          <TouchableOpacity
            onLongPress={() => {
              item.promo ? navigation.navigate("PromoDetail", { id: item.id }) :
              navigation.navigate("Details", { itemId: item.id })
            }}
          >
            <View style={styles.containerProduct}>
              <View style={styles.containerProductImage}>
                <Image
                  source={{ uri: item.image }}
                  resizeMode="contain"
                  style={styles.productImage}
                />
              </View>
              <View style={styles.containerProductInfo}>
                <View style={styles.containerNameTrash}>
                  <View style={styles.containerNameBrand}>
                    <Text style={styles.productName}>{item.model}</Text>
                    <Text style={styles.productBrand}>{item.brand}</Text>
                  </View>
                  <View style={styles.containerTrash}>
                    <TouchableOpacity
                      onPress={() => {
                        handleRemove({ id: item.id });
                      }}
                    >
                      <AntDesign
                        name="closecircleo"
                        size={24}
                        color="crimson"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.productPricePlus}>
                  <Text style={styles.productPrice}>$ {item.price}</Text>

                  <View style={styles.containerProductCount}>
                    <View style={styles.containerPlus}>
                      {item.count === 1 ? (
                        <TouchableOpacity
                          onPress={() => {
                            handleRemove({ id: item.id });
                          }}
                        >
                          <Ionicons
                            name="trash-outline"
                            size={24}
                            color="red"
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() =>
                            handleCount({ id: item.id, operation: "subs" })
                          }
                        >
                          <AntDesign
                            name="minuscircleo"
                            size={24}
                            color="#000"
                          />
                        </TouchableOpacity>
                      )}

                      <Text style={styles.productCount}>{item.count}</Text>

                      <TouchableOpacity
                        onPress={() =>
                          handleCount({ id: item.id, operation: "add" })
                        }
                      >
                        <AntDesign name="pluscircleo" size={24} color="#000" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CardProducts;
