import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPromotions } from '../redux/slices/promotions';

const usePromotions = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { promotions } = useSelector((state) => state.promotions);
    const { token } = useSelector((state) => state.signin);

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        dispatch(getPromotions(token));
      })
        return unsubscribe
    }, [navigation])
    

    return [promotions]
}

export default usePromotions

