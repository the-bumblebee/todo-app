import { useState } from "react";

function ToDoAdd({ addNewTodo }) {

    const [inputValue, setInputValue] = useState("");

    const handleInputValueChange = e => {
        setInputValue(e.target.value);
    }

    const handleEnterPress = e => {
        if (e.key === "Enter") {
            addNewTodo(inputValue);
            setInputValue("");
        }

    }

    const handleAdd = () => {
        addNewTodo(inputValue);
        setInputValue("");
    }

    return (
        <div className="input-group input-group-prepend my-2">
            <input
                className="form-control"
                type="text"
                value={inputValue}
                placeholder="Enter Task"
                onChange={handleInputValueChange}
                onKeyDown={handleEnterPress} />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-primary"
                    onClick={handleAdd}>
                    Add Item
                </button>
            </div>
        </div>
    );
}

export default ToDoAdd;