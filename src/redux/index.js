import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./features/entities/restaurant";
import { dishSlice } from "./features/entities/dish";
import { userSlice } from "./features/entities/user";
import { reviewSlice } from "./features/entities/review";

const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;

