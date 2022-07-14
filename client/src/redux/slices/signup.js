import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://62.108.35.100:3001/";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    flag: false,
    err: false,
  },
  reducers: {
    setFlag: (state, action) => {
      state.flag = action.payload;
    },
    setErr: (state, action) => {
      state.err = action.payload;
    },
  },
});

export const { setFlag, setErr } = signupSlice.actions;

export default signupSlice.reducer;

export const postUser = (obj) => (dispatch) => {
  axios
    .post(`${apiUrl}signup`, obj)
    .then((res) => {
      dispatch(setFlag(true));
      dispatch(setErr(false));
      console.log("REGISTER: User created succesfully");
    })
    .catch((e) => {
      dispatch(setFlag(false));
      dispatch(setErr(true));
      console.log("REGISTER: User already exists");
    });
};

export const errFalse = (err) => (dispatch) => {
  dispatch(setErr(!err));
};

export const cleanCache = () => (dispatch) => {
  dispatch(setFlag(false));
};
