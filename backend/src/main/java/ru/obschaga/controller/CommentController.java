package ru.obschaga.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.obschaga.dto.CommentDto;
import ru.obschaga.model.Comment;
import ru.obschaga.model.Post;
import ru.obschaga.model.User;
import ru.obschaga.repository.CommentRepository;
import ru.obschaga.repository.PostRepository;
import ru.obschaga.repository.UserRepository;

import java.util.Date;

@RestController
@AllArgsConstructor
@RequestMapping("/comment")
public class CommentController {
    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;
    @PostMapping("/{currentUserId}/{postId}")
    ResponseEntity<?> publishComment(@PathVariable Long currentUserId,
                                     @PathVariable Long postId,
                                     @RequestBody CommentDto commentDto) {
        Post post = postRepository.getById(postId);
        Comment comment = Comment.builder()
                .author(userRepository.getById(currentUserId))
                .anonymous(commentDto.getAnonymous())
                .text(commentDto.getText())
                .timestamp(new Date())
                .build();
        commentRepository.save(comment);
        post.getComments().add(comment);
        postRepository.save(post);
        return ResponseEntity.ok().build();
    }
}
