import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checked: false,
    eMoney: false,
    cashOnDelivery: false,
  },
  reducers: {
    paymentHandleChange(state, action) {
      state.checked = action.payload.checked;
      if (state.checked === true && action.payload.value === "e-money") {
        state.eMoney = true;
        state.cashOnDelivery = false;
      } else if (
        state.checked === true &&
        action.payload.value === "cash on delivery"
      ) {
        state.cashOnDelivery = true;
        state.eMoney = false;
      }
    },
  },
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice;
