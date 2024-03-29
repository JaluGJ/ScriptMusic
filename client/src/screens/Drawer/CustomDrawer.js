import {
  Image,
  ImageBackground,
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
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/slices/signin.js";
import useShopping from "../../customHooks/useShopping.js";
import * as Progress from 'react-native-progress';
const imageDefault = "https://res.cloudinary.com/dzonjuriq/image/upload/v1658861361/script_music_img/user_g8vdpj.png"
const backgroundIMG = "https://res.cloudinary.com/dzonjuriq/image/upload/v1658861360/script_music_img/menu_n6yo90.png"

const CustomDrawer = (props) => {
  const {bought} = useShopping();
  const { user } = useSelector((state) => state.signin);
  const dispatch = useDispatch();
  var progress = bought.length > 0 ?  bought.length / 20 : 0;

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={{ uri: backgroundIMG }}
          style={styles.imgBackground}
        >
          <View style={styles.borderUser}>

          <Image
            source={user ? {uri: user.image} : {uri: imageDefault}}
            style={styles.userImage}
          />
          <View style={styles.progressCircle}>    
           <Progress.Circle size={90} showsText={false} thickness={3} progress={progress} borderColor="#000000" color='orange' borderWidth={2}/>
          </View>
          </View>
          <Text style={styles.userName}>
            {user ? user.firstName + " " + user.lastName : "Cargando..."}
          </Text>
        </ImageBackground>

        <View style={styles.containerItems}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.drawerFooter}>
        <View style={styles.containerFooter}>
          <TouchableOpacity onPress={() => dispatch(logOut())}>
            <View style={styles.containerSignOff}>
              <Icon name="login-variant" type="material-community" size={24} />
              <Text style={styles.signOff}>Cerrar sesión</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
