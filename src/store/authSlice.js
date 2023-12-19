import { createSlice } from "@reduxjs/toolkit";

let localstore = window.localStorage;

let mystatus = () => {
  if (localstore.getItem(status)) {
    return localstore.getItem(status);
  } else {
    return false;
  }
};

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
