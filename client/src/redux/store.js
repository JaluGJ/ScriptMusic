import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products'
import pagination from "./slices/pagination"
import shoppingCart from "./slices/shoppingCart"
export default configureStore({
    reducer:{
        products,
        pagination,
        shoppingCart,
    }
})