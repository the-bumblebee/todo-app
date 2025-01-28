import ToDoListItem from "./ToDoListItem";

function ToDoList({ todos, deleteToDo }) {

    return (
        <ul className="list-group">
            {todos.map(todo => (
                <ToDoListItem
                    id={todo.id}
                    task={todo.task}
                    onDelete={deleteToDo} />
            ))}
        </ul>
    );
}

export default ToDoList;