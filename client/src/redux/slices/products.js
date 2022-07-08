import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = 'http://192.168.0.12:3001/';
export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: []
    },
    reducers: {
        setProductsList: (state, action)=>{
            state.list = action.payload;
        }
    }   
});

export const {setProductsList} = productsSlice.actions;



export default productsSlice.reducer;

export const getAllProducts = ()=> (dispatch) =>{
    axios.get(`${apiUrl}products`)
    .then(res=>{
        dispatch(setProductsList(res.data))
    })
    .catch(err=>{
        console.log(err)
    })
}

export const searchProducts = (name) => (dispatch) => {
    axios.get(`${apiUrl}products?search=${name}`)
    .then(res =>{
        dispatch(setProductsList(res.data))
    })
    .catch(err=>{
        console.log(err)
    })
}

export const getAllFilterProducts = (filter)=> (dispatch) =>{
    let {category,price} = filter;
    axios.get(`${apiUrl}products?category=${category}&price=${price}`)
    .then(res=>{
        dispatch(setProductsList(res.data))
    })
    .catch(err=>{
        console.log(err)
    })
}
