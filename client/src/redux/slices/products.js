import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Alert } from "react-native";

const apiUrl = "https://script-music.herokuapp.com/";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    statusCode: 0,
    details: {},
    ratYCom: [],
    category: "Todos",
    newItems: 0,
    updateRate: 0,
  },
  reducers: {
    setProductsList: (state, action) => {
      state.list = action.payload;
    },
    setProductsStatusCode: (state, action) => {
      state.statusCode = action.payload;
    },
    setProductsDetails: (state, action) => {
      state.details = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setItems: (state, action) => {
      state.newItems = state.newItems += action.payload;
    },
    remItems: (state, action) => {
      state.newItems = action.payload;
    },
    setUpdateRate: (state, action) => {
      state.updateRate = state.updateRate += action.payload;
    },
    setCommit: (state, action) => {
      state.ratYCom = action.payload;
    },
  },
});

export const {
  setUpdateRate,
  setProductsList,
  setProductsStatusCode,
  setProductsDetails,
  setCategory,
  setItems,
  remItems,
  setSaveProducts,
  setCommit,
} = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProducts = () => (dispatch) => {
  axios
    .get(`${apiUrl}products`)
    .then((res) => {
      dispatch(setProductsList(res.data));
      dispatch(setProductsStatusCode(res.status));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProductDetails = (id) => (dispatch) => {
  dispatch(setProductsStatusCode(0));
  if (id) {
    axios
      .get(`${apiUrl}products/${id}`)
      .then((res) => {
        dispatch(setProductsStatusCode(res.status));
        dispatch(setProductsDetails(res.data.product));
        dispatch(setCommit(res.data.product.ratYCom));
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    dispatch(setProductsDetails({}));
  }
};

export const searchProducts = (name) => (dispatch) => {
  axios
    .get(`${apiUrl}products?search=${name}`)
    .then((res) => {
      dispatch(setProductsList(res.data));
      dispatch(setProductsStatusCode(res.status));
    })
    .catch((err) => {
      dispatch(setProductsStatusCode(err.response.status));
      console.log(err);
    });
};

export const getAllFilterProducts = (filter) => (dispatch) => {
  let { category, price } = filter;
  if (price === undefined) {
    axios
      .get(`${apiUrl}products?category=${category}`)
      .then((res) => {
        dispatch(setCategory(category));
        dispatch(setProductsList(res.data));
        dispatch(setProductsStatusCode(res.status));
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    axios
      .get(`${apiUrl}products?category=${category}&price=${price}`)
      .then((res) => {
        dispatch(setCategory(category));
        dispatch(setProductsList(res.data));
        dispatch(setProductsStatusCode(res.status));
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const getCategory = (category) => (dispatch) => {
  dispatch(setCategory(category));
};

export const addItems = (payload) => (dispatch) => {
  dispatch(setItems(payload));
};

export const removeItems = () => (dispatch) => {
  dispatch(remItems(null));
};

export const cleanProducts = () => (dispatch) => {
  dispatch(setProductsList([]));
  dispatch(setProductsStatusCode(0));
};

export const addRating =
  (rating, comment, productId, date, userToken) => (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    axios
      .post(`${apiUrl}rating`, { rating, comment, productId, date }, config)
      .then((res) => {
        dispatch(setUpdateRate(1));
        Alert.alert(
          "¡Gracias por tu opinión!",
          "El comentario se envió correctamente"
        );
      })
      .catch((e) => {
        console.log(e.response.data);
        Alert.alert("Error", e.response.data.msg);
      });
  };

export const updateCommit = (id) => (dispatch) => {
  axios
    .get(`${apiUrl}products/${id}`)
    .then((res) => {
      dispatch(setCommit(res.data.product.ratYCom));
    })
    .catch((err) => {
      console.log(err);
    });
};
