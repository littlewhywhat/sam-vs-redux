import { createReducer } from "reduxsauce";

import { TodosActions } from "./todos-actions";

const INITIAL_STATE = {
    todos: [],
};

const todosLoaded = (state, { todos }) => ({
    ...state,
    todos,
});

const HANDLERS = {
    [TodosActions.Types.TODOS_LOADED]: todosLoaded,
};

export const todos = createReducer(INITIAL_STATE, HANDLERS);
