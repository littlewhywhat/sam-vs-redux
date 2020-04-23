const setTodos = (model) => (proposal) => {
    if (proposal.todos) {
        model.todos = proposal.todos;
    }
};

const setAddedTodo = (model) => (proposal) => {
    if (proposal.addedTodo !== undefined) {
        model.addedTodo = proposal.addedTodo;
    }
};

const reset = (model) => () => {
    model.addedTodo = null;
};

export const Acceptors = {
    reset,
    setTodos,
    setAddedTodo,
};
