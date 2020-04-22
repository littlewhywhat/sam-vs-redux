import { api } from "../api/api-client";

export const getTodos = () => api.get("/todos");
export const addTodo = (todo) => api.post("/todos", todo);
