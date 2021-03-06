import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Logins/Welcome";
import Login from "../screens/Logins/Login";
import Register from "../screens/Logins/Register";
import ForgotPassword from "../screens/Logins/ForgotPassword";
import AppStack from "./AppStack";
import AboutUs from "../screens/Logins/AboutUs";
const LoginsStack = createStackNavigator();

const AuthStack = () => {
  return (
    <LoginsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LoginsStack.Screen name="Welcome" component={Welcome} />
      <LoginsStack.Screen name="Login" component={Login} />
      <LoginsStack.Screen name="Register" component={Register} />
      <LoginsStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <LoginsStack.Screen name="AppStack" component={AppStack} />
      <LoginsStack.Screen name="AboutUs" component={AboutUs} />
    </LoginsStack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
