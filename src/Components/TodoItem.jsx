import { useState } from "react";
import useTodo from "../Context/context";

export default function TodoItem({ todo }) {
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const [isEditable, setIsEditable] = useState(false);

    const { updateTodos, deleteTodos, toggleComplete } = useTodo();

    function edit() {
        updateTodos(todo.id, { ...todo, todo: todoMsg })
        setIsEditable(false);
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    }

    return (
        <div className={`text-white mt-4 w-6/12 flex gap-4 justify-start p-2 rounded
         ${todo.completed ? 'bg-white opacity-60' : 'bg-white opacity-80'}`}>


            <input type="checkbox"
                className="text-black"
                checked={todo.completed}
                onChange={toggleCompleted}></input>

            <input className={`${isEditable ? 'border-2 border-black' : ''} text-black rounded flex-grow ${todo.completed ? 'line-through' : ''}`}
                type="text" value={todoMsg} readOnly={!isEditable} onChange={(e) => setTodoMsg(e.target.value)}></input>

            <button className="text-black bg-slate-400 rounded pl-2 pr-2 pt-1 pb-1 hover:ring-1"
                onClick={() => {
                    if (todo.completed) return;
                    if (isEditable) {
                        edit();
                    } else {
                        setIsEditable((prev) => (!prev))
                    }
                }}
                disabled={todo.completed}> {isEditable ? 'Save' : 'Edit'} </button>

            <button className="text-black bg-slate-400 rounded pl-2 pr-2 pt-1 pb-1 hover:ring-1"
                onClick={() => deleteTodos(todo.id)}>Delete</button>
        </div>
    )
}