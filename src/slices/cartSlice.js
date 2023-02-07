import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.push(action.payload);
    },
    incrementAmount: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.amount++;
    },
    decrementAmount: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.amount === 1) {
        item.amount = 1;
      } else {
        item.amount--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementAmount, decrementAmount, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
