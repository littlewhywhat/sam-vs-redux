import React from "react";
import "./ToDoList.css";

const ToDoListComponent = ({ todos, addTodo }) => (
    <div>
        <div id="addtodo">
            <input
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addTodo({ name: e.target.value });
                        e.target.value = "";
                    }
                }}
                type="text"
            ></input>
        </div>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.name}</li>
            ))}
        </ul>
    </div>
);

export const ToDoList = ToDoListComponent;
