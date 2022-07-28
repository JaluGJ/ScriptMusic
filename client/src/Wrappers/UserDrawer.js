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
const Drawer = createDrawerNavigator();

const UserDrawer = () => {
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
          drawerLabel: "Inicio",
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
          drawerLabel: "Mi perfil",
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
      {/* <Drawer.Screen
        name="PaymentMethods"
        component={PaymentMethods}
        options={{
          drawerLabel: "Métodos de pago",
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
      /> */}
      <Drawer.Screen
        name="MyShopping"
        component={MyShopping}
        options={{
          drawerLabel: "Mis compras",
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
          drawerLabel: "Sobre nosotros",
          drawerIcon: ({ color }) => (
            <Icon
            name="help-circle-outline"
            type="material-community"
            size={24}
            color={color}
          />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default UserDrawer;

