import { createSlice } from "@reduxjs/toolkit";
import { State } from "../store";

export interface BasketSlice {
  items: Item[];
}

export interface Item {
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

export const selectBasketItems = (state: State) => state.basket.items;

export const selectBasketItemsWithId = (state: State, id: string) =>
  state.basket.items.filter((item: Item) => item.id === id);

export const selectBasketTotal = (state: State) =>
  state.basket.items.reduce(
    (total: number, item: Item) => (total += item.price),
    0
  );
export default basketSlice.reducer;
