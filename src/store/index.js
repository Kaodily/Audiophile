import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import checkoutSlice from "./checkout.slice";
import generalSlice from "./general-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    checkout: checkoutSlice.reducer,
    general: generalSlice.reducer,
  },
});
export default store;
