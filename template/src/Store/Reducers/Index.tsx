import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

export const Rootreducer = combineReducers({
  user: UserSlice,
});
