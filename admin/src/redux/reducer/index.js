import { modalUnstyledClasses } from "@mui/material"
import {
    GET_ALL_PRODUCTS,
    GET_ONE_PRODUCT,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    GET_ALL_USERS,
    GET_ONE_USER,
    ADD_USER,
    ADMIN_LOGIN,
    DELETE_TOKEN,
    CLEAR_CACHE,
    DELETE_USER
} from "../actions"

const initialState = {
    products: [],
    product: [],
    types: [],
    categories: [],
    token: [],
    users: [],
    user: [],
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            let types = [...new Set(action.payload.map(product => product.type))]
            let categories = [...new Set(action.payload.map(product => product.category))]
            return {
                ...state,
                products: action.payload,
                types: types,
                categories: categories
            }
        case GET_ONE_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload._id ? action.payload : product)
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload._id)
            }
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_ONE_USER:
            return {
                ...state,
                user: action.payload
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.payload._id)
            }

        case ADMIN_LOGIN:
            return {
                ...state,
                token: action.payload
            }

        case CLEAR_CACHE: 
            return {
                ...state,
                product: [],
            }

        case DELETE_TOKEN:
            return{
                ...state,
                token: []
            }

        default:
            return state
    }
}