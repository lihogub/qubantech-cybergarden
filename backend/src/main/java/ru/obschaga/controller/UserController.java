package ru.obschaga.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ru.obschaga.dto.UserDto;
import ru.obschaga.exception.UserNotFoundException;
import ru.obschaga.model.User;
import ru.obschaga.service.UserService;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {
    private final UserService userService;

    @GetMapping("/{currentUserId}")
    ResponseEntity<?> getMe(@PathVariable Long currentUserId) throws UserNotFoundException {
        User user = userService.getUserById(currentUserId);
        return ResponseEntity.ok(new UserDto(user));
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
