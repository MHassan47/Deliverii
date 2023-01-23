import { createSlice } from "@reduxjs/toolkit";
import { Dish } from "../../screens/RestaurantScreen";
import { State } from "../store";

export interface RestaurantSlice {
  restaurant: Restaurant;
}

export interface Restaurant {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: Dish[];
  lat: number;
  long: number;
}

const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    lat: null,
    long: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: State) => state.restaurant.restaurant;
export default restaurantSlice.reducer;
