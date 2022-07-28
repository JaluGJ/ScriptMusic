import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products'
import signup from './slices/signup'
import signin from './slices/signin'
import favourites from './slices/favourites'
import promotions from './slices/promotions'

export default configureStore({
    reducer:{
        products,
        signup,
        signin,
        favourites,
        promotions
    }
})