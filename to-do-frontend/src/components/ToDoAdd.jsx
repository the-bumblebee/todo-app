import { useState } from "react";

function ToDoAdd({ onAdd }) {

    const [inputValue, setInputValue] = useState("");

    const handleInputValueChange = e => {
        setInputValue(e.target.value);
    }

    const handleEnterPress = e => {
        if (e.key === "Enter") {
            onAdd(inputValue);
            setInputValue("");
        }

    }

    const handleAdd = () => {
        onAdd(inputValue);
        setInputValue("");
    }

    return (
        <div className="input-group">
            <input
                type="text"
                value={inputValue}
                placeholder="Enter Task"
                onChange={handleInputValueChange}
                onKeyDown={handleEnterPress} />
            <button
                onClick={handleAdd}>
                Add Item
            </button>
        </div>
    );
}

export default ToDoAdd;