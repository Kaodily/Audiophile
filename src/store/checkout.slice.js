import { createSlice } from "@reduxjs/toolkit";


const checkoutSlice = createSlice({
    name:"checkout",
    initialState:{
      checked: false,
      isVisible:false
    },
    reducers:{
        paymentHandleChange(state,action){
           state.checked = action.payload.checked
         if(state.checked === true && action.payload.value === "e-money"){
            state.isVisible = true
         }else{
            state.isVisible = false
         }
        }
    }
})

export const checkoutActions = checkoutSlice.actions

export default checkoutSlice