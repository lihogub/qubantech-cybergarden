package ru.obschaga.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.obschaga.dto.FollowingFollowedDto;
import ru.obschaga.exception.UserNotFoundException;
import ru.obschaga.model.User;
import ru.obschaga.repository.UserRepository;
import ru.obschaga.service.UserService;

@RestController
@AllArgsConstructor
@RequestMapping("/follow")
@CrossOrigin(origins = "*", maxAge = 3600)
public class FollowController {
    private final UserService userService;
    private final UserRepository userRepository;

    @GetMapping("/{currentUserId}/{userId}")
    ResponseEntity<?> isFollowing(@PathVariable Long currentUserId, @PathVariable Long userId) throws UserNotFoundException {
        User currentUser = userService.getUserById(currentUserId);
        return ResponseEntity.ok(FollowingFollowedDto.builder()
                .followed(currentUser
                        .getFollowing()
                        .stream()
                        .anyMatch(user->user.getId().equals(userId))
                )
                .following(currentUser
                        .getFollowers()
                        .stream()
                        .anyMatch(user -> user.getId()
                                .equals(userId))
                )
                .build());
    }

    @PostMapping("/{currentUserId}/{userId}")
    ResponseEntity<?> follow(@PathVariable Long currentUserId, @PathVariable Long userId) throws UserNotFoundException {
        User currentUser = userService.getUserById(currentUserId);
        User targetUser = userService.getUserById(userId);
        if (!currentUser.getFollowing().contains(targetUser)) {
            currentUser.getFollowing().add(targetUser);
            targetUser.getFollowers().add(currentUser);
            userRepository.save(currentUser);
            userRepository.save(targetUser);
        }
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{currentUserId}/{userId}")
    ResponseEntity<?> unfollow(@PathVariable Long currentUserId, @PathVariable Long userId) throws UserNotFoundException {
        User currentUser = userService.getUserById(currentUserId);
        User targetUser = userService.getUserById(userId);
        if (currentUser.getFollowing().contains(targetUser)) {
            currentUser.getFollowing().remove(targetUser);
            targetUser.getFollowers().remove(currentUser);
            userRepository.save(currentUser);
            userRepository.save(targetUser);
        }
        return ResponseEntity.ok().build();
    }
}
