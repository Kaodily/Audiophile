import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    cart: [],
  },
  reducers: {
    cartIsOpen(state) {
      if (state) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      state.isOpen = !state.isOpen;
      // return { ...state, cart: JSON.parse(localStorage.getItem("cart")) };
    },
    addItem(state, action) {
      const { count, product } = action.payload;
      const { id } = product;

      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: count,
              }
            : item
        );
        localStorage.setItem("cart", JSON.stringify({ updatedCart }));
        return { ...state, cart: updatedCart };
      }

      const newItem = { ...product, quantity: count };
      const updatedCart = [...state.cart, newItem];
      localStorage.setItem("cart", JSON.stringify({ updatedCart }));
      return { ...state, cart: updatedCart };
    },
    updateCart(state, action) {
      const newCart = action.payload;
      return { ...state, cart: newCart };
    },
    backdropHandleClick(state) {
      state.isOpen = !state.isOpen;
    },
    removeAll(state) {
      state.cart = [];
    },
    checkout(state) {
      state.isOpen = !state.isOpen;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice;
