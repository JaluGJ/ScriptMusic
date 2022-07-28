import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addItems } from "../redux/slices/products";

const useShoppingCart = () => {
  const { newItems } = useSelector((state) => state.products);
  const [productsCart, setProductsCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [countProducts, setCountProducts] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    AsyncStorage.getItem("@shoppingCart")
      .then((res) => {
        if (isMounted) {
          if (res !== null) {
            let products = JSON.parse(res);
            setProductsCart(products);
            let total = products.reduce((acc, cur) => {
              return acc + Number(cur.price);
            }, 0);
            setTotalPrice(total.toFixed(2));
          }
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
    return () => {
      isMounted = false;
    };
  }, [newItems]);

  const addToCart = async ({ details }) => {
    const { price, id, image, model, brand, stock , promo , items , promoName} = details;
    const product = {
      priceOne: price,
      price: (price * countProducts).toFixed(2),
      image: image,
      id:id,
      model: promo ? promoName : model, 
      brand: promo ? null : brand,
      count: countProducts,
      stock:stock,
      items: promo ? items : null,
      promo: promo ? true : false,
    };

    try {

        let existingCart = await AsyncStorage.getItem("@shoppingCart");
        if (existingCart !== null) {
          let cart = JSON.parse(existingCart);
          let existingProduct = cart.find((product) => {
            if (product.stock > countProducts) {
            if (product.id === id) {
              product.count += countProducts;
              product.price = (product.priceOne * product.count).toFixed(2);
              return true;
            }
            return false;
          }
        });

          if (!existingProduct) {
            cart.push(product);
          }
          await AsyncStorage.setItem("@shoppingCart", JSON.stringify(cart));
        } else {
          await AsyncStorage.setItem(
            "@shoppingCart",
            JSON.stringify([product])
          );
        }
    
    } catch (e) {
      console.log(e);
    }
    dispatch(addItems(1));
  };

  const handleRemove = async ({ id }) => {
    const newProductsCart = productsCart.filter((product) => product.id !== id);
    await AsyncStorage.setItem(
      "@shoppingCart",
      JSON.stringify(newProductsCart)
    );
    dispatch(addItems(-1));
    return true;
  };

  const handleCount = ({ id, operation }) => {
    productsCart.forEach((product) => {
      if (product.id === id) {

        if (operation === "add") {
          if(product.stock > product.count){
          product.count += 1;
          product.price = (product.priceOne * product.count).toFixed(2);
          }
        } 
      else {
          if (product.count === 1) {
            return;
          }
          product.count -= 1;
          product.price = (product.price - product.priceOne).toFixed(2);
        }
      }
    });
    AsyncStorage.setItem("@shoppingCart", JSON.stringify(productsCart));
    dispatch(addItems(1));
  };

  return {
    productsCart,
    totalPrice,
    addToCart,
    countProducts,
    setCountProducts,
    handleRemove,
    handleCount,
  };
};

export default useShoppingCart;
