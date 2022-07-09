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
            state.total = state.total + action.payload
            console.log(state.total)
        }
    }
})

export const { setProductsCart , setTotal} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

export const postProductsCart = (payload) => (dispatch) => {
    dispatch(setProductsCart(payload))
}

export const setTotalPrice = (payload) => (dispatch) => {
    console.log(payload)
    dispatch(setTotal(payload))
}