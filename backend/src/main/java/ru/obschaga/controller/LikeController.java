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
@CrossOrigin(origins = "*", maxAge = 3600)
public class LikeController {
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @GetMapping("/{currentUserId}/{postId}")
    ResponseEntity<?> isLiked(@PathVariable Long currentUserId, @PathVariable Long postId) {
        Post post = postRepository.getById(postId);
        return ResponseEntity.ok(post
                .getLikes()
                .stream()
                .anyMatch(u->u
                        .getId()
                        .equals(currentUserId)
                )
        );
    }

    @PostMapping("/{currentUserId}/{postId}")
    ResponseEntity<?> likePost(@PathVariable Long currentUserId, @PathVariable Long postId) {
        Post post = postRepository.getById(postId);
        if (post.getLikes().stream().noneMatch(u->u.getId().equals(currentUserId))) {
            User user = userRepository.getById(currentUserId);
            post.getLikes().add(user);
            postRepository.save(post);
        }
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{currentUserId}/{postId}")
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
