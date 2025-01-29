import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/todos"

export const getTodos = async () => {
    try {
        const respone = await axios.get(API_BASE_URL);
        return respone.data;
    } catch (error) {
        console.error("Error fetching todos: ", error);
        return [];
    }
}

export const createTodo = async (todo) => {
    try {
        const response = await axios.post(API_BASE_URL, todo);
        return response.data;
    } catch (error) {
        console.error("Error saving todo: ", error);
        return null;
    }
}