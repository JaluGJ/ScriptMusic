import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PaymentMethods from "../screens/Drawer/PaymentMethods";
import MyProfile from "../screens/Drawer/MyProfile";
import MyShopping from "../screens/Drawer/MyShopping";
import Addresses from "../screens/Drawer/Addresses";
import { Icon } from "@rneui/themed";
import WrapperHome from "./WrapperHome";
import CustomDrawer from "../screens/Drawer/CustomDrawer";
import AboutUs from "../screens/Drawer/AboutUs";
import { useSelector } from "react-redux";
const Drawer = createDrawerNavigator();

const UserDrawer = () => {
  const { user } = useSelector((state) => state.signin);



  
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 15,
          letterSpacing: 2,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home "
        component={WrapperHome}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <Icon
              name="home-outline"
              type="material-community"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          drawerLabel: "Mi Perfil",
          drawerIcon: ({ color }) => (
            <Icon
              name="account-circle-outline"
              type="material-community"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="PaymentMethods"
        component={PaymentMethods}
        options={{
          drawerLabel: "Métodos de Pago",
          drawerIcon: ({ color }) => (
            <Icon
              name="credit-card-outline"
              type="material-community"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Addresses"
        component={Addresses}
        options={{
          drawerLabel: "Direcciones",
          drawerIcon: ({ color }) => (
            <Icon
              name="map-marker-outline"
              type="material-community"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MyShopping"
        component={MyShopping}
        options={{
          drawerLabel: "Mis Compras",
          drawerIcon: ({ color }) => (
            <Icon
              name="shopping-outline"
              type="material-community"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          drawerLabel: "",
        }}
      />
    </Drawer.Navigator>
  );
};

export default UserDrawer;

const styles = StyleSheet.create({});
