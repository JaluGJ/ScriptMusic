import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Icon } from "@rneui/themed";
import styles from "./Styles/CustomDrawer.jsx";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}
      <DrawerContentScrollView
        {...props}
      >
        <ImageBackground source={require("../../../assets/menu.png")} style={styles.imgBackground} > 
          <Image
            source={require('../../../assets/user.png')}
            style={styles.userImage}
          />
          <Text style={styles.userName}>Facundo Ortiz</Text>
          </ImageBackground>
          

        <View style={styles.containerItems}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.drawerFooter}>
       <View style={styles.containerFooter}>
        <TouchableOpacity onPress={()=> props.navigation.navigate('AboutUs')}>
          <View style={styles.containerAbout}>
            <Icon
              name="help-circle-outline"
              type="material-community"
              size={24}
            />
            <Text style={styles.about}>Sobre nosotros</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.containerSignOff}>
            <Icon name="login-variant" type="material-community" size={24} />
            <Text style={styles.signOff}>Cerrar sesion</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>


    </View>
  );
};

export default CustomDrawer;

