import { addNAPs } from "sam-pattern";
import { Intents } from "../root/root-intents";

const refreshTodos = (state) => () => {
    if (state.addedTodo) {
        Intents.refreshTodos();
        return true;
    }
    return false;
};

addNAPs([refreshTodos]);
