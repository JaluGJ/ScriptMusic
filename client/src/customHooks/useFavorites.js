import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../redux/slices/favourites';

const useFavorites = () => {
  const {favourites,loading,watched} = useSelector((state) => state.favourites);
  const {token} = useSelector(state => state.signin);

  const dispatch = useDispatch();
  useEffect(()=>{
    let isMounted = true;
    if(isMounted){
      dispatch(getFavourites(token));
    }
    return ()=>{
      isMounted = false;
    }
  },[watched]);

  return [favourites,loading];
}

export default useFavorites
