import React from "react";

interface ToDoListItemProps {
    id: number,
    task: string,
    completed: boolean
    deleteTodo(id: number): void,
    toggleTodo(id: number): void,
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({ id, task, completed, deleteTodo, toggleTodo }) => {

    const handleDelete = () => deleteTodo(id);
    const handleToggle = () => toggleTodo(id);

    return (
        <li key={id} className="list-group-item d-flex">
            <input className="m-2" type="checkbox" checked={completed} onChange={handleToggle} />
            <label className="my-auto blockquote" style={{ textDecoration: completed ? "line-through" : "none" }}>
                {task}
            </label>
            <button
                className="ml-auto btn btn-outline-danger"
                onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default ToDoListItem;