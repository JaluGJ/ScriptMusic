import axios from "axios";
// lo de la linea 3 iria en un .env, solo la parte de localhost:3001, la parte de http si va asi
const baseUrl = "https://sm.up.railway.app"
//const baseUrl = "http://localhost:3001";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADMIN_LOGIN = "ADMIN_LOGIN";
export const DELETE_TOKEN = "DELETE_TOKEN";
export const CLEAR_CACHE = "CLEAR_CACHE";

export const GET_ALL_USERS = "GET_ALL_USERS";
// El one user no esta aun
export const GET_ONE_USER = "GET_ONE_USER";
// export const ADD_USER = "ADD_USER"

// PRODUCTS ACTIONS

export const getAllProducts = () => (dispatch) => {
  axios
    .get(`${baseUrl}/products`)
    .then((res) => {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getOneProduct = (id, userToken) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  axios
    .get(`${baseUrl}/products/${id}`, config)
    .then((res) => {
      dispatch({
        type: GET_ONE_PRODUCT,
        payload: res.data.product,
      });
    })
    .catch((err) => console.log(err));
};

export const addProduct = (product, userToken) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  axios
    .post(`${baseUrl}/products`, product, config)
    .then((res) => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const updateProduct = (id, product, userToken) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  axios
    .put(`${baseUrl}/products/${id}`, product, config)
    .then((res) => {
      dispatch({
        type: UPDATE_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteProduct = (id) => (dispatch) => {
  axios
    .delete(`${baseUrl}/product/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const clearCache = () => (dispatch) => {
  dispatch({
    type: CLEAR_CACHE,
  });
};

// PRODUCTS ACTIONS

// USER ACTIONS

export const getAllUsers = (userToken) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  axios
    .get(`${baseUrl}/users`, config)
    .then((res) => {
      dispatch({
        type: GET_ALL_USERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getOneUser = (id, userToken) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  axios
    .get(`${baseUrl}/profile?=/${id}`, config)
    .then((res) => {
      dispatch({
        type: GET_ONE_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// export const addUser = (user, userToken) => (dispatch) => {
//     const config = {
//         headers: {
//           Authorization: `Bearer ${userToken}`,
//         },
//       };
//     axios.post(`${baseUrl}/users`, user, config)
//         .then(res => {
//             dispatch({
//                 type: ADD_USER,
//                 payload: res.data
//             })
//         })
//         .catch(err => console.log(err))
// }

export const adminLogin = (user) => (dispatch) => {
  axios
    .post(`${baseUrl}/loginAdmin`, user)
    .then((res) => {
      console.log(res.data.token);
      dispatch({
        type: ADMIN_LOGIN,
        payload: res.data.token,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteToken = () => {
  return {
    type: DELETE_TOKEN,
  };
};

// USER ACTIONS
