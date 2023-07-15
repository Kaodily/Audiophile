import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: {
    isNav: false,
  },
  reducers: {
    openNav(state) {
      state.isNav = !state.isNav;
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
      if (!state.isNav) {
        document.body.style.overflow = "unset";
      }
    },
    closeNav(state) {
      state.isNav = false;
    },
  },
});

export const generalActions = generalSlice.actions;

export default generalSlice;
