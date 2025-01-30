import { useEffect, useState } from "react";
import ToDoAdd from "./components/TodoAdd";
import ToDoList from "./components/TodoList";
import {  createTodoApi, deleteTodoApi, getTodosApi, updateTodoStateApi } from "./services/api";
import { Todo } from "./types/Todo";
import React from 'react';


function TodoApp() {

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, [])

    const fetchTodos = async () => {
        const todos = await getTodosApi();
        setTodos(todos);
    };

    const addNewTodo = async (task: string) => {
        if (task === "") return;
        const newTodo = await createTodoApi({ task });
        if (newTodo) {
            setTodos([...todos, newTodo]);
        }
    };

    const toggleTodo = async (id: number) => {
        const updatedTodo: Todo | undefined = todos.find(todo => todo.id === id);
        if (!updatedTodo)
            return;
        updatedTodo.completed = !updatedTodo.completed;
        const responseTodo: Todo | null = await updateTodoStateApi(id, updatedTodo);
        await fetchTodos();
    };

    const deleteTodo = async (id: number) => {
        await deleteTodoApi(id);
        setTodos(todos.filter(todo => todo.id !== id));
    };

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