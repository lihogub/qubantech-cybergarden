package ru.obschaga.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.obschaga.exception.UserNotFoundException;
import ru.obschaga.model.User;
import ru.obschaga.repository.UserRepository;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public User getUserById(Long id) throws UserNotFoundException {
        return userRepository.getUserById(id).orElseThrow(UserNotFoundException::new);
    }
}
