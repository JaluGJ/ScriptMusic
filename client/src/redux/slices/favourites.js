import {createSlice} from '@reduxjs/toolkit';
const apiUrl = 'https://sm.up.railway.app/';

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        favourites: [],
    },
    reducers: {
        setFavourite: (state, action) => {
            state.favourites = action.payload;
        }
    }   
});


export const {setFavourite} = favouritesSlice.actions;

export default favouritesSlice.reducer;


export const postFavourite = (userToken,productId) => async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
    const datos = {
        body:{
          productId: productId
        }
      }
    try {
        const {data} = await axios.post(`${apiUrl}profile/favs`,datos , config)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
  };
  

  export const deleteFavourite = (userToken,productId) => async (dispatch) => {
    
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
    const datos = {
        body:{
          productId: productId
        }
      }
      try {
        const {data} = await axios.post(`${apiUrl}profile/favs`,datos, config)
        // dispatch(setFavourite(data.favourites))
        dispatch(getFavourites(userToken))
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
            const {data} = await axios.get(`${apiUrl}profile/favs`, config)
            console.log(data)
            // dispatch(setFavourite(data.favourites))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }