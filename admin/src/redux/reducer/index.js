import {
  GET_ALL_PRODUCTS,
  GET_ONE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  GET_GRAFICO,
  GRAFICO_ID,
  GET_ALL_USERS,
  GET_ONE_USER,
  ADD_USER,
  ADMIN_LOGIN,
  DELETE_TOKEN,
  CLEAR_CACHE,
  DELETE_USER,
  BAN_USER,
  UN_BAN_USER,
  GET_ALL_PROMOS,
  ADD_PROMO,
  DELETE_PROMO,
  ADMIN_PROFILE,
  ADMIN_EMAIL_CHANGE,
  ADMIN_PASSWORD_CHANGE,
  ADMIN_CHANGE_ROLE
} from "../actions";

const initialState = {
  products: [],
  product: [],
  types: [],
  categories: [],
  token: [],
  users: [],
  user: [],
  promos: [],
  graficos: [],
  graficosId: [],
  adminprofile: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // REDUX PRODUCTS

    case GET_ALL_PRODUCTS:
      let types = [...new Set(action.payload.map((product) => product.type))];
      let categories = [
        ...new Set(action.payload.map((product) => product.category)),
      ];
      return {
        ...state,
        products: action.payload,
        types: types,
        categories: categories,
      };
    case GET_ONE_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload._id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    case GET_GRAFICO:
      return {
        ...state,
        graficos: action.payload,
      };

    case GRAFICO_ID:
      return {
        ...state,
        graficosId: [action.payload],
      };

    // REDUX PRODUCTS

    // REDUX USERS

    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_ONE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: state.users,
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users,
      };

    case BAN_USER:
      return {
        ...state,
      };

    case UN_BAN_USER:
      return {
        ...state,
      };

    // REDUX USERS

    // REDUX FUNTIONS

    case ADMIN_LOGIN:
      return {
        ...state,
        token: action.payload,
      };

    case ADMIN_PROFILE:
      return {
        ...state,
        adminprofile: action.payload.user,
      };

    case ADMIN_EMAIL_CHANGE:
      return {
        ...state,
      };

    case ADMIN_PASSWORD_CHANGE:
      return {
        ...state,
      };
      
    case ADMIN_CHANGE_ROLE:
      return {
        ...state,
      };

    case CLEAR_CACHE:
      return {
        ...state,
        product: [],
        user: [],
        users: [],
      };

    case DELETE_TOKEN:
      return {
        ...state,
        token: [],
      };

    // REDUX FUNTIONS

    // REDUX PROMOS

    case GET_ALL_PROMOS:
      return {
        ...state,
        promos: action.payload,
      };

    case ADD_PROMO:
      return {
        ...state,
        promos: state.promos,
      };

    case DELETE_PROMO:
      return {
        ...state,
        promos: state.promos,
      };

    // REDUX PROMOS
    default:
      return state;
  }
};
