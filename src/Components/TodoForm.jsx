import { useState } from "react"
import useTodo from "../Context/context";

export default function TodoForm() {

    const [todo, setTodo] = useState('');

    const { addTodos } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;

        addTodos({ todo, completed: false })
        setTodo('');
    }

    return (
        <form id="form" className="flex gap-1 justify-center pt-4 w-1/2 text-black" onSubmit={add}>
            <input className="bg-white bg-opacity-20 rounded-l-lg text-white w-full p-2"
                type="text" placeholder="Input message.." value={todo}
                onChange={(e) => setTodo(e.target.value)}></input>

            <button type="submit"
                className="bg-green-700 rounded-r-lg p-2 text-white hover:ring-1 hover:ring-white"
            >ADD</button>
        </form>
    )
}