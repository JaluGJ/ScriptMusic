import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://62.108.35.100:3001/";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    token: "",
    err: false,
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

export const { setToken, setErr } = signupSlice.actions;

export default signupSlice.reducer;

export const postUser = (obj) => (dispatch) => {
  axios
    .post(`${apiUrl}signup`, obj)
    .then((res) => {
      dispatch(setToken(res.data.token));
      dispatch(setErr(false));
      console.log("User created succesfully");
    })
    .catch((e) => {
      dispatch(setToken(""));
      dispatch(setErr(true));
      console.log("User already exists");
    });
};

export const errFalse = (err) => (dispatch) => {
  dispatch(setErr(!err));
};
