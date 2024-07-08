import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "sample",
            completed: false
        }
    ],
    addTodos: (todo) => { },
    updateTodos: (id, todo) => { },
    deleteTodos: (id) => { },
    toggleComplete: (id) => { }
});

export const TodoProvider = TodoContext.Provider;

export default function useTodo() {
    return useContext(TodoContext);
}