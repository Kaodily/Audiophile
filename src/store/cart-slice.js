import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name: "cart",
initialState:{
    count: 0,
    isOpen: false,
    cart:[]
},
reducers:{
    increase(state,action){
     state.count++},
     decrease(state,action){
     state.count--} ,
     cartIsOpen(state){
      state.isOpen = !state.isOpen
     },
     addItem(state,action){
      state.cart = state.cart.push(action.payload)
    //   const carts = state.cart.filter((value, index, self) => self.indexOf(value) === index);
      console.log(state.cart)
     },
     backdropHandleClick(state){
     state.isOpen = !state.isOpen
     }
}
})
export const cartActions = cartSlice.actions;

export default cartSlice;
