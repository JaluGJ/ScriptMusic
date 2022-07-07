import {createSlice} from '@reduxjs/toolkit';
//import axios from 'axios';
import guitarras from '../../../guitarra.json'
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
    axios.get(`http://localhost:3001/products?search=${name}`)
    .then(res =>{
        dispatch(setProductsList(res.data))
    })
    .catch(err=>{
        console.log(err)
    })
}
/* 
export const getAllProductsd = ()=>{
    axios.get('url').then((
        response => {}
    ).catch(
        error => console.log(error)
    ))
} 
*/