import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cacheSlice from "./cacheSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    search: cacheSlice,
  },
});

export default appStore;
