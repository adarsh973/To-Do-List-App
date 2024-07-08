import { useEffect, useState } from 'react'
import { TodoProvider } from './Context/context'
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodos = (id, todo) => {
    setTodos((prev) => prev.map(
      (prevTodo) => (prevTodo.id === id ? todo : prevTodo)
    ))
  }

  const deleteTodos = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map(
      (prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
    ))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length > 0){
      setTodos(todos)
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodos, updateTodos, deleteTodos, toggleComplete }}>

      <div className='h-screen bg-black flex flex-col items-center gap-4'>
        {/* TODO FORM */}
        <TodoForm />
        {/* TODO ITEMS */}
        {todos.map((todo) => (
          <div key={todo.id} className='w-full flex justify-center'>
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>

    </TodoProvider>
  );
}

export default App