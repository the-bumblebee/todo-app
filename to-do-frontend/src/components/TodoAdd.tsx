import React, { ChangeEvent, ChangeEventHandler, KeyboardEvent, KeyboardEventHandler, MouseEventHandler, useState } from "react";

interface TodoAddProps {
    addNewTodo(task: string): void,
}

const ToDoAdd: React.FC<TodoAddProps> = ({ addNewTodo }) => {

    const [inputValue, setInputValue] = useState<string>("");

    const handleInputValueChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleEnterPress: KeyboardEventHandler<HTMLInputElement> = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            addNewTodo(inputValue);
            setInputValue("");
        }
    }

    const handleAdd: MouseEventHandler<HTMLButtonElement> = () => {
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