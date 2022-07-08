import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import guitarras from '../../../guitarra.json'
const apiUrl = 'http://localhost:3001/';
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
    let products = dispatch(setProductsList(guitarras))

    return products

}

export const searchProducts = (name) => (dispatch) => {
    axios.get(`${apiUrl}products?search=${name}`)
    .then(res =>{
        dispatch(setProductsList(res.data))
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}

export const getAllFilterProducts = (filter)=> (dispatch) =>{
    let {category,price} = filter;
    console.log(category,price)
    axios.get(`${apiUrl}products?category=${category}&price=${price}`)
    .then(res=>{
        console.log(res.data)
        dispatch(setProductsList(res.data))
    })
    .catch(err=>{
        console.log(err)
    })
}
