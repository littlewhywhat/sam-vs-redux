import { HOST } from "../api/const";
import { ajax } from "rxjs/ajax";

export const getTodos = () => ajax.getJSON(`${HOST}/todos`);
export const addTodo = (todo) =>
    ajax({
        url: `${HOST}/todos`,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: todo,
    });
