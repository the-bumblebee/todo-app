package dev.asif.todobackend.service;

import dev.asif.todobackend.model.Todo;
import dev.asif.todobackend.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public Optional<Todo> updateTodoState(Long id, Todo updatedTodo) {
        return todoRepository.findById(id).map(todo -> {
            todo.setCompleted(updatedTodo.getCompleted());
            return todoRepository.save(todo);
        });
    }

    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public List<Todo> getTodos() {
        return todoRepository.findAll();
    }

    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }
}
