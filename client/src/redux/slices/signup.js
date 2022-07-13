import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://62.108.35.100:3001/";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    token: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = signupSlice.actions;

export default signupSlice.reducer;

export const postUser = (obj) => (dispatch) => {
  axios
    .post(`${apiUrl}signup`, obj)
    .then((res) => {
      console.log("User created succesfully");
      dispatch(setToken(res.data.token));
    })
    .catch((e) => {
      console.log("User already exists");
    });
};
