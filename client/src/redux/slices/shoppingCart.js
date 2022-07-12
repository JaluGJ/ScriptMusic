import {createSlice} from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: {
        productsCart: [],
        totalPrice: 0
    },
    reducers: {
        setProductsCart: (state, action) => {
            state.productsCart = [...state.productsCart, action.payload]
        },
        setTotal: (state, action) => {
            state.totalPrice = state.totalPrice + action.payload
            /* console.log(state.totalPrice) */
            /* console.log(state.productsCart) */
        }
    }
})

export const { setProductsCart , setTotal} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

export const postProductsCart = (payload) => (dispatch) => {
    dispatch(setProductsCart(payload))
}

export const setTotalPrice = (payload) => (dispatch) => {
    dispatch(setTotal(payload))
}