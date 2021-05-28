package ru.obschaga.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.obschaga.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> getUserByUsername(String username);
    Optional<User> getUserById(Long id);
}
