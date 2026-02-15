import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../../interface/interface";

const initialAuthState: AuthState = {
  isLoggedIn: false,
  //   isLoggedIn: JSON.parse(localStorage.getItem("isLoggedInLs") || "false") || false,
  isSuccess: false,
  message: "",
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    SET_REGISTERED_USER(_state, action: any) {
      console.log("authSliceRegistered:", action.payload);
    },
    SET_LOGGEDIN_USER(state, action) {
      console.log("authLoggedInUser:", action.payload);
      state.isLoggedIn = true
      // localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
      // console.log("loggedIn saved to local storage...");
    },
    SET_LOGGEDOUT_USER(state, action) {
        console.log("authSliceLoggedOut:", action.payload),
        state.isLoggedIn = false
        // localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn))
    },
    RESET_USER(state) {
      state.isLoggedIn = false;
      state.isSuccess = false;
      state.user = null;
      state.message = "";
    },
  },
});

export const {
  SET_REGISTERED_USER,
  SET_LOGGEDIN_USER,
  SET_LOGGEDOUT_USER,
  RESET_USER,
} = authSlice.actions;
