package dev.asif.todobackend.repository;

import dev.asif.todobackend.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
