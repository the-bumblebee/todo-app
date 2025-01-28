import { useState } from "react";
import ToDoAdd from "./components/ToDoAdd";
import ToDoList from "./components/ToDoList";

function ToDo() {

    const [todos, setTodos] = useState([
        {id: 0, task: "Do Project"},
        {id: 1, task: "Push to Git"},
        {id: 2, task: "Stylize"},
        {id: 3, task: "Refactor"},
    ])

    const addToDo = (task) => {
        if (task === "") return;
        const newTodos = [...todos,
            {id: todos.length, task: task}
        ]
        setTodos(newTodos);
    }

    const deleteToDo = (id) => {
        setTodos(todos.filter(todo => todo.id != id));
    }

    return ( 
        <div className="container">
            <h1>To-Do List</h1>
            <ToDoAdd onAdd={addToDo} />
            <ToDoList todos={todos} deleteToDo={deleteToDo} />
        </div>
     );
}

export default ToDo;