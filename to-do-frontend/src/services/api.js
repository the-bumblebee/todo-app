import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/todos"

export const getTodosApi = async () => {
    try {
        const respone = await axios.get(API_BASE_URL);
        return respone.data;
    } catch (error) {
        console.error("Error fetching todos: ", error);
        return [];
    }
}

export const createTodoApi = async (todo) => {
    try {
        const response = await axios.post(API_BASE_URL, todo);
        return response.data;
    } catch (error) {
        console.error("Error saving todo: ", error);
        return null;
    }
}

export const updateTodoStateApi = async (id, updatedTodo) => {
    try {
        const response = await axios.put(API_BASE_URL + `/${id}`, updatedTodo);
        return response.data;
    } catch (error) {
        console.error("Error updating state of todo: ", error);
        return null;
    }
}

export const deleteTodoApi = async (id) => {
    try {
        const response = await axios.delete(API_BASE_URL + `/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting todo: ", error);
        return `ERROR: Todo with id: ${id} was not deleted.`
    }
}