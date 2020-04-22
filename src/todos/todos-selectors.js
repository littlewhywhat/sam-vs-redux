import { createSelector } from "reselect";

const getState = (state) => state.todos;

export const getTodos = createSelector(getState, (state) => state.todos);
