import { configureStore } from "@reduxjs/toolkit";
import { Rootreducer } from "../Reducers/Index";

export const store = configureStore({
  reducer: Rootreducer,
});
