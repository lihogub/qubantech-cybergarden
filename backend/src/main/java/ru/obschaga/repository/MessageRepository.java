package ru.obschaga.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.obschaga.model.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {

}
