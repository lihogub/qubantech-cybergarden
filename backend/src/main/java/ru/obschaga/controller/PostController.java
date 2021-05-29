package ru.obschaga.controller;

import javassist.NotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.obschaga.dto.PostDto;
import ru.obschaga.exception.UserNotFoundException;
import ru.obschaga.model.Image;
import ru.obschaga.model.Post;
import ru.obschaga.repository.ImageRepository;
import ru.obschaga.repository.PostRepository;
import ru.obschaga.repository.UserRepository;
import ru.obschaga.service.UserService;

import javax.imageio.ImageReader;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/post")
public class PostController {
    private final PostRepository postRepository;
    private final UserService userService;
    private final ImageRepository imageRepository;

    @GetMapping("/{currentUserId}")
    ResponseEntity<?> getFeed(@PathVariable Long currentUserId) throws UserNotFoundException {
        Set<Post> feedSet = new HashSet<>();
        userService
                .getUserById(currentUserId)
                .getFollowing()
                .forEach(user->feedSet.addAll(postRepository.getPostByAuthorId(user.getId())));
        List<Post> feed = new ArrayList<>(feedSet);
        feed.sort(Comparator.comparing(Post::getTimestamp));
        return ResponseEntity.ok(feed.stream().map(PostDto::new).collect(Collectors.toList()));
    }

    @PostMapping("/{currentUserId}")
    ResponseEntity<?> publishPost(@PathVariable Long currentUserId,
                                  @RequestBody PostDto postDto) throws UserNotFoundException {
        Post post = Post.builder()
                .title(postDto.getTitle())
                .description(postDto.getDescription())
                .author(userService.getUserById(currentUserId))
                .images(postDto
                        .getImages()
                        .stream()
                        .map(Image::new)
                        .map(imageRepository::save)
                        .collect(Collectors.toList())
                )
                .timestamp(new Date())
                .build();
        postRepository.save(post);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{currentUserId}/{postId}")
    ResponseEntity<?> getPost(@PathVariable Long currentUserId, @PathVariable Long postId) {
        return ResponseEntity.ok(new PostDto(postRepository.findById(postId).orElseThrow()));
    }
}
