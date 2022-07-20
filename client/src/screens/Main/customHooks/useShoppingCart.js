import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addItems } from "../../../redux/slices/products";

const useShoppingCart = () => {
  const { newItems } = useSelector((state) => state.products);
  const [productsCart, setProductsCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [countProducts, setCountProducts] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("@shoppingCart")
      .then((res) => {
        if (res !== null) {
          let products = JSON.parse(res);
          setProductsCart(products);
          let total = products.reduce((acc, cur) => {
            return acc + Number(cur.price);
          }, 0);
          setTotalPrice(total.toFixed(2));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    if (newItems === null) {
      AsyncStorage.setItem("@shoppingCart", JSON.stringify([])).then(() => {
        setProductsCart([]);
      });
    }
  }, [newItems]);

  const addToCart = async ({ details }) => {
    const { price, id, image, model, brand } = details;
    const product = {
      priceOne: price,
      price: (price * countProducts).toFixed(2),
      image,
      id,
      model,
      brand,
      count: countProducts,
    };
    try {
      let existingCart = await AsyncStorage.getItem("@shoppingCart");
      if (existingCart !== null) {
        let cart = JSON.parse(existingCart);
        let existingProduct = cart.find((product) => {
          if (product.id === id) {
            product.count += countProducts;
            product.price = (product.priceOne * product.count).toFixed(2);
            return true;
          }
          return false;
        });

        if (!existingProduct) {
          cart.push(product);
        }
        await AsyncStorage.setItem("@shoppingCart", JSON.stringify(cart));
      } else {
        console.log("primera ves");
        await AsyncStorage.setItem("@shoppingCart", JSON.stringify([product]));
      }
    } catch (e) {
      console.log(e);
    }
    dispatch(addItems(1));
  };

  return {
    productsCart,
    totalPrice,
    addToCart,
    countProducts,
    setCountProducts,
  };
};

export default useShoppingCart;
