import { createSlice } from "@reduxjs/toolkit";

export interface BasketSlice {
  items: Item[];
}

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
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
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item: Item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`No items left to remove!`);
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: any) => state.basket.items;

export const selectBasketItemsWithId = (state: any, id: string) =>
  state.basket.items.filter((item: Item) => item.id === id);
export default basketSlice.reducer;
