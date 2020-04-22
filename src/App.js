import React from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList";

const AppComponent = ({ state }) => <ToDoList todos={state.todos}></ToDoList>;

export const App = AppComponent;
