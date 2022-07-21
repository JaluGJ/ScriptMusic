import{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeToken, changeUser, cleanErr } from '../redux/slices/signin';
import { Alert } from 'react-native';

const useLogin = () => {
    let { token , err, isLoading } = useSelector((state) => state.signin);
    const dispatch = useDispatch();
  
    let getToken = async () => {
      try {
        let userToken = null;
        let user = null;
        userToken = await AsyncStorage.getItem("@token_id");
        await AsyncStorage.getItem("@user").then((res) => {
          if (res !== null) {
            user = JSON.parse(res);
            dispatch(changeUser(user));
          }
        });
        dispatch(changeToken(userToken));
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(()=>{
           getToken();
        },[dispatch]);
  
    if (err?.includes("incorrectos")) {
      Alert.alert("Error", "Email o contraseña incorrectos.");
      dispatch(cleanErr());
    }
    if (err?.includes("confirmado")) {
      Alert.alert("Error", "Debes confirmar tu cuenta para ingresar.");
      dispatch(cleanErr());
    }
    if (err === undefined) {
      Alert.alert("Error", "El servidor se encuentra caído.");
      dispatch(cleanErr());
    }

    return [token, isLoading];
}

export default useLogin
