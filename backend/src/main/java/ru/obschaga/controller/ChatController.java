package ru.obschaga.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.obschaga.dto.ChatDto;
import ru.obschaga.dto.MessageDto;
import ru.obschaga.dto.UserDto;
import ru.obschaga.exception.ChatNotFoundException;
import ru.obschaga.exception.UserNotFoundException;
import ru.obschaga.model.Chat;
import ru.obschaga.model.Message;
import ru.obschaga.model.User;
import ru.obschaga.repository.ChatRepository;
import ru.obschaga.repository.MessageRepository;
import ru.obschaga.repository.UserRepository;
import ru.obschaga.service.UserService;

import java.util.Date;
import java.util.Properties;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/chat")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ChatController {
    private final ChatRepository chatRepository;
    private final MessageRepository messageRepository;
    private final UserService userService;
    private final UserRepository userRepository;

    @GetMapping("/{currentUserId}")
    ResponseEntity<?> getChat(@PathVariable Long currentUserId) throws UserNotFoundException {
        User user = userService.getUserById(currentUserId);
        return ResponseEntity.ok(user
                        .getChats()
                        .stream()
                        .map(chat-> ChatDto.builder()
                                .id(chat.getId())
                                .title(chat.getTitle())
                                .build()
                        )
                        .collect(Collectors.toList())
        );
    }

    @GetMapping("/{currentUserId}/{chatId}")
    ResponseEntity<?> getChatById(@PathVariable Long currentUserId,
                                  @PathVariable Long chatId) throws ChatNotFoundException, UserNotFoundException {
        User user = userService.getUserById(currentUserId);
        if (user.getChats().stream().noneMatch(chat->chat.getId().equals(chatId)))
            throw new ChatNotFoundException();
        return ResponseEntity.ok(chatRepository
                .getById(chatId)
                .getMessages()
                .stream()
                .map(message -> MessageDto.builder()
                        .id(message.getId())
                        .author(message.getAuthor().getId())
                        .timestamp(message.getTimestamp())
                        .text(message.getText())
                        .build()
                )
                .collect(Collectors.toList())
        );
    }

    @PostMapping("/{currentUserId}/{chatId}")
    ResponseEntity<?> sendMessage(@PathVariable Long currentUserId,
                                  @PathVariable Long chatId,
                                  @RequestBody MessageDto messageDto) throws ChatNotFoundException, UserNotFoundException {
        User user = userService.getUserById(currentUserId);
        if (user.getChats().stream().noneMatch(chat->chat.getId().equals(chatId)))
            throw new ChatNotFoundException();
        Message message = messageRepository.save(Message.builder()
                .author(user)
                .text(messageDto.getText())
                .timestamp(new Date())
                .build()
        );
        Chat chat = chatRepository.getById(chatId);
        chat.getMessages().add(message);
        chatRepository.save(chat);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{currentUserId}/{chatId}/important")
    ResponseEntity<?> sendImportantMessage(@PathVariable Long currentUserId,
                                  @PathVariable Long chatId,
                                  @RequestBody MessageDto messageDto) throws ChatNotFoundException, UserNotFoundException {
        User user = userService.getUserById(currentUserId);
        if (user.getChats().stream().noneMatch(chat->chat.getId().equals(chatId)))
            throw new ChatNotFoundException();
        Chat chat = chatRepository.getById(chatId);
        Message message = messageRepository.save(Message.builder()
                .author(user)
                .text(messageDto.getText())
                .chat(chat)
                .timestamp(new Date())
                .build()
        );
        chat
                .getUsers()
                .forEach(u -> {
                    u.getImportantMessages().add(message);
                    userRepository.save(u);
                });
        chat.getMessages().add(message);
        chatRepository.save(chat);
        return ResponseEntity.ok().build();
    }

    @ExceptionHandler(ChatNotFoundException.class)
    ResponseEntity<?> handleChatNotFoundException() {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
