import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PaymentMethods from "../screens/Drawer/PaymentMethods";
import MyProfile from "../screens/Drawer/MyProfile";
import MyShopping from "../screens/Drawer/MyShopping";
import Account from "../screens/Drawer/Account";
import Addresses from "../screens/Drawer/Addresses";
import CustomDrawer from "../components/CustomDrawer";
import WrapperHome from "./WrapperHome";
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
      <Drawer.Screen name="WrapperHome" component={WrapperHome} />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="PaymentMethods" component={PaymentMethods} />
      <Drawer.Screen name="Addresses" component={Addresses} />
      <Drawer.Screen name="MyShopping" component={MyShopping} />
    </Drawer.Navigator>
  );
};

export default UserDrawer;

const styles = StyleSheet.create({});
