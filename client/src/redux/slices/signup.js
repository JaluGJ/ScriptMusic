import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://sm.up.railway.app/";

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

export const postUser = (obj) => async (dispatch) => {
  let token = await AsyncStorage.getItem("@pushToken1")

  axios
    .post(`${apiUrl}signup`, {...obj, pushToken: token})
    .then((res) => {
      dispatch(setFlag(true));
      dispatch(setErr(false));
      console.log("REGISTER");
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
