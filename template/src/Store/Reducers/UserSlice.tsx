import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: "",
  token: "",
  BASE_URL: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleuserToken: (state, action) => {
      state.token = action.payload;
    },
    handleUserData: (state, action) => {
      state.userData = action.payload;
    },
    handleBaseUrl: (state, action) => {
      state.BASE_URL = action.payload;
    },
  },
});

export const { handleuserToken, handleUserData, handleBaseUrl } =
  UserSlice.actions;

export default UserSlice.reducer;
