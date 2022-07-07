import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products'
import pagination from "./slices/pagination"
export default configureStore({
    reducer:{
        products,
        pagination
    }
})