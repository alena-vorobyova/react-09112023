import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selectors";
import { selectRestaurantReviewIds } from "../../restaurant/selectors";

export const getReviews = createAsyncThunk(
  "restaurant/getReviews",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviewIds = selectRestaurantReviewIds(state, restaurantId);
      const reviewIds = selectReviewIds(state);

      return !restaurantReviewIds.every((id) => reviewIds.includes(id));
    },
  }
);
