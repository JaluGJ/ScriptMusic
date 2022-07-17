import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { setCurrentPage } from './pagination';

const apiUrl = 'https://sm.up.railway.app/';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        statusCode: 0,
        details: {},
        category: 'Todos',
        newItems: 0,
        favorite: [],
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
        },
        remItems: (state, action)=>{
            state.newItems =  action.payload;
        },
        setFavorite: (state, action)=>{
            state.favorite = [...state.favorite, action.payload];
        },
        removeFavorite: (state, action)=>{
            state.favorite = state.favorite.filter(item => item.id !== action.payload);
        }
    }   
});

export const {setProductsList,setProductsStatusCode,setProductsDetails,setCategory,setItems,remItems,setFavorite} = productsSlice.actions;

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
    dispatch(setProductsStatusCode(0))
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
    dispatch(setItems(payload))
}

export const removeItems = () => (dispatch) =>{
    dispatch(remItems(null))
}

export const addToFavorite = (item)  =>  async (dispatch) => {
    try {
      let existingFav = await AsyncStorage.getItem("@favorite");
      if (existingFav !== null) {
        let favorites = JSON.parse(existingFav);
        let existingProduct = favorites.find((product) => {
          if (product.id === item.id) {
            return true;
          }
          return false;
        });

        if (!existingProduct) {
          favorites.push(item);
          await AsyncStorage.setItem("@favorite", JSON.stringify(favorites));
          dispatch(setFavorite(favorites));
        }
      } else {
        await AsyncStorage.setItem("@favorite", JSON.stringify([item]));
        dispatch(setFavorite(item));
      }
    } catch (e) {
      console.log(e);
    }
  };

  export const removeFromFavorite = (id) => async (dispatch)  => {
    try {
      let existingFav = await AsyncStorage.getItem("@favorite");
      if (existingFav !== null) {
        let favorites = JSON.parse(existingFav);
        let existingProduct = favorites.find((product) => {
          if (product.id === id) {
            return true;
          }
          return false;
        });

        if (existingProduct) {
          favorites.splice(favorites.indexOf(existingProduct), 1);
          await AsyncStorage.setItem("@favorite", JSON.stringify(favorites));
          dispatch(removeFavorite(favorites));
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

//   export const getFavorite = async () => {
//     try {
//       let existingFav = await AsyncStorage.getItem("@favorite");
//       if (existingFav !== null) {
//         return JSON.parse(existingFav);
//       }else{
//         return [];
//       }
//     } catch (e) {
//       console.log(e);
//     }
// }