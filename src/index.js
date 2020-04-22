import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import * as todosEffects from "./todos/todos-effects";

const state = {
    todos: [],
};

const getTodos = async () => {
    const { data: todos } = await todosEffects.getTodos();
    render({ todos });
};

const addTodo = async (todo) => {
    await todosEffects.addTodo(todo);
    getTodos();
};

const render = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} intents={{ addTodo }} />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

render(state);

getTodos();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
