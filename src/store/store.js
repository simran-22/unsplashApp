import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import photoSlice from "../features/photoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    photos: photoSlice,
  },
});
