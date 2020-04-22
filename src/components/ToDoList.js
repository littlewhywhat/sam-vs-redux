import React from "react";

const ToDoListComponent = ({ todos }) => (
    <div>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.name}</li>
            ))}
        </ul>
    </div>
);

export const ToDoList = ToDoListComponent;
