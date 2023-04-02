import { createSlice } from "@reduxjs/toolkit";

const initialState ={carts:[]};

export const CartSlice= createSlice({
    name:"Cart",
    initialState,
    reducers:{
       addCart:(state,action)=>{

         const ItemIndex = state.carts.findIndex((elem)=> elem.id === action.payload.id);

         if(ItemIndex >= 0){
            state.carts[ItemIndex].quantity +=1
         }

         else{
const temp= {...action.payload,quantity :1};


state.carts.push(temp);

         }

    
       },

       deleteCart:(state,action)=>{
       const data= state.carts.filter((elem)=>elem.id !== action.payload)
    return {
        ...state,
         carts:data
    }
       },

       decrementCart:(state,action)=>{
         const ItemTndexdec= state.carts.findIndex((elem)=> elem.id ==action.payload.id);

         if(state.carts[ItemTndexdec].quantity >=1){
            state.carts[ItemTndexdec].quantity -=1
         }
         else if (state.carts[ItemTndexdec].quantity ===1) {
          
            const data= state.carts.filter((elem)=>elem.id !== action.payload)
            return {
                ...state,
                 carts:data
            }
         }
       }
    },
});

export const {addCart}= CartSlice.actions;
export const {deleteCart}=CartSlice.actions;
export const{decrementCart}=CartSlice.actions;
export default CartSlice.reducer;