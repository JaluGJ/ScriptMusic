import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { DrawerActions } from '@react-navigation/native';
import UserDrawer from "./UserDrawer";
import { useNavigation } from "@react-navigation/native";
import WrapperHome from "./WrapperHome";
import WrapperFavorites from "./WrapperFavorites";
import WrapperCart from "./WrapperCart";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();
const AppStack = () => {
  const navigation = useNavigation();
  const { productsCart } = useSelector(state => state.shoppingCart);
  const countProducts = productsCart.length;

  return (
      <Tab.Navigator
        initialRouteName="WrapperHome"
        screenOptions={{
          tabBarLabel: "",
          headerShown: false,
          tabBarStyle: {
            height: 55,
            paddingTop: 12,
            backgroundColor: "#000000",
            borderTopColor: "#000000",
          },
        }}
      >
        <Tab.Screen
          name="WrapperHome"
          component={WrapperHome}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon
                  name="home"
                  type="material-community"
                  size={30}
                  color="#DD8643"
                />
              ) : (
                <Icon
                  name="home-outline"
                  type="material-community"
                  size={30}
                  color="#DD8643"
                />
              ),
          }}
        />

        <Tab.Screen
          name="WrapperFavorites"
          component={WrapperFavorites}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon
                  name="cards-heart"
                  type="material-community"
                  size={30}
                  color="#DD8643"
                />
              ) : (
                <Icon
                  name="cards-heart-outline"
                  type="material-community"
                  size={30}
                  color="#DD8643"
                />
              ),
          }}
        />
        <Tab.Screen
          name="UserDrawer"
          component={UserDrawer}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon
                  name="account-circle"
                  type="material-community"
                  size={30}
                  color="#DD8643"
                />
              ) : (
                <Icon
                  name="account-circle-outline"
                  type="material-community"
                  size={30}
                  color="#DD8643"
                />
              ),
          }}
        />
        <Tab.Screen
          name="WrapperCart"
          component={WrapperCart}
          
          options={{
            tabBarBadge:countProducts?countProducts:null,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon
                  name="cart"
                  type="material-community"
                  size={30}
                  color="#DD8643"
                />
              ) : (
                <Icon
                  name="cart-outline"
                  type="material-community"
                  size={30}
                  color="#DD8643"
                />
              ),
          }}
        />
      </Tab.Navigator>            
  );
};

export default AppStack

const styles = StyleSheet.create({});
