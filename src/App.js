import React from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList";

const AppComponent = ({ state, intents }) => (
    <ToDoList todos={state.todos} addTodo={intents.addTodo}></ToDoList>
);

export const App = AppComponent;
