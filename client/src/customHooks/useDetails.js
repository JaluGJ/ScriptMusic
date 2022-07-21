import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../redux/slices/products';

const useDetails = ({itemId}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { details, statusCode } = useSelector((state) => state.products);

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
          dispatch(getProductDetails(itemId));
        });
    
        return () => {
          unsubscribe;
          dispatch(getProductDetails());
        };
      }, [navigation]);

    return { details, statusCode };
}

export default useDetails
