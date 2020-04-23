import * as ToDoEffects from "./todos-effects";

const addTodo = async (todo) => {
    const { data: addedTodo } = await ToDoEffects.addTodo(todo);
    return { addedTodo };
};

const refreshTodos = async () => {
    const { data: todos } = await ToDoEffects.getTodos();
    return { todos };
};

export const Actions = {
    addTodo,
    refreshTodos,
};
