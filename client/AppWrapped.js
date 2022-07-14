import { useDispatch, useSelector } from "react-redux";
import AuthStack from "./src/Wrappers/AuthStack";
import AppStack from "./src/Wrappers/AppStack";
import { ActivityIndicator, Alert, View } from "react-native";
import { changeToken, cleanErr } from "./src/redux/slices/signin";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function AppWrapped() {
  let { token, err, isLoading } = useSelector((state) => state.signin);
  const dispatch = useDispatch();


  let getToken = async () => {
    try {
      let userToken = null;
      userToken = await AsyncStorage.getItem("@token_id");
      dispatch(changeToken(userToken));
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() => {
    getToken()
  }, [dispatch]);



  if (err > 400) {
    Alert.alert("Error", "Email o contraseñas incorrectos");
    dispatch(cleanErr());
  }

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return <>{token !== null ? <AppStack /> : <AuthStack />}</>;
}