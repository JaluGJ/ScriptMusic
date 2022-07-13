import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products'
import pagination from "./slices/pagination"
import shoppingCart from "./slices/shoppingCart"
import signup from './slices/signup'

export default configureStore({
    reducer:{
        products,
        pagination,
        shoppingCart,
        signup
    }
})