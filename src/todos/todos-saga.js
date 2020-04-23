import { call, fork, put, takeEvery } from "redux-saga/effects";

import * as TodosEffects from "./todos-effects";
import { TodosActions } from "./todos-actions";

function* getTodos() {
    const { data: todos } = yield call(TodosEffects.getTodos);
    yield put(TodosActions.Creators.todosLoaded(todos));
}

function* addTodo({ todo }) {
    yield call(TodosEffects.addTodo, todo);
    yield fork(getTodos);
}

export function* todosSaga() {
    yield fork(getTodos);
    yield takeEvery(TodosActions.Types.ADD_TODO, addTodo);
}
