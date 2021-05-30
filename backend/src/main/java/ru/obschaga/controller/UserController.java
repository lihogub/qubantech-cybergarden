package ru.obschaga.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.obschaga.dto.UserDto;
import ru.obschaga.exception.UserNotFoundException;
import ru.obschaga.model.Message;
import ru.obschaga.model.User;
import ru.obschaga.repository.UserRepository;
import ru.obschaga.service.UserService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;

    @GetMapping("/{currentUserId}")
    ResponseEntity<?> getMe(@PathVariable Long currentUserId) throws UserNotFoundException {
        User user = userService.getUserById(currentUserId);
        return ResponseEntity.ok(new UserDto(user));
    }

    @GetMapping("/{currentUserId}/msg")
    ResponseEntity<?> getImportantMessages(@PathVariable Long currentUserId) throws UserNotFoundException {
        User user = userService.getUserById(currentUserId);
        return ResponseEntity.ok(user
                .getImportantMessages()
                .stream()
                .filter(msg->msg.getChat() != null)
                .map(msg -> msg
                        .getChat()
                        .getId()
                )
                .collect(Collectors.toSet())
        );
    }

    @DeleteMapping("/{currentUserId}/msg/{chatId}")
    ResponseEntity<?> deleteImportantMessages(@PathVariable Long currentUserId,
                                              @PathVariable Long chatId) throws UserNotFoundException {
        User user = userService.getUserById(currentUserId);
        Set<Message> messageSet = user
                .getImportantMessages()
                .stream()
                .filter(msg -> msg.getChat() != null && msg.getChat().getId() != chatId)
                .collect(Collectors.toSet());
        user.setImportantMessages(new ArrayList<>(messageSet));
        userRepository.save(user);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{currentUserId}/{userId}")
    ResponseEntity<?> getUser(@PathVariable Long currentUserId,
                              @PathVariable Long userId) throws UserNotFoundException {
        return ResponseEntity.ok(new UserDto(userService.getUserById(userId)));
    }

    @ExceptionHandler(UserNotFoundException.class)
    ResponseEntity<?> handleNotFoundException() {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
