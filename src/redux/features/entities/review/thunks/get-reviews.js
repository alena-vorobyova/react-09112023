import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selectors";

export const getReviews = createAsyncThunk(
  "Review/getReviews",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/reviews?restaurantId=:restaurantId");

    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue("Empty reviews");
    }

    return result;
  },
  {
    condition: (_, { getState }) => !selectReviewIds(getState()).length,
  }
);
