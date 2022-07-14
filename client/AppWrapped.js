import { useDispatch, useSelector } from "react-redux";
import AuthStack from "./src/Wrappers/AuthStack";
import AppStack from "./src/Wrappers/AppStack";
import { useEffect } from "react";
import { Alert } from "react-native";
import { cleanErr } from "./src/redux/slices/signin";

export default function AppWrapped() {
  let { token, err } = useSelector((state) => state.signin);
  const dispatch = useDispatch()

  if (err > 400) {
    Alert.alert("Error", "Email o contraseñas incorrectos");
    dispatch(cleanErr());
  }

  return <>{token !== null ? <AppStack /> : <AuthStack />}</>;
}
