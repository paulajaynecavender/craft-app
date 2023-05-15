import { configureStore } from "@reduxjs/toolkit";
import craftReducer from "../Features/craftSlice";

export const store = configureStore({
  reducer: {
    craft: craftReducer,
  },
});
