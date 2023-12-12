import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./thunks/get-reviews";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.idle,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce((acc, review) => {
          acc[review.id] = review;

          return acc;
        }, {});
        state.ids = payload.map(({ id }) => id);
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getReviews.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
