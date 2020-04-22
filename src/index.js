import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

const state = {
    todos: [
        { id: 1, name: "buy milk" },
        { id: 2, name: "buy bread" },
    ],
};

ReactDOM.render(
    <React.StrictMode>
        <App state={state} />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
