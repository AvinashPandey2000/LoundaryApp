import { createSlice } from "@reduxjs/toolkit";


export const  CartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const iteamPresent = state.cart.find((item)=>item.id ===action.payload.id);
            if(iteamPresent){
                iteamPresent.quantity++;
            }
            else{
                state.cart.push({...action.payload,quantity:1});
            }
        },
        removeFromCart:(state,action)=>{
            const removeItem = state.cart.filter((item)=> item.id !== action.payload.id);
            state.cart =removeItem;
        },
        incrementQuantity:(state,action)=>{
            const iteamPresent = state.cart.find((item)=>item.id ===action.payload.id);
            iteamPresent.quantity++;
        },
        decrementQuantity:(state,action)=>{
            const iteamPresent = state.cart.find((item)=>item.id ===action.payload.id);
            if(iteamPresent.quantity == 1){
                iteamPresent.quantity =0;
                const removeItem = state.cart.filter((item)=> item.id !== action.payload.id);
                state.cart =removeItem;
            }
            else{
                iteamPresent.quantity--;
            }
        },
    }
})

export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity}= CartSlice.actions;
export default CartSlice.reducer;