import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://62.108.35.100:3001/";

export const signinSlice = createSlice({
  name: "signin",
  initialState: {
    token: null,
    err: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setErr: (state, action) => {
      state.err = action.payload;
    },
  },
});

export const { setToken, setErr } = signinSlice.actions;

export default signinSlice.reducer;

export const loginUser = (obj) => (dispatch) => {
  axios
    .post(`${apiUrl}login`, obj)
    .then((res) => {
      dispatch(setToken(res.data.token));
      console.log("LOGIN: User logged in");
    })
    .catch((e) => {
      console.log("LOGIN: Email or password is incorrect");
      dispatch(setErr(e.response.status));
    });
};

export const logOut = () => (dispatch) => {
  dispatch(setToken(null))
  console.log("LOGIN: User logout")
};

export const cleanErr = () => (dispatch) => {
  dispatch(setErr(null))
}