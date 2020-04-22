import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./root/root-reducer";
import { createEpicMiddleware } from "redux-observable";
import { addTodo, getTodos } from "./todos/todos-effects";
import { rootEpic } from "./root/root-epic";
import { TodosActions } from "./todos/todos-actions";

const epicMiddleware = createEpicMiddleware({
    dependencies: { addTodo, getTodos },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

store.dispatch(TodosActions.Creators.getTodos());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
