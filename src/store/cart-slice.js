import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
    isOpen: false,
    cart: [],
    quantity: 0,
  },
  reducers: {
    increase(state, action) {
      state.count++;
    },
    decrease(state, action) {
      state.count--;
      if (state.count <= 0) {
        state.count = 0;
      }
    },
    cartIsOpen(state) {
      if (state) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      state.isOpen = !state.isOpen;
    },
    addItem(state, action) {
      state.count = 0;
      state.quantity = action.payload.count;
      const newItem = action.payload.product;
      let existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        state.quantity++;
      } else {
        state.cart.push(newItem);
      }
    },
    backdropHandleClick(state) {
      state.isOpen = !state.isOpen;
    },
    removeAll(state) {
      state.cart = [];
    },
    checkout(state) {
      console.log("hello");
      state.isOpen = !state.isOpen;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice;
