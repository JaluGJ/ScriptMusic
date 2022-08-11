import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = 'https://script-music.herokuapp.com/';

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        favourites: [],
        existingFavourite: false,
        loading: false,
        watched:0,
    },
    reducers: {
        setFavourite: (state, action) => {
            state.favourites = action.payload;
        },
        setExistingFavourite: (state, action) => {
            state.existingFavourite = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setWatched: (state, action) => {
            state.watched = state.watched+=action.payload;
        }
    }   
});


export const {setFavourite,setExistingFavourite,setLoading,setWatched} = favouritesSlice.actions;

export default favouritesSlice.reducer;

export const postFavourite = (userToken,productId) => async (dispatch) => {

    const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        }
      }
      const datos = {
            productsId: productId
      }
      try {
        const {data} = await axios.post(`${apiUrl}profile/favs`,datos,config);
        if(data.msg){
          dispatch(setWatched(1));
        }
    } catch (error) {
        console.log(error)
    }
  };

  export const deleteFavourite = (userToken,productId) => async (dispatch) => {

    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      data:{
            productsId: productId
      }
    }
      try {
        const {data} = await axios.delete(`${apiUrl}profile/favs`,config)
        if(data.msg==="Producto eliminado con exito"){
            dispatch(setFavourite(data.favs));
        }
    } catch (error) {
        console.log(error)
    }
  };


    export const getFavourites = (userToken) => async (dispatch) => {
        const config = {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
          try {
            dispatch(setLoading(true));
            const {data} = await axios.get(`${apiUrl}profile/favs`, config)
            dispatch(setLoading(false));
            dispatch(setFavourite(data))
        } catch (error) {
            console.log(error)
        }
    }