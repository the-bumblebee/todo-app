import ToDoListItem from "./TodoListItem";

function ToDoList({ todos, deleteTodo, toggleTodo }) {

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