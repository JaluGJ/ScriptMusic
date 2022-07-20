import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../../../redux/slices/favourites';

const useFavorites = () => {
    const navigation = useNavigation();
const {favourites} = useSelector((state) => state.favourites);
  const {token} = useSelector(state => state.signin);
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getFavourites(token));
    })
    return unsubscribe;
  },[navigation]);
  return [favourites];
}

export default useFavorites
