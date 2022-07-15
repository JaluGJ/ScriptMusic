import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { setCurrentPage } from './pagination';

const apiUrl = 'http://62.108.35.100:3001/';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        statusCode: 200,
        details: {},
        category: 'Todos',
        newItems: 0,
    },
    reducers: {
        setProductsList: (state, action)=>{
            state.list = action.payload;
        },
        setProductsStatusCode: (state, action)=>{
            state.statusCode = action.payload;
        },
        setProductsDetails: (state, action)=>{
            state.details = action.payload;
        },
        setCategory: (state, action)=>{
            state.category = action.payload;
        },
        setItems: (state, action)=>{
            state.newItems =  state.newItems+=action.payload;
        }
    }   
});

export const {setProductsList,setProductsStatusCode,setProductsDetails,setCategory,setItems} = productsSlice.actions;

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

export const getProductDetails = (id)=> (dispatch) =>{
    if(id){
    axios.get(`${apiUrl}products/${id}`)
    .then(res=>{
        dispatch(setProductsStatusCode(res.status))
        dispatch(setProductsDetails(res.data))
    })
    .catch(err=>{
        console.log(err)
    })
  }else{
    dispatch(setProductsDetails({}))
  }
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
            dispatch(setCategory(category))
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
            dispatch(setCategory(category))
            dispatch(setProductsList(res.data))
            dispatch(setCurrentPage(1))
            dispatch(setProductsStatusCode(res.status))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const getCategory = (category)=> (dispatch) =>{
    dispatch(setCategory(category))
}

export const addItems = (payload) => (dispatch) =>{
    console.log('addItems')
    dispatch(setItems(payload))
}