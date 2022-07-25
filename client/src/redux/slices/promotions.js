import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = 'https://sm.up.railway.app/';

export const promotionsSlice = createSlice({
    name: 'promotions',
    initialState: {
        promotions: [],
        detailsPromotion: {},
    },
    reducers: {
        setPromotions: (state, action) => {
            state.promotions = action.payload;
        },
        setDetails: (state, action) => {
            state.detailsPromotion = action.payload;
        },
        
    }   
});


export const {setPromotions,setDetails} = promotionsSlice.actions;

export default promotionsSlice.reducer;

export const getPromotions = (userToken) => async (dispatch) => {
    const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
    try{
        const {data} = await axios.get(`${apiUrl}promos`,config);
        dispatch(setPromotions(data));
    }catch(error){
        console.log(error);
    }
}

export const getPromoDetails = (id,token) => async (dispatch) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const {data} = await axios.get(`${apiUrl}promos/${id}`,config);
        dispatch(setDetails(data));
    }catch(error){
        console.log(error);
    }
}