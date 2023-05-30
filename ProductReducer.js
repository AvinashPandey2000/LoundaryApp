import { createSlice } from "@reduxjs/toolkit";

export const productSlice =createSlice({
    name:'product',
    initialState:{
        product:[],
    },
    reducers:{ 
        getProduct:(state,action)=>{
            state.product.push({...action.payload});
        },
        incrementQty:(state,action)=>{
            const iteamPresent = state.product.find((item)=>item.id ===action.payload.id);
            iteamPresent.quantity++;
        },
        decrementQty:(state,action)=>{
            const iteamPresent = state.product.find((item)=>item.id ===action.payload.id);
            if(iteamPresent.quantity == 1){
                iteamPresent.quantity =0;
                const removeItem = state.product.filter((item)=> item.id !== action.payload.id);
                state.cart =removeItem;
            }
            else{
                iteamPresent.quantity--;
            }
        }
    }
})

export const {getProduct,incrementQty,decrementQty} = productSlice.actions;
export default productSlice.reducer;