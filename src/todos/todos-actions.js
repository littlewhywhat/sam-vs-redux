import { createActions } from "reduxsauce";

export const TodosActions = createActions(
    {
        todosLoaded: ["todos"],
    },
    { prefix: "todos/" }
);
