import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const login = createAsyncThunk(
  "login",
  async ({ formValue, navigate, toast }) => {
    try {
      console.log(formValue);

      const response = await api.signIn(formValue);
      console.log(response.data);

      // toast.success("login successful")
      
      return response.data;
    } catch (err) {
      console.log(err);
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
      // localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
      console.log(payload);
      state.user = payload;
      state.isLogin = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default authSlice.reducer;
