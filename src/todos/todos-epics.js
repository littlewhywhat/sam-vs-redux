import { ofType, combineEpics } from "redux-observable";
import { TodosActions } from "./todos-actions";
import { map, mergeMap } from "rxjs/operators";

export const addTodoEpic = (action$, state$, { addTodo }) =>
    action$.pipe(
        ofType(TodosActions.Types.ADD_TODO),
        mergeMap(({ todo }) =>
            addTodo(todo).pipe(map(() => TodosActions.Creators.getTodos()))
        )
    );

export const getTodosEpic = (action$, state$, { getTodos }) =>
    action$.pipe(
        ofType(TodosActions.Types.GET_TODOS),
        mergeMap(() =>
            getTodos().pipe(
                map((todos) => TodosActions.Creators.todosLoaded(todos))
            )
        )
    );

export const todosEpic = combineEpics(addTodoEpic, getTodosEpic);
