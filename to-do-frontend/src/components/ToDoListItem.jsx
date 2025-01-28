function ToDoListItem({ id, task, onDelete }) {

    const handleDelete = () => onDelete(id);
    return (
        <ul>
            <input type="checkbox"></input>
            <label>{task}</label>
            <button onClick={handleDelete}>Delete</button>
        </ul>
    );
}

export default ToDoListItem;