import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { setCurrentPage } from './pagination';
const apiUrl = 'http://192.168.0.12:3001/';
export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        statusCode: 200,
    },
    reducers: {
        setProductsList: (state, action)=>{
            state.list = action.payload;
        },
        setProductsStatusCode: (state, action)=>{
            state.statusCode = action.payload;
        }
    }   
});

export const {setProductsList,setProductsStatusCode} = productsSlice.actions;



export default productsSlice.reducer;

export const getAllProducts = ()=> (dispatch) =>{
    axios.get(`${apiUrl}products`)
    .then(res=>{
        dispatch(setProductsList(res.data))
        dispatch(setCurrentPage(1))
        dispatch(setProductsStatusCode(res.status))
    })
    .catch(err=>{
        console.log(err)
    })
}

export const searchProducts = (name) => (dispatch) => {
    axios.get(`${apiUrl}products?search=${name}`)
    .then(res =>{
        dispatch(setProductsList(res.data))
        dispatch(setCurrentPage(1))
        dispatch(setProductsStatusCode(res.status))
    })
    .catch(err=>{
        dispatch(setProductsStatusCode(err.response.status))
        dispatch(setCurrentPage(1))
        console.log(err)
    })
}

export const getAllFilterProducts = (filter)=> (dispatch) =>{
   
    let {category,price} = filter;
    if(price === undefined){
        axios.get(`${apiUrl}products?category=${category}`)
        .then(res=>{
            dispatch(setCurrentPage(1))
            dispatch(setProductsList(res.data))
            dispatch(setProductsStatusCode(res.status))
        })
        .catch(err=>{
           console.log(err)
        })
    }else{
        axios.get(`${apiUrl}products?category=${category}&price=${price}`)
        .then(res=>{
            dispatch(setProductsList(res.data))
            dispatch(setCurrentPage(1))
            dispatch(setProductsStatusCode(res.status))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
