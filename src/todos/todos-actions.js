import { createActions } from "reduxsauce";

export const TodosActions = createActions(
    {
        todosLoaded: ["todos"],
        addTodo: ["todo"],
        getTodos: [],
    },
    { prefix: "todos/" }
);
