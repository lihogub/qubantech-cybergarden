package ru.obschaga.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.obschaga.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    
}
