import { configureStore } from "@reduxjs/toolkit";
import basketReducer, { BasketSlice } from "./features/basketSlice";
import { RestaurantSlice } from "./features/restaurantSlice";
import restaurantReducer from "./features/restaurantSlice";
export interface State {
  basket: BasketSlice;
  restaurant: RestaurantSlice;
}
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
