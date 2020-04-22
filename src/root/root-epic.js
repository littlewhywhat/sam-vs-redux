import { combineEpics } from "redux-observable";
import { todosEpic } from "../todos/todos-epics";

export const rootEpic = combineEpics(todosEpic);
