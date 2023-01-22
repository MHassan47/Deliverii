import { createSlice } from "@reduxjs/toolkit";

export interface BasketSlice {
  items: string[];
}

const initialState: BasketSlice = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: any) => state.basket.items;
export default basketSlice.reducer;
