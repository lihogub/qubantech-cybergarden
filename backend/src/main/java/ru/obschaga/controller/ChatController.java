package ru.obschaga.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.obschaga.dto.ChatCreateRequest;
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

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collections;
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

    // create chat with specified participants
    @GetMapping("/{currentUserId}/create")
    ResponseEntity<?> createChat(@PathVariable Long currentUserId,
                                 @RequestBody ChatCreateRequest chatCreateRequest) {
        Chat chat = Chat.builder()
                .title(chatCreateRequest.getTitle())
                .owner(userRepository.getById(currentUserId))
                .users(chatCreateRequest
                        .getUsers()
                        .stream()
                        .map(userRepository::getById)
                        .collect(Collectors.toList()))
                .build();
        chatRepository.save(chat);
        return ResponseEntity.ok().build();
    }

    // create private chat with person
    @PostMapping("/{currentUserId}/private/{userId}")
    ResponseEntity<?> createPrivateChat(@PathVariable Long currentUserId,
                                        @PathVariable Long userId) {
        User currentUser = userRepository.getById(currentUserId);
        User targetUser = userRepository.getById(userId);
        Chat chat = Chat.builder()
                .title(currentUser.getFirstname() + " " + targetUser.getFirstname())
                .owner(userRepository.getById(currentUserId))
                .users(Collections.singletonList(targetUser))
                .build();
        chatRepository.save(chat);
        return ResponseEntity.ok().build();
    }

    // add user by userId to chat by chatId
    @PostMapping("/{currentUserId}/add/{chatId}/{userId}")
    ResponseEntity<?> addUserToChat(@PathVariable Long chatId, @PathVariable Long userId) {
        Chat chat = chatRepository.getById(chatId);
        chat.getUsers().add(userRepository.getById(userId));
        chatRepository.save(chat);
        return ResponseEntity.ok().build();
    }

    // get chats for "authenticated" user
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

    // get messages for specified chat
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

    // send message to specified chat
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


    // send IMPORTANT message to specified chat
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
