import { useState } from "react";
import ToDoAdd from "./components/TodoAdd";
import ToDoList from "./components/TodoList";

function TodoApp() {

    const [todos, setTodos] = useState([
        { id: 0, task: "Do Project", completed: false },
        { id: 1, task: "Push to Git", completed: false },
        { id: 2, task: "Stylize", completed: false },
        { id: 3, task: "Refactor", completed: true },
    ])

    const addNewTodo = (task) => {
        if (task === "") return;
        const newTodos = [...todos,
        { id: todos.length, task: task, completed: false }
        ]
        setTodos(newTodos);
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