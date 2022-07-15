import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import WrapperNotifications from "./WrapperNotifications";
import WrapperFavorites from "./WrapperFavorites";
import WrapperCart from "./WrapperCart";
import { useSelector } from "react-redux";
import UserDrawer from "./UserDrawer";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();
const AppStack = () => {
  const { newItems } = useSelector((state) => state.products);
  const [countProducts, setCountProducts] = useState(0);

  useEffect(() => {
    try {
      const getCountProducts = async () => {
        const countProducts = await AsyncStorage.getItem("@shoppingCart");
        if (countProducts !== null) {
          setCountProducts(JSON.parse(countProducts).length);
        }
      }
      getCountProducts();
    } catch (error) {
      console.log(error)
    }
    
  }, [newItems]);

  return (
    <Tab.Navigator
      initialRouteName="UserDrawer"
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
        name="UserDrawer"
        component={UserDrawer}
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
        name="WrapperNotifications"
        component={WrapperNotifications}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon
                name="bell"
                type="material-community"
                size={30}
                color="#DD8643"
              />
            ) : (
              <Icon
                name="bell-outline"
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
        tabBarBadge: countProducts ? countProducts : null,
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

export default AppStack;

