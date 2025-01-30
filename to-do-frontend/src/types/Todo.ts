import { NewTodo } from "./NewTodo";

export interface Todo extends NewTodo {
    id: number;
    completed: boolean;
};