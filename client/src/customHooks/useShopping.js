import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { create } from "../redux/slices/signin";
import axios from "axios";
const apiUrl = "https://sm.up.railway.app/";

const useShopping = () => {
  const [bought, setBought] = useState([]);
  const navigation = useNavigation();
  const { token } = useSelector((state) => state.signin);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${apiUrl}tickets`, config);
      setBought(data?.reverse());
    });
    return unsubscribe;
  }, [navigation]);

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

  return { bought , tradDate};
};

export default useShopping;
