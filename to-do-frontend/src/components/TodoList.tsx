import React from "react";
import ToDoListItem from "./TodoListItem";
import { Todo } from "../types/Todo";

interface TodoListProps {
    todos: Todo[],
    deleteTodo(id: number): void,
    toggleTodo(id: number): void,
}

const ToDoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleTodo }) => {

    return (
        <ul className="list-group">
            {todos.map(todo => (
                <ToDoListItem
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
}

export default ToDoList;