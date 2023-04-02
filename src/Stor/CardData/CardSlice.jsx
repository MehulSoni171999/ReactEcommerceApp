import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState={
  cards:[],
};

export const CardSlice = createSlice({
  name: 'Item',
  initialState,
  reducers: {
      getCards:(state,action)=>{
        state.cards=action.payload;
      },

  }
})

export const { getCards} = CardSlice.actions;

export const getCardsAsync=()=> async(dispatch,getStates)=>{
  const a= await axios.get("https://dummyjson.com/products")
  .then((response)=>{

    const v= response.data.products.map((elem,index)=>({...elem , quantity: 0}));
    // console.log(v);

    dispatch(getCards(v)) ;
  console.log(v)
  })
  .catch((err)=>console.log(err));
}

export default CardSlice.reducer;

