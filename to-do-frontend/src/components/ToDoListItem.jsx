function ToDoListItem({ id, task, onDelete }) {

    const handleDelete = () => onDelete(id);
    return (
        <li>
            <input type="checkbox" />
            <label>{task}</label>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default ToDoListItem;