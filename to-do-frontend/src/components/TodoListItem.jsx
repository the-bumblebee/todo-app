function ToDoListItem({ id, task, completed, deleteTodo, toggleTodo }) {

    const handleDelete = () => deleteTodo(id);
    const handleToggle = () => toggleTodo(id);
    return (
        <li className="list-group-item d-flex">
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