import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default appStore;