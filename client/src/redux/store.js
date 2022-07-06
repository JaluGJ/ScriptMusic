import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products'
export default configureStore({
    reducer:{
        products
    }
})