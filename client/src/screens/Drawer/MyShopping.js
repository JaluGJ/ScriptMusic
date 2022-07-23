import {
  FlatList,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./Styles/MyShopping";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../redux/slices/signin";
import { useNavigation } from "@react-navigation/native";

const MyShopping = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.signin);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(create(token));
    });
    return unsubscribe;
  }, []);

  return (
    <View style={{ alignItems: "center", backgroundColor: "#f9f9f9" }}>
      <View>
        <Text style={styles.title}>MIS COMPRAS</Text>
      </View>
      <FlatList
        data={user.bought}
        contentContainerStyle={{ alignItems: "center", paddingBottom: 75 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          let dateFormat = item.date.split(" ");
          if (dateFormat[1] === "Jan") {
            dateFormat[1] = "Ene";
          }
          let date = `${dateFormat[2]} de ${dateFormat[1]}, ${dateFormat[3]}`;

          return (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Details", { itemId: item.items.id });
              }}
            >
              <View style={styles.container}>
                <View style={styles.containerDate}>
                  <Text style={styles.date}>{date}</Text>
                </View>
                <View style={styles.containerRest}>
                  <View>
                    <Image
                      source={{ uri: item.items.image }}
                      style={styles.image}
                      resizeMode="contain"
                    />
                  </View>
                  <View>
                    <View>
                      <View>
                        <Text style={styles.model}>{item.items.model}</Text>
                      </View>
                      <View>
                        <Text style={styles.brand}>{item.items.brand}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.containerQuantity}>
                    <Text style={styles.quantity}>Cant. {item.quantity}</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

export default MyShopping;
