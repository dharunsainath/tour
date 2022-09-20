import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const login = createAsyncThunk(
  "login",
  async ({ formValue, navigate, toast },{rejectWithValue}) => {
    try {
      console.log(formValue);

      const response = await api.signIn(formValue);
      console.log(response.data);

      // toast.success("login successful")
      navigate("/")
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const signup = createAsyncThunk(
  "signup",
  async ({ formValue, navigate, toast },{rejectWithValue}) => {
    try {
      console.log(formValue);

      const response = await api.signUp(formValue);
      console.log("registered successfully")
      console.log(response.data);

      // toast.success("login successful")
      navigate("/")
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
    isLogin: false,
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...payload }))
      console.log(payload);
      state.user = payload;
      state.isLogin = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [signup.pending]: (state, action) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...payload }))
      console.log(payload);
      state.user = payload;
      
    },
    [signup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});



export default authSlice.reducer;
