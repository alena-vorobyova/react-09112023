import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/get-users";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "user",
  initialState: entityAdapter.getInitialState({ status: "idle" }),
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
