import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../redux/slices/favourites';

const useFavorites = () => {
  const navigation = useNavigation();
  const {favourites,loading} = useSelector((state) => state.favourites);
  const {token} = useSelector(state => state.signin);
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getFavourites(token));
      console.log('testing')
    })
    return unsubscribe;
  },[navigation,favourites]);
  return [favourites,loading];
}

export default useFavorites
