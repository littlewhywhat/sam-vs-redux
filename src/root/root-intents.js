import { addInitialState, addComponent, step } from "sam-pattern";

import { Actions } from "../todos/todos-actions";
import { Acceptors } from "../todos/todos-acceptors";

addInitialState({
    todos: [],
    addedTodo: null,
});

const {
    intents: [init, addTodo, refreshTodos],
} = addComponent({
    actions: [step, Actions.addTodo, Actions.refreshTodos],
    acceptors: [Acceptors.reset, Acceptors.setTodos, Acceptors.setAddedTodo],
});

export const Intents = { init, addTodo, refreshTodos };
