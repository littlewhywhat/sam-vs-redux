import React from "react";
import "./ToDoList.css";
import { getTodos } from "../todos/todos-selectors";
import { connect } from "react-redux";
import { TodosActions } from "../todos/todos-actions";

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

const mapStateToProps = (state) => ({
    todos: getTodos(state),
});

const mapDispatchToProps = {
    addTodo: TodosActions.Creators.addTodo,
};

export const ToDoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoListComponent);
