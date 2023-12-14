export const selectUserModule = (state) => state.restaurant;

export const selectUserIds = (state) => selectUserModule(state).ids;
export const selectUserById = (state, id) =>
  selectUserModule(state).entities[id];
