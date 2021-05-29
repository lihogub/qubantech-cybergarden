package ru.obschaga.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.obschaga.model.Post;
import ru.obschaga.model.User;
import ru.obschaga.repository.PostRepository;
import ru.obschaga.repository.UserRepository;

@RestController
@AllArgsConstructor
@RequestMapping("/like")
public class LikeController {
    private final PostRepository postRepository;
    private UserRepository userRepository;

    @PostMapping("/{currentUser/{postId}")
    ResponseEntity<?> likePost(@PathVariable Long currentUserId, @PathVariable Long postId) {
        Post post = postRepository.getById(postId);
        if (post.getLikes().stream().noneMatch(u->u.getId().equals(currentUserId))) {
            User user = userRepository.getById(currentUserId);
            post.getLikes().add(user);
            postRepository.save(post);
        }
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{currentUser/{postId}")
    ResponseEntity<?> unlikePost(@PathVariable Long currentUserId, @PathVariable Long postId) {
        Post post = postRepository.getById(postId);
        if (post.getLikes().stream().anyMatch(u->u.getId().equals(currentUserId))) {
            User user = userRepository.getById(currentUserId);
            post.getLikes().remove(user);
            postRepository.save(post);
        }
        return ResponseEntity.ok().build();
    }
}
