import ToDoListItem from "./ToDoListItem";

function ToDoList({ todos, deleteToDo }) {

    return (
        <li>
            {todos.map(todo => (
                <ToDoListItem
                    id={todo.id}
                    task={todo.task}
                    onDelete={deleteToDo} />
            ))}
        </li>
    );
}

export default ToDoList;