import * as todosEffects from "./todos-effects";
import { TodosActions } from "./todos-actions";

export const getTodosThunk = () => {
    return async (dispatch) => {
        const { data: todos } = await todosEffects.getTodos();
        dispatch(TodosActions.Creators.todosLoaded(todos));
    };
};

export const addTodoThunk = (todo) => {
    return async (dispatch) => {
        await todosEffects.addTodo(todo);
        dispatch(getTodosThunk());
    };
};
