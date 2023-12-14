import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./thunks/get-reviews";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState({ status: "idle" }),
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.upsertMany(state, payload);
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getReviews.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
