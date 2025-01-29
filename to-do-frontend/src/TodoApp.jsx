import { useEffect, useState } from "react";
import ToDoAdd from "./components/TodoAdd";
import ToDoList from "./components/TodoList";
import { createTodo, getTodos } from "./services/api";

function TodoApp() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
            const todos = await getTodos();
            setTodos(todos);
        }
        fetchTodos();
    }, [])

    const addNewTodo = async (task) => {
        if (task === "") return;
        const newTodo = await createTodo({ task });
        if (newTodo) {
            setTodos([...todos, newTodo]);
        }
    }

    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo => todo.id === id ?
                { ...todo, completed: !todo.completed } : todo)
        );
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className="bg-white vh-100" >
            <div className="vh-100 container bg-light rounded" style={{ paddingTop: "5vh" }} >
                <h1 className="text-center">To-Do List</h1>
                <ToDoAdd addNewTodo={addNewTodo} />
                <ToDoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
            </div>
        </div>
    );
}

export default TodoApp;