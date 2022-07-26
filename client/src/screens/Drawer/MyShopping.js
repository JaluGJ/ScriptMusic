import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./Styles/MyShopping";
import { useNavigation } from "@react-navigation/native";
import useShopping from "../../customHooks/useShopping";

const MyShopping = () => {
  const navigation = useNavigation();
  const { bought } = useShopping();

  let tradDate = (mes) => {
    if (mes === "Jan") {
      return (mes = "Enero");
    }
    if (mes === "Feb") {
      return (mes = "Febrero");
    }
    if (mes === "Mar") {
      return (mes = "Marzo");
    }
    if (mes === "Apr") {
      return (mes = "Abril");
    }
    if (mes === "May") {
      return (mes = "Mayo");
    }
    if (mes === "Jun") {
      return (mes = "Junio");
    }
    if (mes === "Jul") {
      return (mes = "Julio");
    }
    if (mes === "Aug") {
      return (mes = "Agosto");
    }
    if (mes === "Sep") {
      return (mes = "Septiembre");
    }
    if (mes === "Oct") {
      return (mes = "Octubre");
    }
    if (mes === "Nov") {
      return (mes = "Noviembre");
    }
    if (mes === "Dec") {
      return (mes = "Diciembre");
    }
  };

  return (
    <View style={{ alignItems: "center", backgroundColor: "#f0f0f0" }}>
      <View>
        <Text style={styles.title}>MIS COMPRAS</Text>
      </View>
      <FlatList
        data={bought}
        contentContainerStyle={{ alignItems: "center", paddingBottom: 75 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          let fecha = item.date.split(",").shift().split(" ");
          let dia = fecha[0];
          let mes = tradDate(fecha[1]);
          let anio = fecha[2];
          let hora = item.date.split(",").pop().split(":");
          return (
            <View style={styles.container}>
              <View style={styles.containerDate}>
                <View style={styles.lineaDate} />
                <View>
                  <Text
                    style={styles.date}
                  >{`${dia} de ${mes} de ${anio}`}</Text>
                </View>
                <View style={styles.lineaDate} />
              </View>
              {item.bought?.map((e) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Details", {
                        itemId: e.items.id,
                      });
                    }}
                    key={e.id}
                  >
                    <View style={styles.containerRest}>
                      <View>
                        <Image
                          source={{ uri: e.items.image }}
                          style={styles.image}
                          resizeMode="contain"
                        />
                      </View>
                      <View>
                        <View>
                          <View>
                            <Text style={styles.model}>{e.items.model}</Text>
                          </View>
                          <View>
                            <Text style={styles.brand}>{e.items.brand}</Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.containerQuantity}>
                        <Text style={styles.quantity}>Cant. {e.quantity}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <View style={styles.containerDate}>
                <View style={styles.lineaDate} />
                <View>
                  <Text style={styles.date}>{`${hora[0]}:${hora[1]}hs`}</Text>
                </View>
                <View style={styles.lineaDate} />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyShopping;
