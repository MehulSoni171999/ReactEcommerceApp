import { configureStore } from '@reduxjs/toolkit';
import ItemReduser from './CardData/CardSlice';
import CartReduser from "./action/Action";
    const store =configureStore({
  reducer: {
  cards:ItemReduser,
carts:CartReduser,
  }
});

export default store;

