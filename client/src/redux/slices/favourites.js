import {createSlice} from '@reduxjs/toolkit';
const apiUrl = 'https://sm.up.railway.app/';

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        favourites: [],
    },
    reducers: {
        setFavorite: (state, action) => {
            state.favourites = action.payload;
        }
    }   
});


export const {} = favouritesSlice.actions;

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
        const {data} = await axios.post(`${apiUrl}profile`,datos , config)
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
        const {data} = await axios.post(`${apiUrl}profile`,datos, config)
        console.log(data)
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
            const {data} = await axios.get(`${apiUrl}profile`, config)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }