import{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeToken, changeUser } from '../redux/slices/signin';

const useLogin = () => {
  let { token, isLoading } = useSelector((state) => state.signin);
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

  useEffect(() => {
    getToken();
  }, [dispatch]);

  return [token, isLoading];
};

export default useLogin;