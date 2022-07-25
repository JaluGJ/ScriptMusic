import { Alert} from 'react-native'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useNotifications from './useNotifications';
import { useNavigation } from '@react-navigation/native';
import { cleanCache, errFalse } from '../redux/slices/signup';

const useRegister = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {setPushToken} = useNotifications();
    const { err, flag } = useSelector((state) => state.signup);

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      };

      useEffect(() => {
        handleErrorCheck(err, flag);
        return dispatch(cleanCache());
      }, [err, flag]);
    
      useEffect(() => {
        setPushToken()
      }, []);
    
      let handleErrorCheck = (err, flag) => {
        if (err) {
          dispatch(errFalse(err));
          Alert.alert(
            "Ups...",
            "Ya existe un usuario registrado con ese email, prueba con otro."
          );
        }
        if (flag) {
          Alert.alert(
            "¡Usuario registrado correctamente!",
            "Te enviamos un correo para verificar que el email te pertenece."
          );
          navigation.navigate("Login");
        }
      };
    
      return {initialValues, handleErrorCheck};
}

export default useRegister
