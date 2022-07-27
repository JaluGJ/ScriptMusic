import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../redux/slices/favourites';

const useFavorites = () => {
  const navigation = useNavigation();
  const {favourites,loading,watched} = useSelector((state) => state.favourites);
  const {token} = useSelector(state => state.signin);

  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getFavourites(token));
    })
    return unsubscribe;
  },[navigation,watched]);

  return [favourites,loading];
}

export default useFavorites
