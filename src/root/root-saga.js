import { all, fork } from "redux-saga/effects";

import { todosSaga } from "../todos/todos-saga";

export default function* () {
    yield all([fork(todosSaga)]);
}
