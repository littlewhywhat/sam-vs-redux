import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

import { setRender } from "sam-pattern";
import { Intents } from "./root/root-intents";
import "./todos/todos-naps";

const render = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} intents={{ addTodo: Intents.addTodo }} />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

setRender(render);

Intents.init();
Intents.refreshTodos();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
